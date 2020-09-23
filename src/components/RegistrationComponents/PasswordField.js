import React from "react";
import SubmitField from "./SubmitField";

const PasswordField = ({margin}) => {
    return (
        <SubmitField
            margin={margin}
            id={'password'}
            label={'Password'}
            name={'password'}
            autoComplete={'current-password'}
            autoFocus={false} type={'password'}/>
    )
};

export default PasswordField;
