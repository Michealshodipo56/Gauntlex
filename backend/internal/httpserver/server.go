package httpserver

import (
	"context"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"

	"github.com/Michealshodipo56/gauntlex/backend/internal/ai"
	"github.com/Michealshodipo56/gauntlex/backend/internal/store"
)

type Server struct {
	router *chi.Mux
	store  *store.Store
	ai     ai.Client
}

func New(st *store.Store, aiClient ai.Client, frontendOrigin string) *Server {
	s := &Server{
		router: chi.NewRouter(),
		store:  st,
		ai:     aiClient,
	}

	s.router.Use(middleware.Logger)
	s.router.Use(middleware.Recoverer)
	s.router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{frontendOrigin},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	}))

	s.routes()
	return s
}

func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

func (s *Server) routes() {
	s.router.Get("/health", s.handleHealth)

	s.router.Route("/api", func(r chi.Router) {
		r.Use(requireAuth)
		r.Get("/me/current-subject", s.handleCurrentSubject)
	})
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}

func (s *Server) handleCurrentSubject(w http.ResponseWriter, r *http.Request) {
	userID, ok := userIDFromContext(r.Context())
	if !ok {
		http.Error(w, "missing user", http.StatusUnauthorized)
		return
	}

	ctx := r.Context()
	if err := s.store.EnsureUserInitialized(ctx, userID); err != nil {
		http.Error(w, "failed to initialize progress: "+err.Error(), http.StatusInternalServerError)
		return
	}

	subject, err := s.store.CurrentSubjectForUser(ctx, userID)
	if err != nil {
		http.Error(w, "failed to load current subject: "+err.Error(), http.StatusInternalServerError)
		return
	}

	writeJSON(w, http.StatusOK, subject)
}

// Shutdown allows main.go to release resources (currently just the store's
// pool; kept as a method here so the server owns its own lifecycle).
func (s *Server) Shutdown(_ context.Context) error {
	s.store.Close()
	return nil
}
