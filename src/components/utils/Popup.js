import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";


const Popup = ({title, children, isOpened, onClose}) => {
    return (
        <Dialog open={isOpened}
                fullWidth={'true'}
                onClose={onClose}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;