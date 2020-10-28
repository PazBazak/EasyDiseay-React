import {createMuiTheme} from "@material-ui/core";

const baseTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
    },
    typography: {
        fontFamily: 'roboto',
        fontSize: 17,
        body2: {
            fontSize: 'medium'
        }
    }
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