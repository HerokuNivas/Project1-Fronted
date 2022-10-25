import React from "react";
import '../css/apiDocumentation.css';
import image1 from '../images/apiImage1.png';
import image2 from '../images/apiImage2.png';
import image3 from '../images/apiImage3.png';
function ApiDocumentation(){
    return(
        <div className="apidoc">
            <h3 style={{color: "#16cdfa", marginBottom: "1.8rem"}}>API Documentation</h3>
            <p>1. Create a GITHUB account if you don't have one.</p>
            <p style={{marginLeft: "25px"}}>Click <a className="apiLink" style={{color:"#16cdfa"}} href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">here </a>to create a GITHUB account.</p>
            <p>2. Click <a className="apiLink" href="https://github.com/settings/tokens" style={{color: "#16cdfa"}}>here </a>to generate an API Key.</p>
            <p>3. Click on Geneate New Token and then Generate new token (classic). </p>
            <p>4. Expiration can be set as per your wish but make sure that the API key is active while you are using it to generate Inverted Index File.  </p>
            <p style={{marginLeft: "25px"}}><span style={{color: "red", fontWeight:"bold"}}>Note</span> : While generating token make sure that the first scope repo is checked. Without this the generated index file cannot be written back to your repository.</p>
            <div><img src={image1} width={"60%"} height={"60%"}/></div>
            <div style={{marginTop: "1.8rem"}} ><img src={image2} width={"30%"} height={"30%"}/></div>
            <div style={{marginTop: "1.8rem"}} ><img src={image3} width={"60%"} height={"60%"}/></div>
        </div>
    )
}

export default ApiDocumentation;