import React, {useContext, useState} from 'react';
import {emphasize, makeStyles, withStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import {Link as LinkReactRouter} from 'react-router-dom'
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {clearSelectedArticle} from "../../global_state/actions/articlesActions";


const useStyle = makeStyles((theme) => ({
    root: {
        borderRadius: '0px',
    },
    centerStyle: {
        textAlign: 'center',
        marginBottom: '5%',
    },
    dateStyle: {
        fontSize: 'small',
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 'large',
        lineHeight: '1.2',
    },
    summaryStyle: {
        lineHeight: '1.7',
    },
    imgStyle: {
        width: '50%',
    },
    linkStyle: {
        "&:hover, &:focus": {
            fontWeight: 'bold',
            textDecoration: 'none',
        },
    },
    ChipStyle: {
        marginLeft: '5px',
    },
}));

function BouncePage() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const article = useSelector(state => state.articleState.selectedArticle);
    const isArticleSelected = useSelector(state => state.articleState.isArticleSelected);
    const isLikeArticleErrorRaise = useSelector(state => state.articleState.isLikeArticleErrorRaise);
    const isAddCommentArticleErrorRaise = useSelector(state => state.articleState.isAddCommentArticleErrorRaise);
    const likeArticleErrorContent = useSelector(state => state.articleState.likeArticleErrorContent);
    const addCommentArticleErrorContent = useSelector(state => state.articleState.addCommentArticleErrorContent);

    const ChipClicked = () => {
        dispatch(clearSelectedArticle());
    };

    if (isArticleSelected) {
        return (
            <Container component="main" maxWidth="xs">
                <div>
                    {/*Date*/}
                    <Typography
                        variant="button"
                        display="block"
                        className={clsx(classes.dateStyle, classes.centerStyle)}
                        gutterBottom>
                        {article.published_date}
                    </Typography>

                    {/*Title*/}
                    <Typography
                        variant="overline"
                        display="block"
                        className={clsx(classes.titleStyle, classes.centerStyle)}
                        gutterBottom>
                        {article.title}
                    </Typography>

                    {/*Website*/}
                    <Typography
                        className={classes.centerStyle}
                        style={{fontSize: 'small'}}
                        display="block"
                        gutterBottom>
                        <div>
                            <span>By </span>
                            <Link href={`https://www.${article.source_site.name}`}
                                  underline={'none'}
                                  color={'primary'}
                                  className={classes.linkStyle}
                                  target={`https://www.${article.source_site.name}`}>
                                {article.source_site.name}
                            </Link>
                        </div>
                    </Typography>

                    {/*Img*/}
                    <img src={article.img}
                         className={'bounce-image'}/>

                    {/*Feed Information*/}
                    <div className={classes.centerStyle}>
                        <Chip
                            variant="outlined"
                            size="small"
                            label={article.source_site.name}
                            clickable
                            onClick={ChipClicked}
                            component={LinkReactRouter}
                            to={`/articles/${article.source_site.id}`}
                            className={clsx(classes.ChipStyle, classes.linkStyle)}
                            color="primary"/>
                        {article.diseases.map((disease) =>
                            <Chip
                                className={clsx(classes.ChipStyle, classes.linkStyle)}
                                variant="outlined"
                                size="small"
                                label={disease.name}
                                component={LinkReactRouter}
                                onClick={ChipClicked}
                                to={`/disease/${disease.id}`}
                                clickable/>)}
                    </div>

                    {/*Summary*/}
                    <Typography
                        variant="body1"
                        display="block"
                        className={classes.summaryStyle}
                        gutterBottom>
                        {article.summary}
                    </Typography>

                    {/*Read more, Link to the article*/}
                    <Typography
                        variant="button"
                        display="block"
                        className={classes.centerStyle}
                        gutterBottom>
                        <Link href={`https://www.${article.url}`}
                              underline={'none'}
                              color={'primary'}
                              className={classes.linkStyle}
                              target={`https://www.${article.url}`}>
                            Read more!
                        </Link>
                    </Typography>

                </div>
            </Container>
        );
    } else
        return null;
}

export default BouncePage;
