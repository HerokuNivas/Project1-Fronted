import React, { useState } from "react";
import Transition from '../components/transition'
import Loading from '../components/loading';
import HomeRoute from '../components/HomeRoute';

function Homeroute(){
    const [transitionPage, setTransitionPage] = useState(true);
    setTimeout(function(){
        window.location = "http://localhost:3000/home"
        setTransitionPage(false);
    }, 1000)

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