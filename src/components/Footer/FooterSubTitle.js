import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    subTitle: {
        color: '#fff',
        marginBottom: '6px',
        alignSelf: 'center',
        display: 'inline',
        cursor: 'pointer',
    },
}));

const FooterSubTitle = ({title}) => {
    const classes = useStyle();

    return (
        <Typography
            align={"center"}
            className={classes.subTitle}
            variant={"body2"}
        >
            {title}
        </Typography>
    )
};

export default FooterSubTitle;

