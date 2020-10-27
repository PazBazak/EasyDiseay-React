import React, {Fragment, useRef} from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const useStyles = makeStyles((theme) => ({
    accountBtn: {
        textTransform: 'none',
        fontSize: '1rem',
    },
}));

const AccountTab = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = useRef(null);
    const user = useSelector(state => state.authState.user);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = e => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className={'ml-auto'}>
                <Button id={'header-btn'}
                        ref={anchorRef}
                        className={classes.accountBtn + " btn border"}
                        type="button"
                        onClick={handleClick}
                        startIcon={<AccountCircleIcon />}
                >
                    Account
                </Button>
            </div>
            <StyledMenu
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </StyledMenu>
        </Fragment>
    )
};

export default AccountTab;
