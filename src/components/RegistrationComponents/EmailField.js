import React from "react";
import TextField from '@material-ui/core/TextField';


const EmailField = ({margin, autoFocus, value, onChange}) => {
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
            onChange={onChange}/>
    )
};

export default EmailField;
