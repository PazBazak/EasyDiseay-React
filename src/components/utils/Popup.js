import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";


const Popup = ({title, children, isOpened, onClose, isFullWidth}) => {
    return (
        <Dialog open={isOpened}
                fullWidth={isFullWidth}
                onClose={onClose}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;