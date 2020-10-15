import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {useField} from "formik";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";

const CustomCheckBox = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <FormControl required error={!!errorText}>
            <FormControlLabel
                control={<Checkbox color="primary"/>}
                label={label}
                {...field}
            />
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    )
};

export default CustomCheckBox