import React from "react";
import SubmitField from "./SubmitField";

const EmailField = ({margin, autoFocus}) => {
    return (
        <SubmitField
            margin={margin}
            id={'email'}
            label={'Email Address'}
            name={'email'}
            autoComplete={'email'}
            autoFocus={autoFocus}/>
    )
};

export default EmailField;
