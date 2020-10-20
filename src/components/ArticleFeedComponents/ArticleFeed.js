import React, {useEffect} from "react";
import {LoadingArticles} from "../utils/LoadingsTypes";
import Feed from "./Feed";
import {connect} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../actions/articlesActions";

function ArticleFeed({diseaseId, articles, fetchArticles, fetchArticlesForDisease}) {
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
                <LoadingArticles/>}
        </div>
    )
}

const mapStateToProps = state => ({
    articles: state.articleState.articles,
});

export default connect(mapStateToProps,
    {
        fetchArticles,
        fetchArticlesForDisease
    }
)
(ArticleFeed);

