import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const LoadingArticles = () => {
    return (
        <div style={{marginTop: '25vh'}} className={'text-center'}>
            <CircularProgress size={100}/>
        </div>
    )
};

export {LoadingArticles};