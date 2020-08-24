import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Feed from "./Feed";

class ArticleFeed extends React.Component {
    render() {
        return (
            <div className={'col'}>
                <Feed
                    title={"CoronaVirus might just be the end of the world, scientist claims!"}
                    image={'https://images.medicinenet.com/images/newsletter/specialty/oleander-plant.jpg'}
                    website={'website1.com'}
                    disease={'Disease 1'}
                    publishedDate={'Monday August 20, 2020'}
                    bodyText={'osit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'}/>
                <Feed
                    title={"Curcumin might be the cause for cancer in some cancer patients?"}
                    image={'https://5.imimg.com/data5/AF/EZ/DB/SELLER-8051866/curcumin-95-natural-extract-500x500.jpg'}
                    website={'medicenet.com'}
                    disease={'Disease2'}
                    publishedDate={'Thursday October 5, 2019'}
                    bodyText={'osit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi neectetur'}/>
                <Feed
                    title={"Do black people with dermatitis live less? new research found that niggers lifespan is shorter!"}
                    image={'https://d279m997dpfwgl.cloudfront.net/wp/2020/07/Emmanuel-1000x776.jpg'}
                    website={'niggalation.com'}
                    disease={'Disease3'}
                    publishedDate={'Sunday February 16, 2019'}
                    bodyText={'osit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi neectetur'}/>
            </div>
        )
    }

}

export default ArticleFeed;

