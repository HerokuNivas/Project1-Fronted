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
        </div>

    )
}

export default Documentation;