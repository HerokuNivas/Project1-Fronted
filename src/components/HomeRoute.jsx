import React from "react";
import Navbar from "./Navbar";
import '../css/HomeRoute.css';
import Contact from "./Contact";
import Footer from "./Footer";
import ComponentBorder from "./ComponentBorder";
import MainComponent from "./mainComponent";

function HomeRoute(){
    return(
        <div>
            <Navbar/>
            <MainComponent/>
            <div style={{marginTop: "5rem", marginBottom: "5rem"}}>
                <ComponentBorder/>
            </div>
            <div id = "contact"><Contact/></div>
            <Footer/>
        </div>
           
    )
}

export default HomeRoute;