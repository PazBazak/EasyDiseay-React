import React, {Fragment} from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const AccountTab = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className={'ml-auto'}>
                <input id={'header-btn'}
                       className="btn border"
                       type="button"
                       value="Account"
                       onClick={handleClick}
                />
            </div>
            <Menu
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Fragment>
    )
};

export default AccountTab;
