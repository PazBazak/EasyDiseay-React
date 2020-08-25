import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Feed from "./Feed";

const feeds = [
    {
        id: 1,
        title: "CoronaVirus might just be the end of the world, scientist claims!",
        image: "https://images.medicinenet.com/images/newsletter/specialty/oleander-plant.jpg",
        website: "website1.com",
        disease: "Disease 1",
        publishedDate: "Monday August 20, 2020",
        summary: "osit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
    {
        id: 2,
        title: "Curcumin might be the cause for cancer in some cancer patients?",
        image: "https://5.imimg.com/data5/AF/EZ/DB/SELLER-8051866/curcumin-95-natural-extract-500x500.jpg",
        website: "website2.com",
        disease: "Disease 2",
        publishedDate: "Sunday February 2, 2019",
        summary: "ratione voluptatem sequi nesciunt. Neque porroesciunt. Neque porroesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
    {
        id: 3,
        title: "Do black people with dermatitis live less? new research found that niggers lifespan is shorter!",
        image: "https://d279m997dpfwgl.cloudfront.net/wp/2020/07/Emmanuel-1000x776.jpg",
        website: "website3.com",
        disease: "Disease 3",
        publishedDate: "Tuesday October 15, 2021",
        summary: "osit voluptatem accusantdicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur"
    },
];

const createFeed = (feed) => {
    return (
        <Feed
        key={feed.id}
        title={feed.title}
        image={feed.image}
        website={feed.website}
        disease={feed.disease}
        publishedDate={feed.publishedDate}
        bodyText={feed.summary}/>
    )
};

class ArticleFeed extends React.Component {
    render() {
        return (
            <div className={'col'}>
                {feeds.map(createFeed)}
            </div>
        )
    }

}

export default ArticleFeed;

