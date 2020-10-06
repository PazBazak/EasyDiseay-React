import { createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const baseTheme = createMuiTheme({
        palette: {
            primary: {
                main: blue[600]
            },
        },
    });

const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#1C1C1C'
            },
            secondary: {
                main: '#ffc400'
            },
        },
    });

export {darkTheme};
export default baseTheme;