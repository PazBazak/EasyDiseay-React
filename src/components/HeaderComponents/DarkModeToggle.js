import React from "react";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import {useSelector} from "react-redux";

const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
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
    const isDark = useSelector(state => state.themeState.isDark);
    const {toggleDarkMode} = props;

    const iconButtonProps = {
        onClick: toggleDarkMode,
        disableRipple: true,
        disableFocusRipple: true,
        className: classes.iconButtonStyle,
    };

    return (
        <div className={classes.root}>
            {isDark ?
                <Tooltip title={'Light Mode'}>
                    <IconButton {...iconButtonProps}>
                        <EmojiObjectsIcon className={classes.sunStyle}/>
                    </IconButton>
                </Tooltip>
                :
                <Tooltip title={'Dark Mode'}>
                    <IconButton {...iconButtonProps}>
                        <Brightness2Icon className={classes.moonStyle}/>
                    </IconButton>
                </Tooltip>
            }
        </div>
    )
}

export default DarkModeToggle;

