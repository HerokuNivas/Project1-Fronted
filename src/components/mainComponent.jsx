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
import ReactLoading from 'react-loading';
import SuccessAlert from "../Errorandsuccess/success.tsx";
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import ErrorAlert1 from "../Errorandsuccess/error2.tsx";

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
  const [loading, setLoading] = useState(false);
  const [dataIs, setData] = useState("");
  const [successCode, setSuccessCode] = useState(false);
  const [openPopUp, setopenPopUp] = useState(false);
  const [apiCallIs, setapiCall] = useState("");

  async function submitFun() {
    if (
      apiKey === "" ||
      userName === "" ||
      repoName === "" ||
      fileName === ""
    ) {
      if (apiKey === "") setapiError(true);
      if (userName === "") setuserError(true);
      if (repoName === "") setrepoError(true);
      if (fileName === "") setfileError(true);
    } else {
      setopenPopUp(false);
      setLoading(true);
      const apiCall =
        "https://inverted-index-generator.herokuapp.com/?apikey=" +
        apiKey +
        "&userName=" +
        userName +
        "&repoName=" +
        repoName +
        "&fileName=" +
        fileName;
        setapiCall('https://github.com/'+userName+'/'+repoName+'/blob/main/'+fileName+'.txt')
          const value = await axios({
            method: "GET",
            url: apiCall
          })
          const val = await value.data;
          setData(val.text);
          setSuccessCode(val.successCode);
          const _ = await setData(val.text);
          const __ = await setSuccessCode(val.successCode);
        
        setLoading(false);
        setopenPopUp(true);
    }
  }

  

  return (
    <div className="mainComponent">
      <h3 className="detailHeading">
        Fill the details to generate inverted index
      </h3>
      <div className="mainComponentAPIKey col-lg-6 col-md-12 col-sm-12">
        <h6>API key of GITHUB <KeyIcon style={{color: "#16cdfa"}}/></h6>
        <TextField
          required
          className="apiGit"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setapiError(false);
            setopenPopUp(false);
            setapiKey(e.target.value);
          }}
        />
        <div className="helpIcon">
          <HelpIcon
            onClick={() => setpopup1(true)}
            titleAccess="Why API Key?"
            style={{ marginLeft: 8, color: "#16cdfa"}}
          />
        </div>
        {popup1 && <PopUp1 close={setpopup1} />}
        {apiError && <ErrorAlert />}
      </div>
      <div className="mainComponentUserName col-lg-6 col-md-12 col-sm-12">
        <h6>Username of GITHUB <PersonIcon style={{color: "#16cdfa"}}/></h6>
        <TextField
          required
          className="apiUserName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setuserError(false);
            setopenPopUp(false);
            setUserName(e.target.value);
          }}
        />
        {userError && <ErrorAlert />}
      </div>

      <div
        className="mainComponentRepoName col-lg-6 col-md-12 col-sm-12"
        style={{ marginTop: "2.5rem" }}
      >
        <h6>
          GITHUB repository name <StorageIcon style={{ color: "#16cdfa" }} />
        </h6>
        <TextField
          required
          className="gitRepoName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setrepoError(false);
            setopenPopUp(false);
            setrepoName(e.target.value);
          }}
        />
        {repoError && <ErrorAlert />}
      </div>

      <div className="mainComponentFileName col-lg-6 col-md-12 col-sm-12">
        <h6>
          File Name <CreateIcon style={{ color: "#16cdfa" }} />
        </h6>
        <TextField
          required
          className="gitFileName"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setfileError(false);
            setopenPopUp(false);
            setfileName(e.target.value);
          }}
          helperText={
            fileError ? "" : "File name to set for generated inverted index"
          }
        />
        {fileError && <ErrorAlert />}
      </div>

      <div className="mainComponentSubmitButton">
        <Button
          style={{
            backgroundColor: "#16cdfa",
            marginTop: "1.8rem",
            marginLeft: "1%",
          }}
          type="submit"
          endIcon=<ArrowUpwardIcon style={{ color: "white" }} />
          onClick={submitFun}
          disabled={loading?true:false}
        >
          <span className="mainComponentSubmitText">Submit</span>
        </Button>
      </div>
      {loading &&
      <div style={{textAlign: "center", color:"#16cdfa", fontWeight: "bold"}}>

      <div style={{textAlign: "center", justifyItems: "center", marginLeft: "48%", marginTop: "20px", marginBottom:"10px", marginRight: "48%"}}>
        <ReactLoading type="spin" color="#16cdfa" height={30} width={30}/>
        
      </div>

      Generating Index File...

      </div>}
      

      {openPopUp && successCode && <SuccessAlert link={apiCallIs} popup={setopenPopUp}/>}
      {openPopUp && !successCode && <ErrorAlert1 text={dataIs} popup={setopenPopUp}/>}
      
    </div>
  );
}

export default MainComponent;
