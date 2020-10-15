import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SubmitCheckBox = ({text, checked, name, onChange}) => {
    return (
        <FormControlLabel
            control={<Checkbox color="primary"/>}
            label={text}
            checked={checked}
            name={name}
            onChange={onChange}
        />
    )
};

export default SubmitCheckBox;
