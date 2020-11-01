import React from "react";
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {emphasize, makeStyles, withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import MenuBookIcon from '@material-ui/icons/MenuBook';

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
        alignItems: 'flex-end',
        marginTop: '5px'
    },
    timeToRead: {
        display: 'inline',
        fontSize: '0.95rem',
        marginLeft: 'auto',
        marginBottom: '0',
    },
    breadcrumbs: {
        display: 'inline-block',
    },
    date: {
        marginBottom: 0,
    },
    bookIcon: {
        marginLeft: '8px',
        marginRight: '15px',
        marginBottom: '1px',
    }
}));


function FeedInformation(props) {
    const {publishedDate, diseases, timeToRead, website} = props;
    const classes = useStyle();

    return (
        <div className={'flex d-flex align-items-end'}>
            <Breadcrumbs aria-label={"breadcrumb"}
                         separator={'|'}
                         classes={{ol: classes.infoBar}}
                         className={classes.breadcrumbs}>
                <p className={classes.date}>{publishedDate}</p>
                <StyledBreadcrumb
                    component={Link}
                    to={`/sites/${website.id}`}
                    label={website.name}
                    style={{textDecoration: 'none', color: "#424242"}}
                    clickable/>
                {diseases.map((disease) =>
                    <StyledBreadcrumb
                        key={disease.id}
                        component={Link}
                        to={`/disease/${disease.id}`}
                        label={disease.name}
                        clickable
                        style={{textDecoration: 'none', color: "#424242"}}/>)}
            </Breadcrumbs>
            <Typography
                className={classes.timeToRead}
                variant={"body1"}
            >
                {timeToRead} min
            </Typography>
            <MenuBookIcon className={classes.bookIcon} fontSize={"small"}/>
        </div>
    )
}

export default FeedInformation;

