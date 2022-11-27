import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';

export default function VersionReleases(props) {

    const features = ["You can generate inverted index file 🤗🤗.", "You can get all the files in which word is present 😎😎.", "You can navigate to the file with one click containing the word 🥳🥳."]

  return (
    <Stack sx={{ width: props.open===false?"40%":"15%" }} spacing={2} style={{marginLeft:props.open === false?"32%":"42%"}}>
      <Alert severity="info">
        {props.open === false && <p style={{position: "absolute", right: "29%"}}><CloseIcon onClick={()=>(props.setOpen(true))} style={{color: "red"}}/></p>}
        <AlertTitle><span onClick={()=>(props.setOpen(false))}>What's New <QuestionMarkIcon color="#cce5ff" fontSize="small"/></span></AlertTitle>
            {props.open === false && features.map((item) => 
                <p>{item}</p>
            )}
            {props.open === false && <p onClick={()=>props.setDontShow(false)} style={{marginLeft: "30%", textDecoration: "underline"}}>Don't show this again.</p>}
      </Alert>
    </Stack>
  );
}
