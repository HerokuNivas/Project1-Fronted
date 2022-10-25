import React from "react";
import Navbar2 from "./Navbar2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../css/Documentation.css';
import { Link } from "react-router-dom";

function Documentation(){
    return(
        <div>
            <Navbar2/>
            <div className="arrowBackIconDoc">
               <Link to="/home"><ArrowBackIcon style={{color: "#16cdfa", marginTop: "10px", marginLeft: "18px"}}/></Link>
            </div>
            <div id="apiDocumentation">
                This is for api
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