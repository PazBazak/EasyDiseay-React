import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";


const Popup = ({children, isOpened, onClose}) => {
    return (
        <Dialog open={isOpened}
                fullWidth
                onClose={onClose}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;