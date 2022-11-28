import React from "react";
import Navbar2 from "./Navbar2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../css/Documentation.css';
import { Link } from "react-router-dom";
import ApiDocumentation from "../documentations/apiDocumentation";
import ComponentBorder from "./ComponentBorder";
import RepoDocumentation from "../documentations/repoDocumentation";
import OutputDocumentation from "../documentations/outputDocumentation";
import Footer from "./Footer";
import BackToTop from "react-back-to-top-button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SearchDocumentation from "../documentations/searchDocumentation";

function Documentation(){
    return(
        <div>
        <BackToTop
        showAt={0}
        speed={50}
        easing="easeInOutQuint"
      >
        <span><ArrowUpwardIcon style={{color: "black", fontWeight:"bolder"}}/></span>
      </BackToTop>
            <Navbar2/>
            <div className="arrowBackIconDoc">
               <Link to="/home"><ArrowBackIcon style={{color: "#2699c7", marginTop: "10px", marginLeft: "18px"}}/></Link>
            </div>
            <div className="gettingStarted">
                <h5 style={{color: "black"}}>To know what is Inverted Index click <a style={{color: "black"}} href="https://www.geeksforgeeks.org/inverted-index/" rel="noopener noreffer" target="_blank"><span className="firstLink" style={{fontWeight: "bold"}}>here</span></a> </h5>
            </div>
            <div id="apiDocumentation">
                <ApiDocumentation/>
            </div>
            <div style={{marginTop: "2.5rem"}}>
                <ComponentBorder/>
            </div>
            <div id="repoDocumentation">
                <RepoDocumentation/>
            </div>
            <div style={{marginTop: "2.5rem"}}>
                <ComponentBorder/>
            </div>
            <div id="searchDocumentation">
                <SearchDocumentation/>
            </div>
            <div style={{marginTop: "2.5rem"}}>
                <ComponentBorder/>
            </div>
            <div id="outputDocumentation" style={{marginBottom: "1.8rem"}}>
                <OutputDocumentation/>
            </div>
            
            <Footer/>
        </div>

    )
}

export default Documentation;