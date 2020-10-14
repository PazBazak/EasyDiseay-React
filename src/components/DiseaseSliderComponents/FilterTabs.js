import React, {useState} from "react";
import TabItem from "./TabItem";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {HOT_TAB, NEW_TAB, TRENDING_TAB} from "../utils/Constants";
import {makeStyles} from "@material-ui/core/styles";
import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    hottestStyle: {
        color: 'orange',
    },
    trendingStyle: {
        color: 'green'
    },
    latestStyle: {
        color: blue[600]
    },
}));

const FilterTabs = () => {
    const classes = useStyles();
    const [activeTabIndex, setActiveTabIndex] = useState(HOT_TAB);

    const handleTabClick = (event, index) => {
        setActiveTabIndex(index);
    };

    return (
        <div>
            <TabItem text={'Hottest'}
                     className={classes.hottestStyle}
                     icon={<WhatshotIcon/>}
                     isSelected={activeTabIndex === HOT_TAB}
                     onClick={(event) => handleTabClick(event, HOT_TAB)}/>
            <TabItem text={'Trending'}
                     className={classes.trendingStyle}
                     icon={<TrendingUpIcon/>}
                     isSelected={activeTabIndex === TRENDING_TAB}
                     onClick={(event) => handleTabClick(event, TRENDING_TAB)}/>
            <TabItem text={'Latest'}
                     className={classes.latestStyle}
                     icon={<ScheduleIcon/>}
                     isSelected={activeTabIndex === NEW_TAB}
                     onClick={(event) => handleTabClick(event, NEW_TAB)}/>
        </div>
    )
};

export default FilterTabs;

