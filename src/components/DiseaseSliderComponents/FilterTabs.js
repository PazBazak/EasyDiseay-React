import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TabItem from "./TabItem";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ScheduleIcon from '@material-ui/icons/Schedule';


const useStyles = makeStyles((theme) => ({}));

const FilterTabs = () => {
    const classes = useStyles();

    return (
        <div>
            <TabItem text={'Hot'} icon={<WhatshotIcon />} />
            <TabItem text={'Trending'} icon={<TrendingUpIcon />} />
            <TabItem text={'New'} icon={<ScheduleIcon />} />
        </div>
    )
};

export default FilterTabs;

