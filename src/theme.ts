import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    primary: {
      main: "#ED8900",
      "50": "#fdf2e0",
      "100": "#fadfb2",
      "200": "#f7ca7f",
      "300": "#f4b54d",
      "400": "#f2a527",
      "500": "#f19602",
      "600": "#ed8a00",
      "700": "#e77b00",
      "800": "#e16c00",
      "900": "#d85300",
      dark: "#d85300",
      light: "#fdf2e0",
    },
    secondary: {
      main: "#483019",
      "50": "#f4eadb",
      "100": "#dac9b7",
      "200": "#bba691",
      "300": "#9c846a",
      "400": "#856b4c",
      "500": "#6e522f",
      "600": "#634929",
      "700": "#553c21",
      "800": "#483019",
      "900": "#39220f",
      dark: "#39220f",
      light: "#f4eadb",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ED8900",
      "50": "#fdf2e0",
      "100": "#fadfb2",
      "200": "#f7ca7f",
      "300": "#f4b54d",
      "400": "#f2a527",
      "500": "#f19602",
      "600": "#ed8a00",
      "700": "#e77b00",
      "800": "#e16c00",
      "900": "#d85300",
      dark: "#d85300",
      light: "#fdf2e0",
    },
    secondary: {
      main: "#483019",
      "50": "#f4eadb",
      "100": "#dac9b7",
      "200": "#bba691",
      "300": "#9c846a",
      "400": "#856b4c",
      "500": "#6e522f",
      "600": "#634929",
      "700": "#553c21",
      "800": "#483019",
      "900": "#39220f",
      dark: "#39220f",
      light: "#f4eadb",
    },
    background: {
      default: "#1b0000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
