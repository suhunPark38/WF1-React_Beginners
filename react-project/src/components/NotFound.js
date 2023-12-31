import {useLocation} from "react-router-dom";
import React from "react";

const Whoops404 = () => {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
};

export default Whoops404