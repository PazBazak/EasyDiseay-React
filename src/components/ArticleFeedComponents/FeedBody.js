import React from "react";
import Truncate from 'react-truncate';
import {Link as RouterLink} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyle = makeStyles((theme) => ({
    readMoreStyle: {
        opacity: '0.7',
        fontSize: '78%',
        '&:hover, &:focus': {
            fontWeight: 600,
            textDecoration: 'none',
        },
    }

}));

const altTextPreFix = "Disease and Research News - ";


function FeedBody(props) {
    const classes = useStyle();
    const {key, img, title, summary} = props;


    const ellipsisContinue = <span>...
                <Link color="inherit"
                      className={classes.readMoreStyle}
                      to={`articles/${key}`}
                      component={RouterLink}>Read more</Link></span>;

    return (
        <div className={'d-flex'}>
            <img src={img}
                 alt={altTextPreFix + title}
                 className={'feed-image'}/>
            <Truncate lines={2}
                      trimWhitespace={'true'}
                      ellipsis={ellipsisContinue}
                      className={'feed-text ml-3'}>{summary}</Truncate>
        </div>
    )
}

export default FeedBody;

