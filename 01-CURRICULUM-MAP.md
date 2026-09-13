# 01-edu Curriculum Map for Gauntlex

**Purpose of this document:** Gauntlex delivers the 01-edu curriculum to users one task at a time, in strict sequential order. The raw curriculum content — forked into [`Michealshodipo56/01`](https://github.com/Michealshodipo56/01) from the official [`01-edu/public`](https://github.com/01-edu/public) repo — is currently just ~800 top-level folders dumped flat into a `subjects/` directory with no encoded ordering, no dependency graph, and folder names that are sometimes actively misleading (see the `AI.GO` case below). This document is the result of cloning that repo, reading essentially all of it (1,441 `README.md` files), cross-referencing it against 01-edu's official pedagogy documentation and live web sources, and reconstructing the correct arrangement so Gauntlex's sequential-unlock model has something real to walk through.

**How this was produced:** the repo was cloned locally, a script extracted a structured digest (title, first paragraph, language-keyword guesses, duration mentions) from every `README.md`, and that digest was split into 9 buckets by category. Eight parallel research passes then read every entry's actual `README.md` (not just the digest) for anything ambiguous, checked cross-references between projects, and proposed an ordering with an explicit confidence level per item. Everything below is that work, consolidated. Where something is inferred rather than confirmed, it says so — do not treat every ordering decision here as gospel; treat the *confirmed* facts (folder contents, explicit dependencies, official quest numbers) as solid and the *inferred* orderings as a strong, documented starting point that a human should sanity-check before it becomes gating logic in production.

**Repo snapshot used:** `Michealshodipo56/01` at commit on `master`, cloned to a local scratch path during this research session. 4,252 total tree entries, 1,441 `README.md` files, ~338MB checked out.

---

## Table of Contents

1. [What is 01-edu? (Pedagogy Overview)](#1-what-is-01-edu-pedagogy-overview)
2. [Repo Structure Inventory](#2-repo-structure-inventory)
3. [How Verification Works in the Source Repo](#3-how-verification-works-in-the-source-repo)
4. [The Core Curriculum — Proposed Arrangement](#4-the-core-curriculum--proposed-arrangement)
   - 4.1 [Piscine Go](#41-piscine-go-246-exercises)
   - 4.2 [Piscine JavaScript](#42-piscine-javascript-128-exercises)
   - 4.3 [Piscine Rust](#43-piscine-rust-35-exercises)
   - 4.4 [Piscine Shell/CLI](#44-piscine-shellcli-13-exercises)
   - 4.5 [Sysadmin Piscine (`sys/`)](#45-sysadmin-piscine-sys)
   - 4.6 [Core Projects (the ~50-project phase)](#46-core-projects-the-post-piscine-project-phase)
   - 4.7 [Bonus / Optional Sub-Features](#47-bonus--optional-sub-features-of-core-projects)
5. [The Specialization Branches](#5-the-specialization-branches)
   - 5.1 [Artificial Intelligence](#51-artificial-intelligence-branch)
   - 5.2 [Blockchain & Crypto](#52-blockchain--crypto-branch)
   - 5.3 [Cloud DevOps](#53-cloud-devops-branch)
   - 5.4 [Java Full-Stack Development](#54-java-full-stack-development-branch)
   - 5.5 [Mobile Applications](#55-mobile-applications-branch)
   - 5.6 [Video Games](#56-video-games-branch)
   - 5.7 [Cybersecurity](#57-cybersecurity-branch)
   - 5.8 [User Experience (UX/UI)](#58-user-experience-uxui-branch)
6. [Cross-Cutting Data-Quality Issues](#6-cross-cutting-data-quality-issues)
7. [Recommended Gauntlex Data Model](#7-recommended-gauntlex-data-model)
8. [Open Questions for a Human to Resolve](#8-open-questions-for-a-human-to-resolve)

---

## 1. What is 01-edu? (Pedagogy Overview)

01-edu is the curriculum system behind Zone01, 01Founders, and other schools in the 42-network family (Alem School, grit:lab, ynov, etc. all run forks of the same public repo — that's why you'll see references to `01.alem.school`, `01.kood.tech`, `beta.01-edu.org` scattered through this document; they're sibling schools running the same curriculum on their own Gitea instances). The pedagogy explicitly optimizes for "learning how to learn" over content delivery: subjects are **deliberately ambiguous**, there is no answer key, and the school's own README says so outright ("Some of our subjects are intentionally designed to be ambiguous or less specific, reflecting our unique pedagogical approach"). This is directly why Gauntlex's Socratic-AI-Guide model (never give the answer, ask probing questions) is the right fit for this content — it's not a workaround for a content gap, it's the same design philosophy the original human peer-audit process was built around.

### Structure at a glance

| Component | Definition |
|---|---|
| **Piscine** | 3-4 weeks of intensive learning on one language/subject (Go, JavaScript, Rust, Java, AI). |
| **Quest** | A set of 5-15 exercises around one notion, done in a single day during a piscine. |
| **Exam** | An individual, timed task (4-8 hours) during a piscine, testing progression so far. |
| **Raid** | A weekend group project during a piscine, testing problem-solving/co-creation. |
| **Project** | A 1-12 week deliverable done between piscines, solo or in a group, some mandatory, some optional. |

### The two-year path

```
Month 0        Piscine Go (4 weeks) — candidate selection program
                  ↓
Months 1-18    Core curriculum: 4 language piscines (Go, JS, Rust, Java)
               interleaved with ~50 projects across many languages
               (Go, JS, Rust, but also C, C++, Ruby-on-Rails, PHP, Python, Java...)
                  ↓
Months 19-24   One 6-month specialization branch, chosen from:
               AI · Blockchain & Crypto · Java Full-Stack · Video Games (Unreal Engine)
               Mobile Applications · Cloud DevOps · Cybersecurity · UX/UI
```

Official durations for the language piscines, per 01-edu's own docs:

| Piscine | Duration | Composition |
|---|---|---|
| Go (candidate selection) | 4 weeks | 12 Quests, 4 Exams, 3 Raids |
| JavaScript | 3 weeks | 8 Quests, 3 Raids |
| Rust | 4 weeks | 9 Quests, 3 Raids |
| Java | 3 weeks | 7 Quests, 3 Raids |
| AI (branch intro) | 3 weeks | 15 Quests, 2 Raids |

**Verified against this repo:** the AI piscine's "15 quests, 2 raids" claim checks out exactly against `subjects/ai/` (see §5.1). The Blockchain branch's own README embeds an explicit ordering that doesn't match the generic "piscine + 4-8 projects" framing — it's "9 Quests + 2 Raids" bundled together with no piscine/project split at all (see §5.2). Several branches (Cybersecurity, Java) have noticeably more than "4-8 projects" in the live repo — pedagogy docs describe the target shape, not necessarily what's shipped in this snapshot; treat the official numbers as intent, and this document's counts as what's actually there to serve today.

### Sources
- 01-edu pedagogy overview (provided by the user, cross-checked against the points below)
- [`docs.drips.network`](https://docs.drips.network) and [`beta.01-edu.org`](https://beta.01-edu.org) search results for piscine curriculum docs (see §6 for why the canonical GitHub mirror doesn't have these files but sibling Gitea instances do)
- Direct inspection of `subjects/blockchain/README.md` and `subjects/sys/README.md`, which are the *only* two folders in this entire repo that contain an explicit, authored ordering — everything else had to be reconstructed from content

---

## 2. Repo Structure Inventory

Top level of the repo:

```
01/
├── .github/            CI workflows, issue templates
├── docs/               Platform/admin documentation (DB schema, exam-board setup, USB install guides)
│                        — NOT curriculum content. Nothing here defines subject ordering.
├── dom/                Puppeteer-based automated test suite for the JS/DOM piscine exercises
├── js/                 Node-based automated test suite for the JS piscine exercises
├── sh/                 Shell/bash automated test suite (Debian-based)
├── employment-tasks/   Recruiter-facing technical-screening tasks (software-engineer, devops roles)
│                        — NOT learner curriculum. Separate concern entirely.
├── subjects/           ALL curriculum content. 807 immediate child folders, 1,441 README.md files total.
├── README.md           Generic welcome page, no structural information
└── CNAME
```

**The core problem, confirmed:** `subjects/` has no sub-directory scheme separating piscines from projects from branches. A handful of top-level names ARE branch containers with real internal structure (`ai/`, `blockchain/`, `cybersecurity/`, `devops/`, `java/`, `mobile-dev/`, `gaming/`, `user-experience/`, plus the mislabeled `AI.GO/`), holding 807 minus those = ~792 other top-level entries that are core-curriculum piscine exercises and projects, indistinguishable by folder structure alone — a trivial `hello` Go exercise and the 3-week `corewar` project sit as sibling folders with identical shape (a `README.md`, usually an `audit/README.md`).

| Bucket | Count | What it is |
|---|---|---|
| Core piscine exercises (short) | 427 | Go/JS/Rust daily quests |
| Core projects + misfiled exam/exercises (longer README) | 365 | The ~29 real flagship projects are in here, mixed with piscine exams |
| Bonus/optional sub-features of core projects | 117 | e.g. `forum/authentication`, `groupie-tracker/filters` |
| AI branch | 52 | + 24 in the misleadingly-named `AI.GO/` (not actually AI content — see §5.1) |
| Blockchain branch | 58 |
| Cybersecurity branch | 40 |
| DevOps branch | 119 | Largest single branch |
| Java branch (piscine + full-stack branch, co-located) | 139 |
| Mobile Applications branch | 46 |
| Video Games branch | 22 |
| User Experience branch | 32 |

**No `piscine-go/`, `piscine-js/`, `piscine-rust/`, or `piscine-blockchain/` folders exist anywhere in this repo**, despite those names appearing in official 01-edu documentation and in the URLs of sibling schools' curriculum docs. This was independently confirmed by three different research passes (direct `find`, full-repo grep, and manual `ls`). The piscine content for each language is simply mixed into the flat `subjects/` list (Go/JS/Rust/Shell) or nested inside the branch folder that shares its name (Java's piscine lives inside `subjects/java/piscine/`, sitting right next to the unrelated 6-month Java Full-Stack branch projects in `subjects/java/projects/`).

### Where the official ordering documents actually live

Official 01-edu maintains files named `docs/piscine-go-curriculum.md`, `docs/piscine-rust-curriculum.md` (and likely JS/Java equivalents) that DO contain authoritative quest-by-quest ordering — confirmed via web search results showing these files hosted at `beta.01-edu.org`, `01.alem.school`, and `01.kood.tech` (all Gitea instances run by 01-edu-family schools). **These files do not exist in the `01-edu/public` GitHub mirror, nor in the `Michealshodipo56/01` fork of it** — confirmed via GitHub's code search API and direct directory listing of `docs/` on both. This means either (a) these are school-specific customizations never merged upstream, or (b) they exist on a different branch/tag than what's mirrored to GitHub. All direct-fetch attempts against the Gitea instances failed (DNS/connection errors from this environment — they may require a login, or simply weren't reachable from here). **If you can reach `beta.01-edu.org` or `01.alem.school` from your own network, fetching `docs/piscine-go-curriculum.md`, `docs/piscine-rust-curriculum.md`, and any JS/Java equivalents should be the first thing you do before trusting this document's piscine-exercise orderings over it** — they would be authoritative where this document is reconstructed-from-content.

---

## 3. How Verification Works in the Source Repo

This matters directly for Gauntlex's Docker-sandbox test-execution step.

### Audit files: the human peer-review format

Every subject has an `audit/README.md` — a checklist written for a **human peer auditor**, not a machine. Example, `subjects/net-cat/audit/README.md` (abridged):

```markdown
##### Try running `./TCPChat`.
###### Is the server listening for connections on the default port?

##### Try opening 3 terminals, run `./TCPChat <port>` on the first...
###### Do both clients connect to the server with success?

#### Bonus
###### +Can the Clients change their names?
###### +Does the code obey the good practices?
```

This is exactly the input format Gauntlex's **AI Auditor** should consume — it's already framed as a set of yes/no verification questions probing real behavior, not rote test cases. The `#### Bonus` section (prefixed `+`) maps directly to optional/bonus features and should probably be treated as extra-credit questions, not blocking ones.

### Automated tests: only exist for a fraction of subjects

Three top-level folders contain real, runnable test suites:

- **`js/tests/`** — Node-based tests, one file per JS-piscine exercise (e.g. `sortable1_test.js`, `find-expression_test.js`), run via `node test.mjs <student-repo-path> <exercise-name>`.
- **`dom/`** — Puppeteer + Docker-based tests for the JS/DOM-manipulation piscine exercises (has its own `Dockerfile` that copies `subjects/` in and runs headless-browser assertions).
- **`sh/`** — Debian-based shell-piscine test suite.

**These three cover only the JS, DOM, and Shell piscine exercises.** There is no equivalent automated test suite anywhere in this repo for: Go piscine exercises, Rust piscine exercises, any of the ~29 core projects (net-cat, forum, corewar, etc.), or any branch content (AI, Blockchain, DevOps, etc.) — those all rely purely on the human-auditor `audit/README.md` checklist and the school's manual review process.

**Implication for Gauntlex:** the "Server-side test validation" step in your core loop (independently re-running the subject's real test suite in an isolated sandbox) has ready-made source material for JS/DOM/Shell piscine tasks only. For everything else — which is the overwhelming majority of the curriculum — Gauntlex will need to **author its own test suites** per subject, using the `audit/README.md` as a spec for what "correct" looks like, or lean more heavily on the AI Auditor step to compensate for the lack of an automated check on functional correctness. This is a significant scoping decision, not a minor detail — budget for it accordingly.

---

## 4. The Core Curriculum — Proposed Arrangement

Everything in this section covers the ~792 top-level `subjects/` folders that aren't one of the 9 branch containers — i.e., the language piscines and the ~50-project phase between them.

### 4.1 Piscine Go (246 exercises)

Confirmed via web search: the official `piscine-go-curriculum.md` describes Quest 1 as command-line fundamentals (`introduction`, `make-it-better`, `to-git-or-not-to-git`, `who-are-you`, `cl-camp1`–`cl-camp8`, `now-get-to-work`) and Quest 2 as Go basics (variable declaration, loops, if/else, `printalphabet`, `printnbr`, etc.), with later quests covering string manipulation, range loops, pointers, and modulo/division. **Note the overlap**: several of those "Quest 1" names (`cl-camp1`–`cl-camp8`, `to-git-or-not-to-git`, `who-are-you`, `now-get-to-work`) are exactly the folders this repo's content classifies as the Shell/CLI cluster (§4.4), not Go. This suggests the official Go piscine's first quest and this repo's "Shell/CLI" cluster are the *same thing* — a command-line-literacy on-ramp that happens before real Go syntax starts. Treat §4.4 as effectively **Go Piscine Quest 1**, and everything below as Quest 2 onward.

246 exercises is far more than "12 quests" worth at 5-15 exercises/quest (60-180 range) — this repo has accumulated exercises beyond a single school-year's official quest list, or duplicates/variants across years. Proposed difficulty tiers (not official day boundaries, which aren't recoverable from content alone):

**Tier 1 — print/string basics (51 exercises).** First-day material: `hello`, `displayp`, `displays`, `only1`/`onlya`/`onlyb`/`onlyf`/`onlyz`, `displayfirstparam`, `displaylastparam`, `printparams`, `printprogramname`, `printstr`, `printnbr`, `printif`/`printifnot`, `frontback`, `tabmult`, `stringtobool`, `alphamirror`, `jumpover`, `thirdtimeisacharm`, `loafofbread`, `repeatalpha`, `rostring`, `rotargn`, `argrot1`, `rot13`, `rot14`, `returna`, `union`, `inter`, `wdmatch`, `weareunique`, `zipstring`, `balancedstring`, `comcheck`, `cleanstr`, `expandstr`, `nbrconvertalpha`, `printrot`, `isalpha`, `isnumeric`, `isprintable`, `sumthemall`, `boolean`, `alphaposition`, `disclaimer` (meta note, not a real task).

**Tier 2 — conditionals, loops, strings/slices, basic params (137 exercises).** The bulk of the piscine: `abort`, `addfront`, `addifpositive`, `alphacount`, `appendrange`/`descendappendrange`, `arraysum`, `ascii`, `basicjoin`, `betweenus`, `binaryaddition`, `binarycheck`, `brackets`, `byebyefirst`, `canyoucount`, `capitalize`, `checknumber`, `compare`, `concat`/`concatenate`/`concatparams`/`concatslice`, `convertbase`, `countalpha`, `countcharacter`, `countdown`, `countnegative`, `countstars`, `createelem`, `delete`, `digitlen`, `displaya`/`displayz`, `displayalpham`/`displayalrevm`, `displayfile`, `divisors`, `divmod`, `evenlength`/`oddlength`, `firstrune`/`lastrune`/`nrune`, `firstword`/`lastword`, `fishandchips`, `fixthemain`, `foldint`, `foreach`, `map`, `getalpha`, `getarea`, `getascii`, `halfslice`/`secondhalf`, `hashcode`, `index`, `inverttree`, `iscapitalized`, `islower`/`isupper`, `ismultiple`, `isnegative`/`strisnegative`, `ispowerof2`, `issamestring`, `issquare`, `iterativepower`, `itoa`/`itoabase`, `join`, `leapyear`, `makerange`, `max`, `numofdigits`, `paramcount`, `paramrange`, `piglatin`, `pilot`, `point`, `pingpong`, `popint`, the `printalphabet*`/`printreversealphabet*`/`printalt*` family (12 variants), `printascii`, `printdigits`, `printevenarguments`, `printhex`, `printmiddle`, `printnbrinorder`, `printwordstables`, `quarterofayear`, `range`/`reverserange`, `rectperimeter`, `removeduplicate`, `removeodd`, `replaceeven`, `retainfirsthalf`, `reversesecondhalf`, `revargs`/`revparams`, `reversemenuindex`, `reversestrcap`, `reversestrings`, `revwstr`, `rotatevowels`, `shoppingsummarycounter`, `sliceadd`/`sliceremove`, `split`/`splitwhitespaces`, `sqrt`/`squareroot`, `strlen`, `strrev`, `sum`, `sumascii`, `swap`/`swapargs`/`swapfirst`/`swaplast`/`swapname`, `switchcase`, `tolower`/`toupper`, `ultimatedivmod`, `unmatch`, `vowels-index`, `wordflip`.

**Tier 3 — recursion, sorting, primes, combinatorics, pointers (29 exercises).** `addprimesum`, `advancedsortwordarr`, `bezero`, `chunk`, `compact`, `descendcomb`, `printcomb`/`printcomb2`/`printcombn`/`printrevcomb`, `fibonacci`, `findnextprime`/`findprevprime`, `fprime`, `gcd`/`lcm`, `isprime`, `iterativefactorial`/`recursivefactorial`, `recursivepower`, `pointone`/`ultimatepointone`, `reduceint`, `searchreplace`, `shoppinglistsort`, `sortintegertable`, `sortparams`, `sortwordarr`, `twosum`.

**Tier 4 — linked lists, binary trees, bit manipulation, backtracking (29 exercises).** `listlast`, `listpushback`/`listpushfront`, `listpushpara`/`listpushparams` (likely a duplicate pair — see §6), `listreverse`, `listsize`, `sortlist`, `sortll`, `reverse`, the `btreeapply*` family (4 traversal variants), `btreedeletenode`, `btreeisbinary`, `btreelevelcount`, `btreemax`/`btreemin`, `btreeprintroot`, `btreetransplant`, `activebits`, `reversebits`, `swapbits`, `printbits`, `printmemory`, `collatzcountdown`, `dealapackofcards`, `eightqueens`, `sudoku`.

### 4.2 Piscine JavaScript (128 exercises)

**Important finding: two distinct JS naming conventions exist in this repo**, likely two different eras/sources of content:
1. A **"narrative" track** (the majority) with whimsical pop-culture names (`biggie-smalls`, `fikbuk`, `ratchet-clap`, `nasa`, `olympic`, `jaden-case`) that link out to `nan-academy.github.io/js-training` — this is almost certainly the original 01-edu/Zone01 Piscine JS.
2. A **`js-`-prefixed track** (13 entries: `js-divisor-finder`, `js-even-sum`, `js-factorial`, `js-fibonacci`, `js-flatten-object`, `js-grid-word-finder`/`js-grid-word-finder2`, `js-nested-array-reverser`, `js-palindromic-chains`, `js-perfect-num`, `js-sentence-pyramid`, `js-swappable-object`, `js-array-chunk-reversal`) with plain algorithmic naming and no narrative flavor or `nan-academy` links — likely a newer or supplementary "JS Algorithms" module. **Recommend treating these as a distinct late-stage quest, not interleaved into the main sequence.**

**Tier 1 — variables, primitives, basic functions (13):** `a-string-of-number`, `an-undefined-future`, `primitives`, `biggie-smalls`, `the-true-king`, `what-9000`, `ultra-venom-speed-control-system-rgb`, `jaden-case`, `diamon`, `funfunfunction`, `give-back`, `same-amount`, `verydisco-forever`.

**Tier 2 — conditionals, loops, objects, arrays, dates, regex (98 — largest tier).** Includes core exercises like `abs`, `average`, `capitalized`, `change`, `circular`, `concat-str`, the date-handling cluster (`count-from-10`, `count-up-to`, `count-leap-years`, `day-of-the-year`, `get-some-time`, `rebecca-black`, `sunny-sunday`, `unicode-technical-report-35`), array/string helpers reimplementing built-ins (`filter`, `for-each`, `mapper`, `reverser`, `slicer`, `flow`), object manipulation (`get`, `invert`, `pick-omit`, `mixed-feelings`, `nested-objects`, `mutability`, `replica`), regex-heavy exercises (`greedy-url`, `group-price`, `ion-out`, `its-a-match`, `letter-space-number`, `valid-ip`, `vowel-dots`), and many more single-concept drills. Full list preserved in the research digest at `/tmp/.../01curriculum/core_small.json` if you need the exhaustive enumeration beyond what's summarized here.

**Tier 3 — recursion, currying, async, higher-order functions, pyramids (17):** `all` (Promise.all for objects), `chunky`, `currify`/`sweet-curry`, `deep-copy`, `flat`, `js-array-chunk-reversal`, `js-factorial`, `js-fibonacci`, `js-flatten-object`, `js-grid-word-finder`/`js-grid-word-finder2`, `js-sentence-pyramid`, `nested-loops`/`nested-loops-2`/`nested-loops-3`, `pyramid`, `race`, `recursion`, `security`, `series`, `using-reduce`/`your-own`.

### 4.3 Piscine Rust (35 exercises)

Note: many entries were flagged `HTML/CSS/DOM` by automated keyword detection but are confirmed 100% pure Rust via README inspection — false positives from the crude tagger, not actual web content.

- **Tier 1 (1):** `borrow`.
- **Tier 2 — functions, structs, string ops (17):** `delete_prefix`, `doubtful`, `get_products`, `invert_sentence`, `lastup`, `middle_day` (uses the `chrono` crate), `min_and_max`, `name_initials`, `ordinal`, `pangram`, `panic`, `reverse_it`, `speed_transformation`, `stars`, `strings`, `temperature_conv`, `to_url`.
- **Tier 3 — closures, generics, hashmaps, sorting, primes (11):** `adding`, `arrange_it`, `bigger`/`smallest`, `collect` (bubble sort), `generics`, `nextprime`/`previousprime`, `searching`, `slices_to_map`, `string_permutation`.
- **Tier 4 — iterators, lifetimes, trees, algorithms (6):** `closures`, `edit_distance` (Levenshtein), `flat_tree` (BTreeSet), `lifetimes`, `matrix_display`, `roman_numbers_iter`.

### 4.4 Piscine Shell/CLI (13 exercises)

This cluster forms its own clean, story-driven progression and — per the official Go-piscine curriculum doc found via web search — is likely **Go Piscine Quest 1** in disguise (see §4.1's opening note), a command-line on-ramp before real Go syntax begins:

`cl` / `cl-camp1` (custom `ls`, near-duplicates of each other — see §6) → `cl-camp2` (`cat -e`) → `cl-camp3` (`find`) → `cl-camp5` (`find` + sort) → `cl-camp6` (recursive counting) → `cl-camp7` (quoted filenames) → `cl-camp8` (`awk`/`sed`) → `cl-camp4` (first `curl`+`jq` API script) → `explain` → `to-git-or-not-to-git` → `who-are-you` → `now-get-to-work` (final `head`/`tail` extraction task). The last four all share a "superhero API" `curl`+`jq` narrative thread and read as a connected finale.

### 4.5 Sysadmin Piscine (`sys/`)

`subjects/sys/README.md` is one of only two folders in the entire repo with an **authoritative, explicitly-ordered table** (the other is Blockchain, §5.2). Reproduced in full because it's directly load-bearing for sequencing:

| Order | Name | Description | Skills | Status in this repo |
|---|---|---|---|---|
| 1 | `linux` | VirtualBox installation/basic usage | OS, virtualization | ✅ subject + audit |
| 2 | `login` | Console/virtual terminal basics | OS | ✅ subject |
| 3 | `add-vm` | Download training VMs, snapshots | virtualization | ✅ VM, subject |
| 4 | `connect` | Fix IP conflicts, DHCP/static config | OS, network | ✅ VM, subject |
| 5 | `remote` | Remote pseudo-terminal, firewall, SSH | OS, network, security | ✅ VM, subject |
| 6 | `scan` | `nmap`, ARP discovery, brute-force | OS, network, security | ✅ VM, subject |
| 7 | `upgrade` | Free disk space, OS upgrade | OS | ⚠️ WIP |
| 8 | `reboot` | Recognize/recover a blocked system | OS | ❌ not built |
| 9 | `ram` | Fix OOM, swap/memory tuning | OS, virtualization | ❌ not built |
| 10 | `benchmark` | Benchmark a program | OS, disk | ⚠️ WIP |
| 11 | `boot` | Fix broken boot stages | OS, network | ⚠️ WIP |
| 12 | `process` | Find processes by port/name/file | OS | ⚠️ WIP |
| 13 | `monitoring` | System monitoring, by hand + tool | OS | ⚠️ WIP |
| 14 | `network` | Build a network by hand (DNS/ARP/IP) | network | ❌ not built |
| 15 | `modem` | Router/firewall configuration | network | ❌ not built |
| 16 | `censorship` | Bypass/mitigate censorship methods | network, security | ❌ not built |
| 17 | `virus` | Remove a stealth virus, reinstall | OS | ❌ not built |
| 18 | `data` | Data recovery, filesystem repair | OS, disk | ❌ not built |
| 19 | `nas` | Build a NAS (RAID, Samba, NFS, ClamAV) | OS, network, disk | ⚠️ WIP |
| 20 | `performance` | Scheduling, CPU pinning, RAID 0 tuning | OS, CPU, network, disk | ❌ not built |
| 21 | `sys` (bonus) | Recreate the `debian-01` VM | all of the above | ⚠️ WIP |

**Only the first 6 (`linux` through `scan`) have real subject+audit content today.** Everything from `upgrade` onward is either "WIP" or entirely absent — this is planned curriculum, not shippable content. If the skill-tree image you have shows an "AdminSys" track with more than 6 nodes, most of it doesn't exist in this repo snapshot yet.

### 4.6 Core Projects (the post-piscine project phase)

The genuine multi-week flagship projects, reconstructed from explicit in-README cross-references (e.g. `ascii-art-web` literally says "your last project, **ascii-art**"; `real-time-forum` says "remember the forum you did a while ago?"; `mini-framework` says it "will be tested by using it... in the social network project," which corrected a naive ordering assumption). Confidence and rough duration are estimates unless otherwise noted — very few project READMEs state an explicit duration.

| # | Project | Language/Stack | Description | Confidence |
|---|---|---|---|---|
| 1 | `git` ("Git Ready") | Git/CLI | Branching, remotes, merge/rebase exercises — arguably a one-time onboarding gate rather than "project #1," your call. | Medium |
| 2 | `ascii-art` | Go | Render a string as ASCII-art banner text. | High |
| 3 | `ascii-art-web` | Go, HTML/CSS | Wraps ascii-art in an HTTP server + web GUI. Explicit sequel. | High |
| 4 | `net-cat` | Go, TCP sockets | Recreate `netcat` as a TCP group-chat server/client. | High |
| 5 | `push-swap` | Go, algorithms | Sort a stack using two stacks + minimal instructions; write a checker. | High |
| 6 | `filler` | Go, algorithms/AI | Territory-capture bot game. | High |
| 7 | `wget` | Go/Rust/C (your choice) | Recreate `wget`: download, rate-limit, background, recursive mirroring. | High |
| 8 | `groupie-tracker` | Go, HTML/CSS | Consume a bands/artists JSON API, build a data-viz site. | High |
| 9 | `graphql` | JavaScript + school's GraphQL API | Login + personal profile page (XP/grades/audits) with SVG graphs. | Medium-High |
| 10 | `forum` | Go, SQLite, HTML/CSS/JS | Web forum: registration, posts, categories, likes, comments. | High |
| 11 | `lem-in` | Go, graph algorithms | Move max "ants" through a colony graph in fewest turns. | High |
| 12 | `stock-exchange-sim` | Go/Rust/C | Task-scheduling optimizer + checker. | Medium |
| 13 | `corewar` | Go, VM/assembly | Build a VM + assembler for a Core War battle. | High |
| 14 | `atm-management-system` | C | Extend a given ATM codebase (new-language adaptation). | Medium |
| 15 | `system-monitor` | C++, Dear ImGui | Extend a given ImGui app to monitor CPU/RAM/network. | Medium |
| 16 | `netfix` | Python (Django) | Extend a given Django services marketplace. | Medium |
| 17 | `shop` | Ruby on Rails | Extend a given Rails e-commerce app. | Medium |
| 18 | `mister-quiz` | PHP (Laravel) | Extend a given Laravel quiz-game site. | Medium |
| 19 | `clonernews` | JavaScript, HN API | Hacker News-style live-updating UI. | Medium (possibly a JS-piscine raid, not a project — see §6) |
| 20 | `real-time-forum` | Go, SQLite, JS, WebSockets | SPA rebuild of `forum` + private messaging. Explicit sequel. | High |
| 21 | `mini-framework` | JavaScript | Build your own minimal frontend framework + TodoMVC. Precedes/feeds `social-network`. | Medium-High |
| 22 | `social-network` | Go, SQLite, any JS framework | Facebook-style app: followers, groups, chat, notifications. | High |
| 23 | `make-your-game` | JavaScript, on your own framework | Original browser game, strict 60fps performance bar. | High |
| 24 | `bomberman-dom` | JavaScript, on your own framework | Multiplayer Bomberman clone, same perf rules as above. | High |
| 25 | `0-shell` | Rust, Unix syscalls | Minimal BusyBox-style shell from scratch. | High |
| 26 | `smart-road` | Rust, SDL2 | Traffic sim without lights. Explicit sequel to the `road_intersection` Rust-piscine raid. | High |
| 27 | `multiplayer-fps` | Rust/other, UDP | "Maze Wars"-style multiplayer FPS. | Medium |
| 28 | `zappy` | Go/C + any client language | Team "AI civilization" game, autonomous agents. | Medium |
| 29 | `tron` | JavaScript, provided game engine | Write an AI player for a Tron light-cycle battle. | Medium-Low |

**Items in this bucket that are NOT projects** (piscine exercises/exams that just happened to have long READMEs): `add-vm`, `linux`, `login`, `connect`, `remote`, `scan` (all belong to §4.5's sysadmin table), `road_intersection` (Rust-piscine raid, prerequisite to `smart-road`), `teacher` (bash exam), `guess-it-1`/`guess-it-2` (chained Go stats exercises), `tetris-optimizer` (Go piscine exam — has a literal `hardexam/` subfolder), `sortable` (JS piscine day exercise), `block-chain` (JS piscine exercise — see the false-positive note in §5.2), `minesweeper` (Rust piscine exercise), `dr-strange` (JS date-arithmetic exercise, misleading name), `events` (Rust piscine exam), `commandments` (onboarding read, literally `duration: 1 hour` in its frontmatter), `where-do-we-go-dom` (JS/DOM exercise), `friend-support`/`gatecrashers`/`uninvited` (chained JS server exercises), `free-project` (JS-piscine raid — build a personal site), `how-2-js`/`good-practices`/`introduction` (piscine reference material), `sys` (the table above, not an exercise itself).

### 4.7 Bonus / Optional Sub-Features of Core Projects

Several flagship projects have nested folders adding optional features. Projects with only a plain `/audit` subfolder (no real bonus content) are omitted here: `add-vm`, `atm-management-system`, `bomberman-dom`, `carbon-copy`, `chaikin`, `clonernews`, `connect`, `corewar`, `crossword`, `drawing`, `ephemeris`, `filler`, `free-project`, `git`, `go-reloaded`, `graphql`, `guess-it-1`/`2`, `linear-stats`, `linux`, `localhost`, `login`, `math-skills`, `mini-framework`, `mister-quiz`, `multiplayer-fps`, `my-ls`/`my-ls-1`, `net-cat`, `netfix`, `push-swap`, `quad`, `quadchecker`, `remote`, `road_intersection`, `rt`, `scan`, `shop`, `smart-road`, `sortable`, `stock-exchange-sim`, `sudoku`, `system-monitor`, `tron`, `wget`, `zappy`.

| Parent | Bonus feature | What it adds | Optional? |
|---|---|---|---|
| `0-shell` | `job-control` | Shell job-control builtins (`jobs`/`bg`/`fg`/`kill`, Ctrl+Z) | Additive follow-on, not explicitly labeled |
| `0-shell` | `scripting` | Parse/run actual shell scripts (loops, functions) | Additive follow-on |
| `ascii-art` | `color` | `--color=<color>` flag | **Explicitly optional** |
| `ascii-art` | `justify` | `--align=` flag with responsive layout | **Explicitly optional** |
| `ascii-art` | `output` | `--output=<file>` flag | **Explicitly optional** |
| `ascii-art` | `reverse` | ASCII-art → plain text | **Explicitly optional** |
| `ascii-art` | `fs` | Selectable banner/font templates | **Explicitly optional** |
| `ascii-art-web` | `dockerize` | Containerize the web app | Additive, not explicitly labeled |
| `ascii-art-web` | `export-file` | Export result to a file | Additive |
| `ascii-art-web` | `stylize` | Visual/accessible CSS pass | Additive |
| `forum` | `advanced-features` | Like/dislike, notifications, activity page, edit/remove | Additive |
| `forum` | `authentication` | Google/GitHub OAuth | Additive |
| `forum` | `image-upload` | Image attachments on posts | Additive |
| `forum` | `moderation` | 4-tier user roles, category filtering | **Explicitly optional** |
| `forum` | `security` | HTTPS/TLS, rate limiting, hardened sessions | Additive (base README calls session/password encryption "a Bonus task") |
| `groupie-tracker` | `filters` | Range/checkbox filters | Additive |
| `groupie-tracker` | `geolocalization` | Map-plotted concert locations | Additive |
| `groupie-tracker` | `search-bar` | Live typeahead search | Additive |
| `groupie-tracker` | `visualizations` | UI-design-principles restyle | Additive |
| `lem-in` | (ant-farm visualizer, no dedicated folder) | Inline bonus paragraph, not a separate tracked subject | Bonus |
| `make-your-game` | `different-maps` | Custom tile-map engine, 3+ maps | Additive |
| `make-your-game` | `history` | Story mode tied to score milestones | Additive |
| `make-your-game` | `score-handling` | Go-backed persistent scoreboard | Additive |
| `real-time-forum` | `typing-in-progress` | Live "user is typing…" via WebSocket | Additive |
| `social-network` | `cross-platform-appimage` | Standalone Electron desktop client | **Explicitly optional** |
| `tetris-optimizer` | `badexample*`/`goodexample*`/`hardexam` | Just test fixtures, not features | N/A |

---

## 5. The Specialization Branches

### 5.1 Artificial Intelligence Branch

**`subjects/ai/` is genuine AI/ML content — verified accurate against official docs.** `subjects/AI.GO/` is **not** — despite its name, it's a JavaScript/HTML/CSS DOM-manipulation piscine (see box below). Do not document `AI.GO` under this branch.

**Confirmed structure via `audit/README.md` titles and embedded `assets.01-edu.org` asset URLs:** exactly 15 quests (every entry whose audit page is titled "Exercise 0: Environment and libraries") + 2 raids (`kaggle-titanic`, `forest-prediction` — confirmed via a literal `.../piscine-ai/raid02/...` URL) — matching the official "15 quests, 2 raids" description exactly. Embedded image filenames also carry week/day markers (`W1D3`, `W2D2`, `W3D5`) confirming a 3-week fundamentals → modeling → NLP/deep-learning progression. Three specialization projects are explicitly numbered via `assets.01-edu.org/ai-branch/projectN/` URLs: `emotions-detector` = project 3, `sp500-strategies` = project 4, `credit-scoring` = project 5.

**Stage 1 — Piscine quests (3 weeks, fundamentals → modeling):**

| # | Subject | Tool/library | Description |
|---|---|---|---|
| 1 | `numpy` | NumPy | Array-based numerical computing fundamentals |
| 2 | `pandas` | Pandas | DataFrame creation/manipulation on real tabular data |
| 3 | `data-wrangling` | Pandas, SQL | Cleaning/joining/reshaping messy multi-source data |
| 4 | `visualizations` | Matplotlib, Pandas | Plotting distributions/relationships (Week 1, Day 3) |
| 5 | `linear-regression` | Scikit-learn | Supervised-learning basics |
| 6 | `classification` | Scikit-learn | Classification algorithms + evaluation |
| 7 | `training` | Scikit-learn | Choosing/computing the right ML metric |
| 8 | `model-selection` | Scikit-learn | Cross-validation, grid search |
| 9 | `pipeline` | Scikit-learn | Preprocessing + modeling pipelines |
| 10 | `neural-networks` | Scikit-learn (MLP) | Intro neural nets (Week 2, Day 2) |
| 11 | `keras` | Keras/TensorFlow | Sequential nets with dense layers |
| 12 | `keras-2` | Keras/TensorFlow | Advanced Keras: regression + multi-class |
| 13 | `nlp` | NLTK, spaCy, sklearn | Foundational NLP preprocessing |
| 14 | `nlp-spacy` | spaCy | Fast NLP pipelines, pretrained embeddings (Week 3, Day 5) |
| 15 | `time-series` | Pandas | Time-indexed data: resampling, rolling windows |

**Stage 2 — Raids:** `kaggle-titanic` (1 week, confirmed — Kaggle Titanic competition, full ML pipeline + leaderboard submission), `forest-prediction` (forest-cover classification, full model-selection workflow).

**Stage 3 — Specialization projects:** `emotions-detector` (project 3 — OpenCV + Keras CNN facial-emotion detection), `backtesting-sp500` / `sp500-strategies` (project 4 — pandas/sklearn trading-signal backtesting), `credit-scoring` (project 5 — interpretable default-probability model), `document-categorization` (spaCy/TensorFlow/Transformers document classification), `nlp-scraper` ("News Intelligence" NLP scraping platform), `matrix-factorization` (Streamlit recommender demo), `spectral-learning` (dimensionality reduction), `vision-track` (capstone: YOLO/OpenCV/PyTorch real-time person tracking).

> ⚠️ **Duration data caveat:** the extraction script's "duration" field is unreliable for this branch — it's a naive regex match on any "N day(s)/week(s)" substring, and several hits are false positives pulled from unrelated sentences (e.g. `time-series`'s "7 days" is from "compute a 7-day moving average," not an assigned duration). Only `kaggle-titanic`'s "1 week" is confirmed authoritative.

#### What is `AI.GO`?

**It's a JavaScript/DOM piscine exercise set, unrelated to AI or the Go language.** All 23 exercises walk through building an interactive "robot" webpage: HTML structure (`the-skeleton`, `embedded-organs`) → CSS (`class-it`, `select-then-style`) → JS fundamentals (`glance-on-power`, `declare-everything`, `first-function`, `objects-around`, `listed`, `only-if`) → DOM/events (`first-move`, `first-wink`, `colorful-arms`, `colorful-legs`) → a team capstone (`robots-harmony`). Proof: `AI.GO/embedded-organs/README.md` is a near-verbatim rewrite of the unrelated core-curriculum exercise `subjects/nesting-organs/README.md` — same HTML `id`s (`torso`, `eye-left`), same expected screenshot, just reframed as a "robot." The "AI" in the name refers to **AI-assisted learning as a study technique** — nearly every exercise has an inserted callout box suggesting students use ChatGPT/Phind/Gemini as study aids, and `star-forge` explicitly introduces this as *"the new subject section you will find from now on in the next subjects."* Only 4 of 23 exercises even have a stray "Go" language tag, and none contain actual Go code — likely tagger noise from the literal string "GO" in the folder name. **Recommend:** cross-link this alongside the core JS/DOM piscine, not the AI branch.

### 5.2 Blockchain & Crypto Branch

**`subjects/piscine-blockchain/` does not exist** (confirmed three ways: direct path check, case-insensitive full-repo search, full `subjects/` listing). Instead, **`subjects/blockchain/README.md` is itself the authoritative curriculum index** — the only other folder in this repo besides `sys/` with an explicit, authored ordering:

> Quest 1: Basic Bitcoin transactions → Quest 2: Fundamental cryptography → Quest 3: A complete Smart Contract → Quest 4: Scripted interactions with Ethereum → Raid 1: Signing service → Quest 5: A complete DApp → Quest 6: First token → Quest 7: NFT-based DApp → Quest 8: DeFi & security → Quest 9: Explore other blockchains → Raid 2: Tracking service

Full 48-item ordering, mapped from that quest structure to actual folders:

| # | Folder | Stack | Notes |
|---|---|---|---|
| 1-5 | `send-transaction`, `retrieve-block-date`, `retrieve-transaction-value`, `retrieve-transaction-in-out`, `send-transaction-to-peer` | JS, Bitcoin RPC | Quest 1: install a Bitcoin node, read/build transactions, real testnet P2P send |
| 6-9 | `hash-file`, `hash-160`, `increment`, `semi-brute` | JS | Quest 2: hashing fundamentals, hex/Buffer math, PoW-style brute force |
| 10-13 | `generate-address`, `signer`, `basic-wallet`, `random-wallet` | JS, secp256k1/ECDSA | Quest 2 cont'd: keypairs, signing, wallet persistence |
| 14-21 | `named-festival` → `time-and-place` → `lineup` → `organized-festival` → `buy-tickets` → `artists-do-work` → `time-is-money` → `fun-and-profit` | Solidity | Quest 3: a single running "festival" smart-contract example, feature added at each step |
| 22-27 | `local-node`, `local-node-info`, `get-account`, `connect-to-metamask`, `send-eth-transaction`, `send-ether` | JS/Solidity | Quest 4: Ethereum node + wallet integration |
| 28-32 | `register`, `register-with-events`, `send-hash`, `check-document`, `read-secret` (optional) | JS/Solidity | Quest 4 cont'd: document-hash registry patterns |
| 33 | `sign-service` | JS, SQL, Solidity | **Raid 1** — integrates the hashing+registry work into a full doc sign/verify service |
| 34-40 | `donation`, `minimal-token`, `eventful-token`, `transfers-history`, `usable-token`, `token-sale`, `basic-swap` | Solidity | Quests 5-6: first DApp, first token (mint → events → ERC20-style → sale → atomic swap) |
| 41-42 | `non-fungible-cats`, `nft-marketplace` | Solidity, SQL | Quest 7: NFT standard from scratch, then a themed marketplace (both 24hr) |
| 43-45 | `decentralized-finance`, `financial-instruments`, `exploring-blockchains` | Solidity, Go, SQL | Quest 8-9: DeFi/lending platform, private settlement platform, alt-chain survey |
| 46-47 | `node-dashboard`, `payment-channel` | Docker, Solidity | Private-network monitoring, state/payment channels |
| 48 | `tracking-network` | Go, Solidity | **Raid 2** — Hyperledger Fabric parcel-tracking network |

**Folders checked and confirmed NOT blockchain-related** (coincidental name similarity only): `blood_types`/`blood_types_s` (Rust biology exercise), `wget` (systems-programming project). **`block-chain`** (singular, hyphenated, top-level, distinct from `blockchain/`) IS genuinely relevant but lives in the *core* curriculum, not this branch — it's a JS exercise implementing `blockChain(data, prev)`, a hash-linked-block primer. Worth cross-linking as a natural pre-requisite even though it's filed elsewhere.

### 5.3 Cloud DevOps Branch

Largest branch (119 entries). No root README with explicit ordering — reconstructed from README cross-references (many projects explicitly name their predecessor).

**Foundational exercises** (shell/Python drills, single-sitting scope), grouped by topic: shell basics (`hello-devops`, `append-output`, `better-cat`, `head-and-tail`, `custom-ls`, `find-files`, etc.), permissions (`easy-perm`, `hard-perm`, `file-checker`), environment/introspection (`set-env-vars`, `check-user`, `bin-status`), conditionals/arithmetic (`easy-conditions`, `calculator`, `grades`), process/job management (`auto-jobs`, `burial`, `in-back-ground`), "cl-camp" offline checkpoint exams (`cl-camp3`/`6`/`8` + `*-checkpoint` pairs — a **different, DevOps-branch-specific** set from the core-curriculum `cl-camp` cluster in §4.4, don't conflate them), then a Python-fundamentals cluster (`hello-python`, `flex-function`, `object-to-json`, `read-file`/`write-file`) bridging to the project phase.

**Projects, in dependency order** (each arrow below is an *explicit* README cross-reference, not inference):

`deep-in-system` (Linux server hardening, WordPress+cron) + `deep-in-net` (Packet Tracer networking, done in parallel) → `backup_manager` (Python backup scripts) → `crud-master`/`crud-master-py` (Node or Python 3-service microservices app — parallel language variants of the same exercise, not sequential) → `play-with-containers` ("uses the services described in crud-master... crud-master-py is a working solution") → `orchestrator` (K3s Kubernetes, "you can use the Dockerfiles provided in play-with-containers") → `cloud-press` (Terraform+Ansible WordPress-on-AWS, independent track) → `cloud-design` (AWS, explicitly "using your solutions in crud-master, play-with-containers, and orchestrator") → `cloud-kube` (near-identical to cloud-design but K8s-mandated/cloud-agnostic) → `easy-cloud` (managed-services counterpoint, explicitly *forbids* Kubernetes) → `code-keeper` (GitLab CI/CD, explicitly "using your crud-master source code and cloud-design or cloud-kube infrastructure" — the capstone) → `serverless` (standalone AWS Lambda exercise, stylistically an outlier — see §6) → `road-to-ccp` / `road-to-dofd` (certification study guides, parallelizable, not gated) → `technical-file` (final 5-day report-compilation deliverable, explicitly "at the end of your training period").

### 5.4 Java Full-Stack Development Branch

**Critical structural note: the core-curriculum "Piscine Java" and the 6-month "Java Full-Stack" branch are physically co-located** in the same `subjects/java/` folder, distinguished only by subfolder:

```
subjects/java/
├── piscine/       66 exercises  — the actual Piscine Java (language fundamentals)
├── checkpoints/   45 exercises  — paired assessment checkpoints for piscine/ concepts
├── raids/          6 files      — 3 raids × (a duplicate-filing artifact, see §6)
└── projects/      11 projects   — the real 6-month specialization branch content
```

**Piscine Java** (fundamentals — not part of the 6-month branch, but the language piscine that precedes it), grouped by topic: Hello World/primitives → strings/regex → arrays/sorting/searching → Collections (List/Set/Map) → Streams (Java 8 functional) → dates/time → file I/O/CLI → OOP fundamentals (the "Star" series: `StarConstructors`→`StarInheritance`→`StarOverride`→`StarPolymorphism`-equivalent) → OOP advanced (the "Adventure" series: `AdventureAbstract`→`AdventureInterface`→`AdventureException`) → design patterns (`Builder`/`Decorator`/`Factory`/`Observer`/`Singleton`/`Strategy`, each paired with a `checkpoints/*-blueprint` assessment) → linked data structures → math/number theory. **3 raids** (`Jaikin` — Chaikin's-algorithm canvas animation, `Jart` — OOP shapes/interfaces, `jraffic` — traffic simulation) cap the piscine before branch projects begin.

**Java Full-Stack Branch projects, in proposed order:**

| # | Project | Stack | Description | Confidence |
|---|---|---|---|---|
| 1 | `lets-play` | Spring Boot, MongoDB, Spring Security/JWT | Basic CRUD API + role-based auth — establishes API/NoSQL fundamentals | High |
| 2 | `buy-01` | Spring Boot microservices, Kafka, Angular | E-commerce v1: User/Product/Media microservices + first Angular frontend | High |
| 3 | `buy-02` | Same + Jenkins CI/CD | Completes the platform (cart, orders, search) + PR/CI workflow | High |
| 4 | `angul-it` | Angular only | Standalone multi-stage captcha SPA — pure frontend deep-dive | Medium |
| 5 | `neo4flix` | Spring Boot, Neo4j, Angular, Docker | Movie recommender: graph-DB modeling on the microservices pattern | High |
| 6 | `mr-jenk` | Jenkins, Docker, JUnit | Dedicated CI/CD pipeline for the buy-0x microservices | High |
| 7 | `safe-zone` | SonarQube, Docker, GH Actions | Code-quality/security gating on the same pipeline | High |
| 8 | `nexus` | Nexus Repository Manager, Maven | Artifact repository for buy-02 | High |
| 9 | `sharpen-it` | Jenkins, SonarQube (broken env provided) | Debug/fix exercise consolidating mr-jenk + safe-zone skills | Medium |
| 10 | `travel-plan` | Microservices, Postgres+Neo4j, K8s, Ansible | Capstone part 1: scalable containerized/orchestrated infra + admin dashboard | High |
| 11 | `lets-travel` | SQL, Elasticsearch | Capstone part 2: role-specific features + search on travel-plan's infra (3 days) | High |

### 5.5 Mobile Applications Branch

**No `subjects/piscine-flutter/` folder exists** (confirmed by direct check) — the intro piscine is simply the small Dart/Flutter exercises co-located inside `subjects/mobile-dev/` itself, alongside the bigger apps.

**Piscine/foundational exercises:** language basics (`intro`, `variables`) → functions (`plain-sum`→`optional-sum`→`named-required-sum`→`named-optional-sum`→`max-num`) → OOP (`circle`→`person`→`student` extends Person→`university`) → collections/modules (`data-structures`, `package`).

**Projects, in proposed order:** `bloc-counter` (BLoC pattern intro) → `hacker-news` (REST client) → `bizz-card` (static UI) → `twenty-forty-eight` (game-state logic) → `favorite-images` (local storage) → `movie-list` (JSON + local SQL) → `bouncer` (accelerometer) → `sky-map` (multi-sensor fusion, harder than bouncer) → `secure-notes` (biometric auth + encrypted DB) → `map-markers` (first team project, Google Maps API) → `quizz-app` (first real backend, Go) → `stock-market` (mock real-time data server) → `kaquiz` (fullstack: friend requests + live location) → `secure-messenger` (E2E encryption, most feature-dense single project) → `chess` (fullstack: real-time multiplayer over websockets + optional AI — capstone).

### 5.6 Video Games Branch

**Confirmed: every single project explicitly uses Unreal Engine 5** (Blueprints, Paper2D Flipbooks, Epic Marketplace assets) — the official "Unreal Engine" claim is accurate, verified directly against source, not just the digest. No separate piscine folder exists; `2-5-d-adventure` is explicitly written as the onboarding project and functions as the de facto piscine entry point.

**Proposed order:** `2-5-d-adventure` (UE5 fundamentals, explicit intro) → `widget-factory` (first-person movement + UMG menus) → `army-of-one` (animation blueprints) → `vehicle-physics` (blueprint inheritance, drivable cars) → `mouse-vr` (scene capture, teleport navigation) → `firing-range` (weapons, projectiles, basic AI) → `jumpo` (Android SDK export — first external platform target) → `the-pages` (AI chase logic, horror game) → `zombie-ai` (wave-spawning AI — README explicitly says it reuses a prior exercise's solution) → `stealth-boom` (AI behavior trees, full game loop) → `nascar-online-alpha` (extends a downloaded Epic Marketplace template with online multiplayer — capstone).

### 5.7 Cybersecurity Branch

No piscine folder; flat list of ~20 projects (notably more than the official "4-8 projects" framing — an outlier relative to other branches). **Contains confirmed duplicate/superseded pairs** — a shorter/older version and a longer/richer version of the same challenge exist side by side, almost certainly because a project was reworked and the old version left in the repo:

| Older/shorter | Newer/richer | Topic |
|---|---|---|
| `local` | `escalator` | Privilege-escalation VM challenge |
| `inspector-image` | `image-inspector` | Steganography/hidden data extraction |
| `injector` | `merge` | Executable-binding/merging |
| `mal-track` | `defuse` | Windows malware analysis |
| `evasion` | `hidden-bytes` | Binary obfuscation/AV evasion |
| `malware` | `ransomware-lab` | Ransomware dev in a VM sandbox |

**Proposed order** (foundations first, then kill-chain progression, using the richer version of each duplicate pair): `active` (port scanner) → `passive` (OSINT fundamentals) → `osint-master` (automated recon, builds on `passive`) → `escalator` (privilege escalation) → `image-inspector` (steganography) → `merge` (executable binding) → `defuse` (malware analysis) → `hidden-bytes` (AV evasion) → `obfuscator` (self-modifying reverse shell) → `ransomware-lab` (ransomware dev) → `vuln-hunter` (OWASP Top-10 on Juice Shop) → `web-hack` (PHP web shell, more open-ended) → `pentest-kit` (personal toolkit, synthesizes prior skills) → `hole-in-bin` (reverse engineering/binary exploitation — most advanced, capstone).

**Recommendation:** for a strict sequential platform, present only one of each duplicate pair (the richer version, as above) — surfacing both back-to-back would be redundant to a learner.

### 5.8 User Experience (UX/UI) Branch

**Highest-confidence branch ordering in this document** — README text contains explicit quest numbers and explicit team-size/duration escalation.

**Piscine (UI quests, explicitly numbered):** `colors-and-moodboard` ("This first UI quest") → `atomic-design` ("2nd quest of UI") → `rules` ("3rd quest of UI") → `building-an-interface` → `heuristics` ("this very last quest").

**Piscine (UX quests, explicitly sequenced by design-process phase):** `athlete-keep-hydrated` ("very first quest") → `going-on-holidays` ("2nd quest") → `teenage-drama` ("Quest n°3") → `music-on` → `the-olympics` (ideation workshop) → `sunday-night-movie` (explicitly builds on "the ideation workshops") → `seamstress` (final synthesis exercise, 6hr timed).

**Projects, each with an explicit stated duration/team size:**

| # | Project | Duration / Team | Description |
|---|---|---|---|
| 1 | `get-a-room` | 2 weeks, team of 1 | Coworking room-booking service, single platform |
| 2 | `lets-do-some-sports` | 2 weeks, team of 2 | Sports tracker across mobile + e-watch |
| 3 | `lets-fair-trade` | 4 weeks, team of 3 | Second-hand-clothing e-commerce, desktop + mobile |
| 4 | `a-table` | 5 weeks, team of ≤3 | Food-delivery app, 4 user roles, two design phases — capstone |

---

## 6. Cross-Cutting Data-Quality Issues

Flagging these explicitly so nobody builds a Gauntlex task graph on top of silent duplicates or dead folders.

- **Duplicate hyphen/underscore folder pairs in DevOps** (~16 pairs, identical content): `candidates-checker`/`candidates_checker`, `clean-the-list`/`clean_the_list`, `numerical-operations`/`numerical_operations`, `hello-python`/`hello_python`, etc. Same exercise mirrored under two slug conventions — deduplicate before presenting to a learner.
- **`crud-master` vs `crud-master-py`** (DevOps): same architecture, Node vs Python — parallel electives, not sequential steps, but downstream projects cite them inconsistently (some cite one, some the other).
- **`cloud-design` vs `cloud-kube`** (DevOps): near-identical objectives, AWS-specific vs K8s-mandated. Ordering between them is a judgment call, not stated anywhere.
- **`serverless`** (DevOps): stylistically an outlier — no `audit/` folder, no standard boilerplate sections, links to an external non-01-edu GitHub repo. Possibly community-contributed or legacy; verify before treating as core content.
- **`java/raids/Jaikin` vs `java/piscine/raids/Jaikin`**: near-identical README (same Chaikin's-algorithm task), almost certainly a filing duplicate. Treat `java/raids/*` as canonical.
- **`listpushpara` vs `listpushparams`** (Go piscine): identical title, near-identical description — verify whether these are intentionally distinct or an accidental duplicate.
- **`cl` vs `cl-camp1`** (Shell piscine): nearly identical README (same "custom ls" task, minor wording difference).
- **`sqrt` vs `squareroot`** (Go piscine): both "return square root," slightly different contracts — verify relationship.
- **Empty/broken subjects** (exclude from any learner-facing sequence): `unavailable` (README literally says "this subject is currently unavailable"), `argsort` (empty README), `firebase-demo` (heading only, no content).
- **Meta, non-exercise entries** (informational, not tasks): `disclaimer` (Go exam formatting note), `functions` (describes a Zone01 aggregator repo), `commandments` (onboarding read), `good-practices`/`introduction`/`how-2-js` (piscine reference material).
- **Official ordering docs are unreachable from this environment.** `docs/piscine-go-curriculum.md` and `docs/piscine-rust-curriculum.md` (and likely JS/Java equivalents) exist on 01-edu-family Gitea instances (`beta.01-edu.org`, `01.alem.school`, `01.kood.tech`) per web search results, but not in the GitHub-mirrored repo this document is based on, and direct fetches from this environment failed (DNS/connection errors). **Before treating this document's piscine-exercise tier/ordering as final, try fetching those three files from a network that can reach them** — they would supersede the content-based reconstruction in §4.1-4.3.
- **Duration estimates are mostly unverified.** Very few project READMEs state an explicit duration; most numbers in this document's tables are either absent, marked "(est.)", or explicitly flagged as regex-extraction false positives (e.g., a sentence mentioning "7 days" that has nothing to do with project length). Don't surface these to end users as committed timelines without further verification.

---

## 7. Recommended Gauntlex Data Model

Based on everything above, here's a concrete shape for the ordering data Gauntlex actually needs — the "correct arrangement" the user asked for, expressed as a schema rather than just prose.

```
Track (top-level, sequential)
  ├─ id, name, order_index
  └─ Phase (a piscine, a project-phase, or a branch)
       ├─ id, name, order_index, phase_type: "piscine" | "project_phase" | "branch"
       └─ Subject (one Gauntlex task)
            ├─ id, slug (matches the repo folder path, e.g. "blockchain/minimal-token")
            ├─ order_index (within its Phase)
            ├─ title, readme_path, audit_path
            ├─ prerequisite_subject_ids[]   ← from explicit README cross-references where found
            ├─ has_automated_tests: bool     ← true only for JS/DOM/Shell piscine subjects (§3)
            ├─ optional: bool                ← true for confirmed-optional bonus features (§4.7)
            └─ confidence: "confirmed" | "high" | "medium" | "low"   ← carry this through, don't discard it
```

Proposed top-level Track sequence, matching official pedagogy:

1. **Piscine Shell/CLI** (§4.4) — possibly folded into Piscine Go as its Quest 1
2. **Piscine Go** (§4.1)
3. **Sysadmin Piscine** (§4.5) — only 6 of 21 planned subjects exist; decide whether to include a 6-subject track or wait for more content
4. **Piscine JavaScript** (§4.2)
5. **Piscine Rust** (§4.3)
6. **Core Project Phase** (§4.6 + §4.7) — the ~29 flagship projects; this is the longest phase (18 months in official pedagogy) and where most user time will be spent
7. **Piscine Java** (§5.4's `piscine/`/`checkpoints/`/`raids/` — note this is oddly sequenced *after* the core project phase in official pedagogy terms only if Java is picked as a branch; if Gauntlex treats all 4 language piscines as mandatory-then-branch-optional, Java's piscine content needs its own Track slot, separate from the Java Full-Stack branch)
8. **Branch selection** — user picks ONE of the 8 branches (§5.1-5.8) as a Track; keep the other 7 defined in the data model but locked/hidden

**Carry the `confidence` field through to your admin tooling, at minimum.** A huge fraction of this document's ordering is well-reasoned inference from README cross-references, not an authoritative source document — that's a very different thing from "confirmed," and conflating them in the final product risks presenting guesses as certainty to end users who have no way to tell the difference.

---

## 8. Open Questions for a Human to Resolve

1. **Can anyone reach `beta.01-edu.org`, `01.alem.school`, or `01.kood.tech`?** Those Gitea instances apparently host `docs/piscine-*-curriculum.md` files with authoritative quest orderings that this GitHub-based research couldn't access. This is the single highest-value follow-up — it would let you replace §4.1-4.3's inferred tiers with real day-by-day quest data.
2. **Is the Piscine Shell/CLI cluster (§4.4) actually Go Piscine Quest 1, or its own separate gate?** The official curriculum doc excerpt found via search names the same folders (`cl-camp1`-`8`, `to-git-or-not-to-git`, `who-are-you`, `now-get-to-work`) as Quest 1 of Piscine Go — but this needs confirming against the full curriculum doc, not just a search snippet.
3. **Does Gauntlex want to serve the Sysadmin piscine (§4.5) at all**, given only 6 of 21 planned subjects exist in the repo? Might be worth deferring this track until 01-edu ships more of it.
4. **Which of each Cybersecurity duplicate pair (§5.7) is actually still "active" upstream?** No config file in this repo answers that; it may be visible in 01-edu's live platform/database even though it's not in the public content repo.
5. **Does the "js-" prefixed algorithms cluster in Piscine JS (§4.2) belong interleaved with the narrative track, or as a separate later module?** No evidence either way was found in-repo; this is a product decision as much as a research question.
6. **What's actually in `subjects/employment-tasks/`?** Confirmed to be recruiter-facing technical-screening tasks, not learner curriculum — almost certainly out of scope for Gauntlex, but worth a deliberate "yes, excluded" decision rather than an accidental omission.
7. **Test-authoring plan for everything outside JS/DOM/Shell (§3).** This is the biggest unaddressed scope item this research surfaced: the overwhelming majority of subjects (all of Go piscine, all of Rust piscine, all ~29 core projects, all branch content) have zero automated tests in the source repo. Gauntlex's Docker-sandbox validation step needs a real plan for this — write tests per-subject as a content-production task, or lean harder on the AI Auditor to cover for the gap.
