import React, { createContext, ReactNode, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { LangDirection } from "../Types/theme";

export const directionContext = createContext({
  setDirectionLTR: () => {},
  setDirectionRTL: () => {},
  direction: "ltr",
});

export const CustomDirectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [direction, setDirection] = useState<LangDirection>("ltr");

  const theme = createTheme({
    direction,
  });

  const setDirectionLTR = () => setDirection("ltr");
  const setDirectionRTL = () => setDirection("rtl");

  return (
    <directionContext.Provider
      value={{ setDirectionLTR, setDirectionRTL, direction }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div dir={direction}>{children}</div>
      </ThemeProvider>
    </directionContext.Provider>
  );
};
