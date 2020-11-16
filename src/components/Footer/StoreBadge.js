import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    aTag: {
        display: 'inline-block',
        width: '175px',
        margin: '12px',
    },
    img: {
        width: '100%',
        height: '100%',
    },
}));

const StoreBadge = ({url, src}) => {
    const classes = useStyle();

    return (
        <a
            className={classes.aTag}
            href={url}
        >
            <img
                src={src}
                alt={'TBD'}
                className={classes.img}
            />
        </a>
    );
};

export default StoreBadge;

