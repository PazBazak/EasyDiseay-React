import React, {useEffect, useContext} from "react";
import Feed from "./Feed";
import {LoadingArticles} from "../utils/LoadingsTypes";
import ArticlesContext from "../../contexts/articlesContext/articlesContext";


const createFeed = (feed) => {
    return (
        <Feed
            key={feed.id}
            title={feed.title}
            url={feed.url}
            img={feed.img}
            website={feed.source_site.name}
            diseases={feed.diseases}
            publishedDate={feed.published_date}
            timeToRead={feed.time_to_read}
            summary={feed.summary}/>
    )
};


function ArticleFeed() {
    const articleContext = useContext(ArticlesContext);
    const {articles, fetchArticles} = articleContext;

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    return (
        <div className={'col'}>
            {articles.length > 0 ? articles.map(createFeed) : <LoadingArticles />}
        </div>
    )
}

export default ArticleFeed;

