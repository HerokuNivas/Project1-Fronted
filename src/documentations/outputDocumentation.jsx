import React from "react";
import '../css/outputDocumentation.css';

function OutputDocumentation(){
    return(
        <div className="outputdoc">
            <h3 style={{color: "#16cdfa", marginBottom: "1.8rem", marginTop:"15px"}}>Output Documentation</h3>   
            <p>Output file can be of two types</p>
            <p style={{color: "#16cdfa"}}>METHOD-1</p>
            <p>If the <span style={{fontWeight: "bold", color: "#16cdfa"}}>"To use index of file"</span> radio button is selected then the output text file will be generated based on the index number of the file in the order in which they appear in repository.</p>
            <p style={{fontWeight: "bold"}}>Example</p>
            <p>If there are two documents</p>
            <p>DOC1 : "Sun rises in the east."</p>
            <p>DOC2 : "Sun sets in the west."</p>
            <p>If we considered words <span style={{fontWeight: "bolder"}}>"east"</span> and <span style={{fontWeight: "bolder"}}>"west"</span></p>
            <p>For word <span style={{fontWeight: "bolder"}}>"east"</span></p>
            <p>Output file contains <span style={{color: "#16cdfa", fontWeight: "bold"}}>"east : 1"</span></p>
            <p>Similarly, for word <span style={{fontWeight: "bolder"}}>"west"</span></p>
            <p>Output file contains <span style={{color: "#16cdfa", fontWeight: "bold"}}>"west : 2"</span></p>
            <p>Here the values <span style={{fontWeight: "bold"}}>1 and 2</span> reflect the relative order of the files in which they appear.</p>
            <p style={{color: "#16cdfa", marginTop: "1.8rem"}}>METHOD-2</p>
            <p>If the <span style={{fontWeight: "bold", color: "#16cdfa"}}>"To use file name"</span> radio button is selected then in the output text file will be generated based on the file name.</p>
            <p>Considering the same Example which we seen above</p>
            <p>In this case output will be</p>
            <p>For word <span style={{fontWeight: "bolder"}}>"east"</span></p>
            <p>Output file contains <span style={{color: "#16cdfa", fontWeight: "bold"}}>"east : DOC1"</span></p>
            <p>Similarly, for word <span style={{fontWeight: "bolder"}}>"west"</span></p>
            <p>Output file contains <span style={{color: "#16cdfa", fontWeight: "bold"}}>"west : DOC2"</span></p>
            <p>Here <span style={{fontWeight: "bold"}}>DOC1 and DOC2</span> reflect the file names.</p>
        </div>
    )
}

export default OutputDocumentation;