import { SiCplusplus, SiGo, SiJavascript, SiPython, SiRust } from "react-icons/si";
import type { IconType } from "react-icons";

export interface LanguageMeta {
  name: string;
  icon: IconType;
  color: string;
}

export const LANGUAGES: LanguageMeta[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#D7B600" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Rust", icon: SiRust, color: "#CE422B" },
  { name: "C / C++", icon: SiCplusplus, color: "#00599C" },
];
