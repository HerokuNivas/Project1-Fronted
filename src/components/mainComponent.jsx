import React from "react";
import { useState } from "react";
import "../css/mainComponent.css";
import TextField from "@mui/material/TextField";
import HelpIcon from "@mui/icons-material/Help";
import PopUp1 from "./PopUp1";
import StorageIcon from "@mui/icons-material/Storage";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ErrorAlert from "../Errorandsuccess/error.tsx";
import axios from "axios";

function MainComponent() {
  const [popup1, setpopup1] = useState(false);
  const [apiKey, setapiKey] = useState("");
  const [userName, setUserName] = useState("");
  const [repoName, setrepoName] = useState("");
  const [fileName, setfileName] = useState("");
  const [apiError, setapiError] = useState(false);
  const [userError, setuserError] = useState(false);
  const [repoError, setrepoError] = useState(false);
  const [fileError, setfileError] = useState(false);
  const [success, setSuccess] = useState("");

  function submitFun() {
    if (
      apiKey === "" ||
      userName === "" ||
      repoName === "" ||
      fileName === ""
    ) {
      if(apiKey === "")
        setapiError(true);
      if(userName === "")
        setuserError(true);
      if(repoName === "")
        setrepoError(true);
      if(fileName === "")
        setfileError(true);
    }

    else{
      const apiCall = "https://inverted-index-generator.herokuapp.com/?apikey"+apiKey+"&userName"+userName+"&repoName"+repoName+"&fileName"+fileName;
      axios.get(apiCall).then((response)=>console.log(response));
    }
  }

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
          onChange={(e) => {
          setapiError(false);
          setapiKey(e.target.value)
          }}
        />
        <div className="helpIcon">
          <HelpIcon
            onClick={() => setpopup1(true)}
            titleAccess="Why API Key?"
            style={{ marginLeft: 8 }}
          />
        </div>
        {popup1 && <PopUp1 close={setpopup1} />}
        {apiError && <ErrorAlert/>}
      </div>
      <div className="mainComponentUserName col-lg-6 col-md-12 col-sm-12">
        <h6>Username of GITHUB👤</h6>
        <TextField
          required
          className="apiUserName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
          setuserError(false);
          setUserName(e.target.value)}}
        />
        {userError && <ErrorAlert/>}
      </div>

      <div
        className="mainComponentRepoName col-lg-6 col-md-12 col-sm-12"
        style={{ marginTop: "2.5rem" }}
      >
        <h6>
          GITHUB repository name <StorageIcon style={{ color: "#809398" }} />
        </h6>
        <TextField
          required
          className="gitRepoName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
          setrepoError(false)
          setrepoName(e.target.value)}}
        />
        {repoError && <ErrorAlert/>}
      </div>

      <div className="mainComponentFileName col-lg-6 col-md-12 col-sm-12">
        <h6>
          File Name <CreateIcon style={{ color: "blue" }} />
        </h6>
        <TextField
          required
          className="gitFileName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
          setfileError(false);
          setfileName(e.target.value)}
          }
          helperText={fileError?"":"File name to set for generated inverted index"}
        />
        {fileError && <ErrorAlert/>}
      </div>

      <div className="mainComponentSubmitButton">
        <Button
          style={{ backgroundColor: "#16cdfa", marginTop: "1.8rem", marginLeft: "1%" }}
          type="submit"
          endIcon=<ArrowUpwardIcon style={{ color: "white" }} />
          onClick={submitFun}
        >
          <span className="mainComponentSubmitText">Submit</span>
        </Button>
      </div>
    </div>
  );
}

export default MainComponent;
