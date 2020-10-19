import React from "react";
import {TextField} from "@material-ui/core";
import {useField} from "formik";

const CustomTextField = ({placeholder, inputProps, variant, fullWidth, label, autoFocus, required, type, ...props}) => {
    const [field, meta] = useField(props);
    // I replace the first word with label, thus it won't use the used variable names (aka first_name)
    const errorText = meta.error && meta.touched ? meta.error.replace(/[^\s]*/, label) : '';

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
            type={type}
            InputProps={inputProps}
        />
    )
};

export default CustomTextField;

