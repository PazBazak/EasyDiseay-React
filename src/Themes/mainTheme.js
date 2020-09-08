import { createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const theme = createMuiTheme({
        palette: {
            primary: {
                main: blue[600]
            },
            secondary: {
                main: '#ffc400'
            },
        },
    });

export default theme;