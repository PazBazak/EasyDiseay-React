import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import {APP_NAME} from "../utils/Constants";

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

const FooterSubTitle = (props) => {
    const {
        title,
        link,
    } = props;
    const classes = useStyle();

    return (
        <Typography
            className={classes.subTitle}
            variant={"body2"}
        >
            <Link className={classes.aTag} to={link} component={RouterLink}>
                {title}
            </Link>
        </Typography>
    )
};

export default FooterSubTitle;

