import {createMuiTheme} from "@material-ui/core"

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1A2238",
      },
      secondary: {
        main: "#9DAAF2",
      },
    },
    shape: {
        borderRadius: 25,
      }, 
  });

  export default Theme;