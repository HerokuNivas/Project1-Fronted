import React, { useState } from "react";
import Transition from '../components/transition'
import Loading from '../components/loading';
import HomeRoute from '../components/HomeRoute';

function Homeroute(){
    const [transitionPage, setTransitionPage] = useState(true);
    setTimeout(function(){
        setTransitionPage(false);
    }, 2000)

    if(transitionPage){
        return(
            <div>
                <Transition/>,
                <Loading/>   
            </div>
        )
    }
    
    else{
        return(
            <HomeRoute/>    
        )
    }
}

export default Homeroute;