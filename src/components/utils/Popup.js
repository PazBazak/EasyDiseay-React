import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";


const Popup = ({title, children, isOpened, setOpened}) => {
    return (
        <Dialog open={isOpened}
                onClose={() => setOpened(false)}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;