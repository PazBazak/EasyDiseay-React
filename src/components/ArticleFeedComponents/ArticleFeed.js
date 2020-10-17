import React, {useContext, useEffect} from "react";
import {BoxLoading} from "../utils/LoadingsTypes";
import ArticlesContext from "../../contexts/articlesContext/articlesContext";
import Feed from "./Feed";

function ArticleFeed({diseaseId}) {
    const articleContext = useContext(ArticlesContext);
    const {articles, fetchArticles, fetchArticlesForDisease} = articleContext;

    useEffect(() => {
        if (diseaseId === undefined) {
            fetchArticles();
        } else {
            fetchArticlesForDisease(diseaseId, 10);
        }
    }, [diseaseId]);


    return (
        <div className={'col'}>
            {articles.length > 0 ? articles.map(article =>
                    <Feed
                        key={article.id}
                        title={article.title}
                        url={article.url}
                        img={article.img}
                        website={article.source_site}
                        diseases={article.diseases}
                        publishedDate={article.published_date}
                        timeToRead={article.time_to_read}
                        summary={article.summary}
                    />)
                :
                <BoxLoading/>}

        </div>
    )
}

export default ArticleFeed;

