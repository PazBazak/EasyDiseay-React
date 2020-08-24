import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Feed from "./Feed";

class ArticleFeed extends React.Component {
    render() {
        return (
            <div className={'col-9 pt-2'}>
                <Feed title={"CoronaVirus might just be the end of the world, scientist claims!"}/>
            </div>
        )
    }

}

export default ArticleFeed;

