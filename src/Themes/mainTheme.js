import { createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const baseTheme = createMuiTheme({
        palette: {
            primary: {
                main: blue[600]
            },
            secondary: {
                main: '#ffc400'
            },
        },
    });

export default baseTheme;