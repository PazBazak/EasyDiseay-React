import React, {useContext, useEffect, useState} from "react";
import Feed from "./Feed";
import {LoadingArticles} from "../utils/LoadingsTypes";
import ArticlesContext from "../../contexts/articlesContext/articlesContext";
import MiniFeed from "./MiniFeed";
import ViewListIcon from '@material-ui/icons/ViewList';

function ArticleFeed({diseaseId}) {
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
                (isMinimizedView ? articles.map(article =>
                        <MiniFeed
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            url={article.url}
                            img={article.img}
                            website={article.source_site}
                            diseases={article.diseases}
                            publishedDate={article.published_date}
                            timeToRead={article.time_to_read}
                            summary={article.summary}
                            isMinimizedView={isMinimizedView}
                        />)
                    :
                    articles.map(article =>
                        <Feed
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            url={article.url}
                            img={article.img}
                            website={article.source_site}
                            diseases={article.diseases}
                            publishedDate={article.published_date}
                            timeToRead={article.time_to_read}
                            summary={article.summary}
                            isMinimizedView={isMinimizedView}
                        />))
                :
                <LoadingArticles/>}
        </div>
    )
}

export default ArticleFeed;

