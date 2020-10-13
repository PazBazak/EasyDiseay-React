import React, {useState} from "react";
import TabItem from "./TabItem";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {HOT_TAB, NEW_TAB, TRENDING_TAB} from "../utils/Constants";


const FilterTabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(HOT_TAB);

    const handleTabClick = (event, index) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
            <TabItem text={'Hot'}
                     icon={<WhatshotIcon/>}
                     isSelected={activeTabIndex === HOT_TAB}
                     onClick={(event) => handleTabClick(event, HOT_TAB)}
            />
            <TabItem text={'Trending'}
                     icon={<TrendingUpIcon/>}
                     isSelected={activeTabIndex === TRENDING_TAB}
                     onClick={(event) => handleTabClick(event, TRENDING_TAB)}
            />
            <TabItem text={'New'}
                     icon={<ScheduleIcon/>}
                     isSelected={activeTabIndex === NEW_TAB}
                     onClick={(event) => handleTabClick(event, NEW_TAB)}
            />
        </div>
    )
};

export default FilterTabs;

