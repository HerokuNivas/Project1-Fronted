import React from "react";
import "../css/repoDocumentation.css";
import Image1 from '../images/repoImage1.png';
import Image2 from '../images/repoImage2.png';

function RepoDocumentation(){
    return(
        <div className='repodoc'>
            <h3 style={{color: "#16cdfa", marginTop: "2.5rem", marginBottom: "1.8rem"}}>Repository Documentation</h3>
            <p>1. Create an Empty Respository in GITHUB.</p>
            <p style={{marginLeft: "25px"}}>Click <a className="repoLink" style={{color:"#16cdfa"}} href="https://github.com/new">here </a>to create repository.</p>
            <p>2. After the Repository creation, add all the text files to the Repository for which Inverted Index is to be generated.</p>
            <p style={{marginLeft:"25px"}}>Files can be added in two ways.</p>
            <h6 style={{marginLeft:"25px", color:"#16cdfa"}}>METHOD-1</h6>
            <p style={{marginLeft: "30px"}}>Select <span style={{fontWeight: "bold"}}>Upload an Existing File</span> and add all the files from your folder.</p>
            <div style={{marginLeft: "20px"}}><img src={Image1} width={"80%"} height={"80%"}/></div>
            <h6 style={{marginLeft:"25px", color:"#16cdfa", marginTop: "25px"}}>METHOD-2</h6>
            <ol>
                <li>
                    Make sure that you installed <span style={{fontWeight: "bolder"}}>git</span>.
                    <p>Click <a className="repoLink" style={{color:"#16cdfa"}} href="https://git-scm.com/downloads">here </a>to install git.</p>
                </li>
                <li>
                    Mention the below steps.
                </li>
            </ol>
            <div style={{marginLeft: "20px"}}><img src={Image2} width={"80%"} height={"80%"}/></div>
            <p style={{marginLeft:"25px", marginTop:"20px"}}>Add the command <span style={{color: "#16cdfa", fontWeight: "bold"}}>"git add ." </span>before commiting, so to add all the files to the repository.</p>
        </div>    
    )
}

export default RepoDocumentation;