import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {BoxLoading} from 'react-loadingg';

const divProps = {
    style: {marginTop: '25vh'},
    className: 'text-center',
}

const Circle = () => {
    return (
        <div {...divProps}>
            <CircularProgress size={100}/>
        </div>
    )
};

const Box = () => {
    return (
        <div {...divProps}>
            <BoxLoading size='large'/>
        </div>
    )
};


export {Circle as LoadingCircle, Box as BoxLoading};