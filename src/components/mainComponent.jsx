import React from "react";
import { useState } from "react";
import "../css/mainComponent.css";
import TextField from "@mui/material/TextField";
import HelpIcon from "@mui/icons-material/Help";
import PopUp1 from "./PopUp1";
import StorageIcon from '@mui/icons-material/Storage';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function MainComponent() {
    const [popup1, setpopup1] = useState(false);
    

  return (
    <div className="mainComponent">
      <h3 className="detailHeading">
        Fill the details to generate inverted index
      </h3>
      <div className="mainComponentAPIKey col-lg-6 col-md-12 col-sm-12">
        <h6>API key of GITHUB🗝️</h6>
        <TextField
          required
          className="apiGit"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
        />
        <div className="helpIcon">
            <HelpIcon
            onClick={()=>setpopup1(true)}
              titleAccess="Why API Key?"
              style={{ marginLeft: 8 }}
            />
        </div>
        {popup1 && <PopUp1 close={setpopup1}/>}
      </div>
      <div className="mainComponentUserName col-lg-6 col-md-12 col-sm-12">
        <h6>Username of GITHUB👤</h6>
        <TextField
          required
          className="apiUserName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
        />
      </div>

      <div className="mainComponentRepoName col-lg-6 col-md-12 col-sm-12" style={{marginTop: "2.5rem"}}>
        <h6>GITHUB repository name <StorageIcon style={{color: "#809398"}}/></h6>
        <TextField
          required
          className="gitRepoName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
        />
      </div>

      <div className="mainComponentFileName col-lg-6 col-md-12 col-sm-12">
        <h6>File Name <CreateIcon style={{color: "blue"}}/></h6>
        <TextField
          required
          className="gitRepoName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          helperText="File name of generated inverted index"
        />
      </div>

      <div className="mainComponentSubmitButton">
        <Button style={{backgroundColor: "#16cdfa", marginLeft: "1%", marginTop: "1.8rem"}} type="submit" endIcon=<ArrowUpwardIcon style={{color: "white"}}/> ><span className="mainComponentSubmitText">Submit</span></Button>
      </div>


    </div>
  );
}

export default MainComponent;
