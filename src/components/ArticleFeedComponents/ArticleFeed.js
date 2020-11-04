import React, {useEffect} from "react";
import {LoadingArticles} from "../utils/LoadingsTypes";
import Feed from "./Feed";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, fetchArticlesForDisease} from "../../global_state/actions/articlesActions";

function ArticleFeed({diseaseId}) {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articleState.articles);

    // checking if this is main page or disease page
    useEffect(() => {
        if (diseaseId === undefined) {
            dispatch(fetchArticles());
        } else {
            dispatch(fetchArticlesForDisease(diseaseId, 10));
        }
        // eslint-disable-next-line
    }, [diseaseId]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight)
        {
            console.log('Fetch more list items!');
        }
    };

    // adding event for scroll for infinite scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        likes={article.likes}
                        comments={article.comments}
                    />)
                :
                <LoadingArticles/>}
        </div>
    )
}

export default ArticleFeed;

