import React, {useEffect} from "react";
import {LoadingArticles} from "../utils/LoadingsTypes";
import Feed from "./Feed";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../global_state/actions/articlesActions";

function ArticleFeed({diseaseId}) {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articleState.articles);

    useEffect(() => {
        if (diseaseId === undefined) {
            dispatch(fetchArticles());
        } else {
            dispatch(fetchArticlesForDisease(diseaseId, 10));
        }
        // eslint-disable-next-line
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
                <LoadingArticles/>}
        </div>
    )
}

export default ArticleFeed;

