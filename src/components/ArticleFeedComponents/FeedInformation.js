import React from "react";
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {emphasize, withStyles} from '@material-ui/core/styles';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);


function FeedInformation(props) {
    const {publishedDate, website, diseases, timeToRead} = props;

    return (
        // <div className={'d-flex flex-row feed-info-text'}>
        //     <p>{publishedDate}</p>
        //     <p className={'mx-2'}>|</p>
        //     <p>{website}</p>
        //     <p className={'mx-2'}>|</p>
        //     <p>{diseases.map((disease) => disease.name).join(', ')}</p>
        //     <p className={'ml-auto mr-5'}>{timeToRead} min</p>
        // </div>
        <Breadcrumbs aria-label={"breadcrumb"}>
            <p>{publishedDate}</p>
            <StyledBreadcrumb
                component="p"
                label="Website"
            />
            <StyledBreadcrumb
                component="p"
                label="Diseases"
            />
        </Breadcrumbs>
    )
}

export default FeedInformation;

