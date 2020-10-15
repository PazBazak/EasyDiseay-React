import React, {useEffect, useContext, useState} from "react";
import Feed from "./Feed";
import {LoadingArticles} from "../utils/LoadingsTypes";
import ArticlesContext from "../../contexts/articlesContext/articlesContext";
import MiniFeed from "./MiniFeed";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    title: {

    }
}));

const createFeed = (feed) => {
    return (
        <Feed
            key={feed.id}
            id={feed.id}
            title={feed.title}
            url={feed.url}
            img={feed.img}
            website={feed.source_site}
            diseases={feed.diseases}
            publishedDate={feed.published_date}
            timeToRead={feed.time_to_read}
            summary={feed.summary}/>
    )
};

const createMiniFeed = (feed) => {
    return (
        <MiniFeed
            key={feed.id}
            id={feed.id}
            title={feed.title}
            url={feed.url}
            img={feed.img}
            website={feed.source_site}
            diseases={feed.diseases}
            publishedDate={feed.published_date}
            timeToRead={feed.time_to_read}
            summary={feed.summary}/>
    )
};


function ArticleFeed({diseaseId}) {
    const classes = useStyle();
    const articleContext = useContext(ArticlesContext);
    const {articles, fetchArticles, fetchArticlesForDisease} = articleContext;
    const [isMinimizedView, setIsMinimizedView] = useState(true);

    useEffect(() => {
        if (diseaseId === undefined) {
            fetchArticles();
        } else {
            fetchArticlesForDisease(diseaseId, 10);
        }
    }, [diseaseId]);

    return (
        <div className={'col'}>
            {articles.length > 0 ?
                (isMinimizedView ? articles.map(createMiniFeed) : articles.map(createFeed))
                :
                <LoadingArticles/>}
        </div>
    )
}

export default ArticleFeed;

