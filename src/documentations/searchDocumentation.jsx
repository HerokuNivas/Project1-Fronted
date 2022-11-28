import React from 'react';
import '../css/searchDocumentation.css';
import image1 from '../images/searchImage1.png';
import image2 from '../images/searchImage2.png';

export default function SearchDocumenation(){
    return(
        <div className="searchDoc">
           <div>
                <h3 style={{color: "#2699c7", marginBottom: "1.8rem"}}>Search Documenatation</h3>
            </div> 
            <div>
                <p>1. You need to enter the link of the Inverted Index File.</p>
                <p>2. Enter the word which you need to search.</p>
                <p>3. Enter the GITHUB ApiKey of your account.</p>
                <p><span style={{color: "red", fontWeight: "bold", marginLeft: "20px"}}>Note </span>: Here, you can use GITHUB ApiKey having only read access.</p>
                <p>Instead of typing the details second time, if you generated the index file already then you can click the checkbox to use the same details here.</p>
                <p>4. You can select the number of words to be displayed per page.</p>
                <p style={{marginLeft:"20px"}}>If the more is clicked then you will be redirected to a page having all the matching results.</p>
                <p>5. Per word only 4 documents are shown (if the number of documents in which the word is present is less than 4 then only those are shown). </p>
                <p style={{marginLeft: "20px"}}>To, see the complete list of documents you can click show more option.</p>
                <p style={{marginLeft: "20px", marginTop: "20px"}}>Click show more to get all documents.</p>
                <div><img src={image1} width={"80%"} height={"80%"}/></div>
                <p style={{marginLeft: "20px", marginTop: "20px"}}>Click show less to get original.</p>
                <div><img src={image2} width={"80%"} height={"80%"}/></div>
            </div>
        </div>
        )
}