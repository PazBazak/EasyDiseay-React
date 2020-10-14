import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const CustomTextField = ({placeholder, variant, fullWidth, label, autoFocus, required, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            {...field}
            placeholder={placeholder}
            variant={variant}
            helperText={errorText}
            fullWidth={fullWidth}
            label={label}
            autoFocus={autoFocus}
            required={required}
            error={!!errorText}
        />
    )
};

export default CustomTextField;

