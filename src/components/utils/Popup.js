import React from "react";
import {Dialog, DialogContent} from "@material-ui/core";


const Popup = ({title, children, isOpened, setIsOpened}) => {
    return (
        <Dialog open={isOpened}
                onClose={() => setIsOpened(false)}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;