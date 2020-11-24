import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../global_state/actions/articlesActions";
import {makeStyles} from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import {BoxLoading} from "../utils/LoadingsTypes";
import Feed from "./Feed";

const useStyles = makeStyles((theme) => ({
    articleFeed: {
        overflow: 'auto',
        maxHeight: '125vh',
        "&::-webkit-scrollbar": {
            display: 'none'
        },
    },
}));


function ArticleFeed({diseaseId}) {
    const dispatch = useDispatch();

    const articles = useSelector(state => state.articleState.articles);
    const diseaseArticles = useSelector(state => state.articleState.diseaseArticles);
    const articlesCount = useSelector(state => state.articleState.articlesCount);
    const chosenDisease = useSelector(state => state.articleState.chosenDisease);

    const [isDiseasePage, setIsDiseasePage] = useState(false);

    const classes = useStyles();
    const [page, setPage] = useState(1);

    const fetchMoreArticles = () => {
        setPage(page + 1);
        dispatch(fetchArticles(page, true));
    };

    const fetchMoreArticlesForDisease = () => {
        setPage(page + 1);
        dispatch(fetchArticlesForDisease(diseaseId, page, chosenDisease !== diseaseId));
    };

    useEffect(() => {
        if (diseaseId === undefined) {
            dispatch(fetchArticles(page));
            setIsDiseasePage(false);
        } else {
            dispatch(fetchArticlesForDisease(diseaseId, page, chosenDisease !== diseaseId));
            setIsDiseasePage(true);
        }
        // eslint-disable-next-line
    }, [diseaseId]);

    return (
        <div className={classes.articleFeed + ' col'} id={'ArticleDiv'}>
            <InfiniteScroll
                dataLength={isDiseasePage ? diseaseArticles.length : articles.length}
                next={isDiseasePage ? fetchMoreArticlesForDisease: fetchMoreArticles}
                hasMore={isDiseasePage ? diseaseArticles.length < articlesCount : articles.length < articlesCount}
                loader={<BoxLoading/>}
                scrollableTarget={'ArticleDiv'}
                endMessage={isDiseasePage ? "No more articles for this disease!" : "No more articles!"}
            >
                {isDiseasePage ? diseaseArticles.map(article => (
                        <Feed key={article.id} article={article}/>
                    ))
                    :
                    articles.map(article => (
                        <Feed key={article.id} article={article}/>
                    ))}
            </InfiniteScroll>
        </div>
    )
}

export default ArticleFeed;

