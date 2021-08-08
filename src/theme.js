import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#663399",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#623193",
      default: "#F1F3F4",
    },
  },
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
  },
});

export default theme;
