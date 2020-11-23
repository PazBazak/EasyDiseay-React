import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setHeaderPosAsFixed, setHeaderPosAsStatic} from "../../global_state/actions/headerActions";
import {fetchTeamDetails} from "../../global_state/actions/aboutusActions";

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
