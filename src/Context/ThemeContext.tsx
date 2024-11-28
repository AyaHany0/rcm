import React, { createContext, useState, useMemo, ReactNode } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { lightPalette, darkPalette } from "../Theme";
import { Mode, ThemeContextProps } from "../Types/theme";

// Create the ThemeContext
export const CustomThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  mode: "light",
});

// Custom ThemeProvider Component
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: mode === "light" ? lightPalette : darkPalette,
      }),
    [mode]
  );

  const toggleTheme = () => {
    return setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <CustomThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
