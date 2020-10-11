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
            background: {
                paper: '#303030',
            },
            primary: {
                main: '#424242'
            },
            secondary: {
                main: '#ffc400'
            },
        },
});

export {darkTheme};
export default baseTheme;