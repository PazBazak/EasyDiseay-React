import React from "react";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing.unit,
    },
    sunStyle: {
        color: '#FFD700',
    },
    moonStyle: {
        color: '#121212',
    },
    iconButtonStyle: {
        "&:focus": {
            outline: "none"
        },
    },
}));

function DarkModeToggle(props) {
    const classes = useStyle();
    const {isDark, toggleDarkMode} = props;

    const iconButtonProps = {
        onClick: toggleDarkMode,
        disableRipple: true,
        disableFocusRipple: true,
        className: classes.iconButtonStyle,
    };

    return (
        <div className={classes.root}>

            {/*Moon icon*/}
            <Tooltip title={'Dark Mode'}>
                <IconButton {...iconButtonProps} hidden={isDark}>
                    <Brightness2Icon className={classes.moonStyle}/>
                </IconButton>
            </Tooltip>

            {/*Sun icon*/}
            <Tooltip title={'Light Mode'}>
                <IconButton {...iconButtonProps} hidden={!isDark}>
                    <EmojiObjectsIcon className={classes.sunStyle}/>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default DarkModeToggle;

