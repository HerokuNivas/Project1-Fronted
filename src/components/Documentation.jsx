import React from "react";
import Navbar2 from "./Navbar2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../css/Documentation.css';
import { Link } from "react-router-dom";
import ApiDocumentation from "../documentations/apiDocumentation";

function Documentation(){
    return(
        <div>
            <Navbar2/>
            <div className="arrowBackIconDoc">
               <Link to="/home"><ArrowBackIcon style={{color: "#16cdfa", marginTop: "10px", marginLeft: "18px"}}/></Link>
            </div>
            <div className="gettingStarted">
                <h5 style={{color: "black"}}>To know what is Inverted Index of a file click <a style={{color: "black"}} href="https://www.geeksforgeeks.org/inverted-index/"><span className="firstLink" style={{fontWeight: "bold"}}>here</span></a> </h5>
            </div>
            <div id="apiDocumentation">
                <ApiDocumentation/>
            </div>
            <div id="repoDocumentation">
                This is for repo
            </div>
            <div id="outputDocumentation">
                This is for output
            </div>
        </div>

    )
}

export default Documentation;