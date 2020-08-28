import React, {useEffect, useState} from "react";
import Feed from "./Feed";

const feeds = [
    {
        id: 1,
        title: "CoronaVirus might just be the end of the world, scientist claims!",
        url: 'yo',
        img: "https://images.medicinenet.com/images/newsletter/specialty/oleander-plant.jpg",
        source_site: {name: "website1.com"},
        disease: "Disease 1",
        published_date: "Monday August 20, 2020",
        summary: "osit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
    {
        id: 2,
        title: "Curcumin might be the cause for cancer in some cancer patients?",
        url: 'yo',
        img: "https://5.imimg.com/data5/AF/EZ/DB/SELLER-8051866/curcumin-95-natural-extract-500x500.jpg",
        source_site: {name: "website2.com"},
        disease: "Disease 2",
        published_date: "Sunday February 2, 2019",
        summary: "ratione voluptatem sequi nesciunt. Neque porroesciunt. Neque porroesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
    {
        id: 3,
        title: "Do black people with dermatitis live less? new research found that niggers lifespan is shorter!",
        url: 'yo',
        img: "https://d279m997dpfwgl.cloudfront.net/wp/2020/07/Emmanuel-1000x776.jpg",
        source_site: {name: "website3.com"},
        disease: "Disease 3",
        published_date: "Tuesday October 15, 2021",
        summary: "osit voluptatem accusantdicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
];

const createFeed = (feed) => {
    return (
        <Feed
            key={feed.id}
            title={feed.title}
            url={feed.url}
            image={feed.img}
            website={feed.source_site.name}
            disease={"Disease X"}
            publishedDate={feed.published_date}
            bodyText={feed.summary}/>
    )
};


function ArticleFeed() {
    let [currentFeeds, setCurrentFeeds] = useState(null);

    //Try fetching outside the useEffect
    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/articles/', {
                    method: 'GET'
                });
                const fetchedFeeds = await response.json();
                setCurrentFeeds(fetchedFeeds);
            } catch (e) {
                setCurrentFeeds(feeds)
            }
        };
        fetchFeeds();
    }, []);

    return (
        <div className={'col'}>
            {currentFeeds !== null && currentFeeds.map(createFeed)}
        </div>
    )
}

export default ArticleFeed;

