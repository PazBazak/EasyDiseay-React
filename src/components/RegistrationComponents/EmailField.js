import React from "react";
import TextField from '@material-ui/core/TextField';


const EmailField = ({margin, autoFocus, value, onChange, onBlur}) => {
    return (
        <TextField
            variant={'outlined'}
            fullWidth
            margin={margin}
            id={'email'}
            label={'Email Address'}
            name={'email'}
            autoComplete={'email'}
            autoFocus={autoFocus}
            value={value}
            onBlur={onBlur}
            onChange={onChange}/>
    )
};

export default EmailField;
