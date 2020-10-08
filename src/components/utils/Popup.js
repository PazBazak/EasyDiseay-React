import React from "react";
import {Dialog, DialogTitle, DialogContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    dialog: {

    },
}));

const Popup = ({title, children, opened, setOpened}) => {
    const classes = useStyle();

    return (
        <Dialog open={opened}
                onClose={() => setOpened(false)}
                classes={{paper: classes.dialog}}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};

export default Popup;