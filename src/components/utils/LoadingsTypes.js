import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {BoxLoading} from 'react-loadingg';

const Circle = () => {
    return (
        <div style={{marginTop: '25vh'}} className={'text-center'}>
            <CircularProgress size={100}/>
        </div>
    )
};

const Box = () => {
    return (
        <div style={{marginTop: '25vh'}} className={'text-center'}>
            <BoxLoading size='large'/>
        </div>
    )
};


export {Circle as LoadingCircle, Box as BoxLoading};