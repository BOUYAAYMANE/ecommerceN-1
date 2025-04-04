import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
            // secondary:"#c7d2e3"
          },
          button: {
            main:"#F89118"
          },
          myColor: {
            main: "#F6F9FC",
          },

          bg: {
            main: "#F6F6F6",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#fff",
          },
          button: {
            main:"#F89118"
          },
          myColor: {
            main: "#252b32",
          },

          bg: {
            main: "#1D2021",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
//  utilise le hook useMemo pour mémoriser le thème en fonction du mode de couleur.
// le thème sera recalculé uniquement lorsque cela est nécessaire, c'est-à-dire lorsque le mode de couleur change
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};