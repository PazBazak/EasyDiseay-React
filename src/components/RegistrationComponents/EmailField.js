import React from "react";
import TextField from "@material-ui/core/TextField";

const EmailField = ({margin, autoFocus}) => {
    return (
        <TextField
            variant="outlined"
            margin={margin}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus={autoFocus}
        />
    )
};

export default EmailField;
