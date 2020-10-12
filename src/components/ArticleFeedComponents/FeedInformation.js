import React from "react";
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {emphasize, makeStyles, withStyles} from '@material-ui/core/styles';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[200],
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
    label: {
        fontSize: '1.1rem',
    },
}))(Chip);

const useStyle = makeStyles((theme) => ({
    infoBar: {
        alignItems: 'flex-start',
        marginTop: '5px'
    },
    timeToRead: {
        display: 'inline',
        fontSize: '1.1rem',
        marginLeft: 'auto',
        marginRight: '25px',
    },
    breadcrumbs: {
        display: 'inline-block',
    },
}));


function FeedInformation(props) {
    const {publishedDate, website, diseases, timeToRead} = props;
    const classes = useStyle();

    return (
        <div className={'flex d-flex'}>
            <Breadcrumbs aria-label={"breadcrumb"}
                         separator={'|'}
                         classes={{ol: classes.infoBar}}
                         className={classes.breadcrumbs}
            >
                <p>{publishedDate}</p>
                <StyledBreadcrumb
                    component="p"
                    label={website}
                />
                {diseases.map((disease) =>
                    <StyledBreadcrumb
                        key={disease.id}
                        component="p"
                        label={disease.name}
                    />)}
            </Breadcrumbs>
            <p className={classes.timeToRead}>{timeToRead} min</p>
        </div>
    )
}

export default FeedInformation;

