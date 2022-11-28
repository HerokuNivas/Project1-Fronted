import React from "react";
import {Grid} from "@mui/material";
import { useState } from "react";
import "../css/searchItem.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


export default function SearchItem(props){
    const [many, setMany] = useState(4);
    const [more, showMore] = useState(true);
    

    return(
        <div style={{marginTop: "25px", marginLeft: "15px", marginRight: "15px"}}>
              <p><span style={{color: "black"}}>{props.keyIs.substring(0, props.keyIs.toLowerCase().indexOf(props.wordIs.toLowerCase()))}</span><span style={{color: "black", textDecoration: "underline", fontWeight: "bold"}}>{props.keyIs.substring(props.keyIs.toLowerCase().indexOf(props.wordIs.toLowerCase()), props.keyIs.toLowerCase().indexOf(props.wordIs.toLowerCase()) + props.wordIs.length)}</span><span style={{color: "black"}}>{props.keyIs.substring(props.keyIs.toLowerCase().indexOf(props.wordIs.toLowerCase()) + props.wordIs.length)}</span></p>
              <Grid container spacing={2}>{props.valueIs.slice(0,many).map((item)=><Grid item xl={6} lg={2} md={4} sm={6} xs={6}><a id="searchItem" href={`https://github.com/${props.objectIs.Final.User}/${props.objectIs.Final.Repo}/blob/main/${item}`} target="_blank">{item}</a></Grid>)}</Grid>
              {props.valueIs.length>4 && <div style={{marginTop: "20px"}}>
                {more && <div><p style={{color: "white", backgroundColor: "#2699c7", display: "inline", padding: "5px", borderRadius: "5%"}} onClick={()=>{
                    setMany(props.valueIs.length)
                    showMore(false)
                }}>Show More <ExpandMoreIcon style={{color: "white"}}/></p></div>}

                {!more && <div><p style={{color: "white", backgroundColor: "#2699c7", display: "inline", padding: "5px", borderRadius: "5%"}} onClick={()=>{
                    setMany(4)
                    showMore(true)
                }}>Show Less <ExpandLessIcon style={{color: "white"}}/></p></div>}
                </div>}
            </div>)

}