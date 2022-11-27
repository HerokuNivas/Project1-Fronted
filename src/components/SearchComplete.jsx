import React from "react";
import SearchItem from "./SearchItem";
import { useStateContext } from "../context/ContextProvider";

export default function SearchComplete(){
    const {currentObject, currentWord} = useStateContext();
    return(
        <div style={{margin: "25px", border: "2px solid #16cdfa", padding:"25px"}}>
            <div>
                <h1>Output File</h1>
            </div>
            {Object.entries(currentObject.Final.Files).map(([key, value]) => (
            <SearchItem
              keyIs={key}
              valueIs={value}
              wordIs={currentWord}
              objectIs={currentObject}
            />
          ))}
        </div>
        
        )
}