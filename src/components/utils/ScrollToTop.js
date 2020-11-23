import React, {Component, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setHeaderPosAsFixed, setHeaderPosAsStatic} from "../../global_state/actions/headerActions";
import {fetchTeamDetails} from "../../global_state/actions/aboutusActions";


/* Copied from StackOverflow. Suppose to scroll to top when the route is changed and, same UI effect like refresh */

/*
class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        const {location} = this.props;
        if (location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);

        }
    }

    render() {
        const {children} = this.props;
        return children;
    }
}
*/

function ScrollToTop(props) {
    const {location, children} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.pathname === "/aboutus") {
            dispatch(fetchTeamDetails());
            dispatch(setHeaderPosAsStatic());
        } else {
            dispatch(setHeaderPosAsFixed());
        }
    }, [location]);
    return children;
}

export default withRouter(ScrollToTop);
