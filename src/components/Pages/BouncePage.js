import React, {useContext, useState, Component} from 'react';
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
import CommentBox from "../ArticleFeedComponents/CommentBox";
import {Divider, Statistic} from 'semantic-ui-react'

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
    const {title, summary, img, publishedDate, website, diseases, url} = article;

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
                        {publishedDate}
                    </Typography>

                    {/*Title*/}
                    <Typography
                        variant="overline"
                        display="block"
                        className={clsx(classes.titleStyle, classes.centerStyle)}
                        gutterBottom>
                        {title}
                    </Typography>

                    {/*Website*/}
                    <Typography
                        className={classes.centerStyle}
                        style={{fontSize: 'small'}}
                        display="block"
                        gutterBottom>
                        <div>
                            <span>By </span>
                            <Link href={`https://www.${website.name}`}
                                  underline={'none'}
                                  color={'primary'}
                                  className={classes.linkStyle}
                                  target={`https://www.${website.name}`}>
                                {website.name}
                            </Link>
                        </div>
                    </Typography>

                    {/*Img*/}
                    <img src={img}
                         className={'bounce-image'}/>

                    {/*Feed Information*/}
                    <div className={classes.centerStyle}>
                        <Chip
                            variant="outlined"
                            size="small"
                            label={website.name}
                            clickable
                            onClick={ChipClicked}
                            component={LinkReactRouter}
                            to={`/articles/${website.id}`}
                            className={clsx(classes.ChipStyle, classes.linkStyle)}
                            color="primary"/>
                        {diseases.map((disease) =>
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

                    {/*Likes, Share, Time to read*/}
                    <div className={'StatisticSegment'}>
                        <Statistic.Group size={"mini"}>
                            <Statistic>
                                <Statistic.Value>22</Statistic.Value>
                                <Statistic.Label>Likes</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>31,200</Statistic.Value>
                                <Statistic.Label>Views</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>22</Statistic.Value>
                                <Statistic.Label>Comments</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </div>

                    <Divider/>

                    {/*Summary*/}
                    <Typography
                        variant="body1"
                        display="block"
                        className={classes.summaryStyle}
                        gutterBottom>
                        {summary}
                    </Typography>

                    {/*Read more, Link to the article*/}
                    <Typography
                        variant="button"
                        display="block"
                        className={classes.centerStyle}
                        gutterBottom>
                        <Link href={`https://www.${url}`}
                              underline={'none'}
                              color={'primary'}
                              className={classes.linkStyle}
                              target={`https://www.${url}`}>
                            Read more!
                        </Link>
                    </Typography>

                    {/*CommentsBox*/}
                    <CommentBox/>

                </div>
            </Container>
        );
    } else
        return null;
}

export default BouncePage;
