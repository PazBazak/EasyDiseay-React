import React from "react";
import TextField from "@material-ui/core/TextField";

const PasswordField = ({margin}) => {
    return (
        <TextField
            variant="outlined"
            margin={margin}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
        />
    )
};

export default PasswordField;
