import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Box from '@material-ui/core/Box'
import {Link as RouterLink} from 'react-router-dom'

function Copyright() {
    return (
        <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" to={'/'} component={RouterLink}>
                    EasyDeasy
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default Copyright;