import React from 'react';
import '../css/searchDocumentation.css';

export default function SearchDocumenation(){
    return(
        <div className="searchDoc">
           <div>
                <h3 style={{color: "#16cdfa", marginBottom: "1.8rem"}}>Search Documenatation</h3>
            </div> 
            <div>
                <p>1. You need to enter the link of the Inverted Index File.</p>
                <p>2. Enter the word which you need to search.</p>
                <p>3. Enter the GITHUB ApiKey of your account.</p>
                <p><span style={{color: "red", fontWeight: "bold", marginLeft: "20px"}}>Note </span>: Here, you can use GITHUB ApiKey having only read access.</p>
                <p>Instead of typing the details second time, if you generated the index file already then you can click the checkbox to use the same details here.</p>
                <p>4. You can select the number of words which are matched to be displayed per page.</p>
                <p style={{marginLeft:"20px"}}>If the more is clicked then you will be redirected to a page having all the matching results.</p>
            </div>
        </div>
        )
}