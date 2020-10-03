import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: { 
    primary: { 
      light: "#f7597b",
      main: "##BF1F4F",
      dark: "#880027",
      contrastText: "#FFF"
    },
    secondary: { 
      light: "#cb5895",
      main: "##972667",
      dark: "#65003d",
      contrastText: "#FFF"
    }
  },
})

export default theme