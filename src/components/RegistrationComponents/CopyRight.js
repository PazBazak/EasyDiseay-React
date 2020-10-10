import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Box from '@material-ui/core/Box'
import {Link as RouterLink} from 'react-router-dom'
import {APP_NAME, COPYRIGHT} from "../utils/Constants";

function Copyright() {
    return (
        <Box mt={5}>
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