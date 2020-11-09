import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    subTitle: {
        color: '#fff',
        marginBottom: '6px',
    },
    aTag: {
        color: '#fff',
        '&:hover': {
            color: '#d5d5d5',
        }
    }
}));

const FooterSubTitle = ({title}) => {
    const classes = useStyle();

    return (
        <Typography
            className={classes.subTitle}
            variant={"body2"}
        >
            <a href={'#'} className={classes.aTag}>{title}</a>
        </Typography>
    )
};

export default FooterSubTitle;

