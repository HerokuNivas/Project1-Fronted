import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import "../css/alertTitleVersion.css"

export default function VersionReleases(props) {

    const features = ["You can generate inverted index file 🤗🤗.", "You can get all the files in which word is present 😎😎.", "You can navigate to the file containing the word with one click🥳🥳.", "Hurrah! Now we can track the already generated inverted index files in your repository 😃😃."]

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
    <Stack sx={{ width: props.open===false?"300px":"180px" }} spacing={2} >
      <Alert severity="info">
        {props.open === false && <p style={{marginLeft: "200px"}}><CloseIcon onClick={()=>(props.setOpen(true))} style={{color: "red"}}/></p>}
        <AlertTitle><span className="alertTitleVersion" onClick={()=>(props.setOpen(false))}>What's New <QuestionMarkIcon color="#cce5ff" fontSize="small"/></span></AlertTitle>
            {props.open === false && features.map((item) => 
                <p>{item}</p>
            )}
            {props.open === false && <p onClick={()=>props.setDontShow(false)} style={{marginLeft: "40px", textDecoration: "underline"}}>Don't show this again.</p>}
      </Alert>
    </Stack></div>
  );
}
