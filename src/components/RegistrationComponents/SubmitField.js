import React from "react";
import TextField from "@material-ui/core/TextField";

const SubmitField = ({margin, autoFocus, id, label, name, autoComplete, type}) => {
    return (
        <TextField
            variant="outlined"
            margin={margin}
            required
            fullWidth
            type={type}
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
        />
    )
};

export default SubmitField;
