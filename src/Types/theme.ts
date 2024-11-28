export type Mode = "light" | "dark";
export type LangDirection = "ltr" | "rtl";

export interface ThemeContextProps {
  toggleTheme: () => void;
  mode: Mode;
}
