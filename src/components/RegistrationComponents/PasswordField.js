import React from "react";
import TextField from '@material-ui/core/TextField';


const PasswordField = ({margin, value, onChange}) => {
    return (
        <TextField
            variant={'outlined'}
            fullWidth
            margin={margin}
            id={'password'}
            label={'Password'}
            name={'password'}
            autoComplete={'current-password'}
            type={'password'}
            value={value}
            onChange={onChange}/>
    )
};

export default PasswordField;
