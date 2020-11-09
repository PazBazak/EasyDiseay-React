import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Box from '@material-ui/core/Box'
import {Link as RouterLink} from 'react-router-dom'
import {APP_NAME, COPYRIGHT} from "../utils/Constants";

function Copyright({topMargin, background}) {
    return (
        <Box mt={topMargin} style={{backgroundColor: background}}>
            <Typography variant="body2" color="textSecondary" align="center">
                {COPYRIGHT}
                <Link color="inherit" to={'/'} component={RouterLink}>
                    {APP_NAME}
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default Copyright;