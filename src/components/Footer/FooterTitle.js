import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    title: {
        color: '#fff',
        marginBottom: '8px',
        fontWeight: 'bolder',
        letterSpacing: '0.07rem',
    },
}));

const FooterTitle = ({title}) => {
    const classes = useStyle();

    return (
        <Typography
            className={classes.title}
            align={"center"}
            variant={"h6"}
            component={"h4"}
        >
            {title}
        </Typography>
    )
};

export default FooterTitle;

