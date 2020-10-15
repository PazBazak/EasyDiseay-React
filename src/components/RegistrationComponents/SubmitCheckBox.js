import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SubmitCheckBox = ({text}) => {
    return (
        <FormControlLabel
            control={<Checkbox color="primary"/>}
            label={text}/>
    )
};

export default SubmitCheckBox;
