import { useContext } from "react";
import { CustomThemeContext } from "../Context/ThemeContext";

export const useThemeContext = () => useContext(CustomThemeContext);
