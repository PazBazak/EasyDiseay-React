import React from "react";

function AccountTabs({setFormPopupOpened}) {

    const handleClick = () => {
        setFormPopupOpened(true);
    };

    return (
        <div className={'ml-auto'}>
            <input id={'login'}
                   className="btn"
                   type="button"
                   value="Login"
                   onClick={handleClick}/>
            <input id={'sign-up'}
                   className="btn border-bottom"
                   type="button"
                   value="Sign-Up"
                   onClick={handleClick}/>
        </div>
    )
}

export default AccountTabs;

