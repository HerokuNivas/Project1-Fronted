import React, { useContext } from "react";
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
import ReactLoading from "react-loading";
import SuccessAlert from "../Errorandsuccess/success.tsx";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import ErrorAlert1 from "../Errorandsuccess/error2.tsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import VersionReleases from "../Errorandsuccess/versionRelease";
import InputAdornment from "@mui/material/InputAdornment";
import { ContentCutOutlined, VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import SelectInput from "@mui/material/Select/SelectInput";
import ConfirmationAlert from "./ConfirmationAlert";

function MainComponent() {
  const {
    setCurrentLink,
    setCurrentApiKey,
    setCurrentSuccessCode,
    apiKey1,
    setapiKey,
    userName,
    setUserName,
    repoName,
    setrepoName,
    fileName,
    setfileName,
    radioButton,
    setRadioButton,
  } = useStateContext();
  const [open, setOpen] = useState(true);
  const [popup1, setpopup1] = useState(false);
  const [apiError, setapiError] = useState(false);
  const [userError, setuserError] = useState(false);
  const [repoError, setrepoError] = useState(false);
  const [fileError, setfileError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataIs, setData] = useState("");
  const [successCode, setSuccessCode] = useState(false);
  const [openPopUp, setopenPopUp] = useState(false);
  const [apiCallIs, setapiCall] = useState("");
  const [dontShow, setDontShow] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  const [dialog, setDialog] = useState(false);

  async function submitFun() {
    if (
      apiKey1 === "" ||
      userName === "" ||
      repoName === "" ||
      fileName === ""
    ) {
      if (apiKey1 === "") setapiError(true);
      if (userName === "") setuserError(true);
      if (repoName === "") setrepoError(true);
      if (fileName === "") setfileError(true);
    } else {
      setopenPopUp(false);
      setLoading(true);
      const initialApiCall =
        "https://vsainivas.pythonanywhere.com/check/?apiKey=" +
        apiKey1 +
        "&userName=" +
        userName +
        "&repoName=" +
        repoName;
      const valueInitial = await axios({
        method: "GET",
        url: initialApiCall,
      });
      const valueInitial1 = await valueInitial.data;
      if (valueInitial1.listIs.length !== 0) {
        setDialog(true);
      }
       else{
        const apiCall =
          "https://vsainivas.pythonanywhere.com/?apikey=" +
          apiKey1 +
          "&userName=" +
          userName +
          "&repoName=" +
          repoName +
          "&fileName=" +
          fileName +
          "&type=" +
          radioButton;
        setapiCall(
          "https://github.com/" +
            userName +
            "/" +
            repoName +
            "/blob/main/" +
            fileName +
            "-InvertedIndex.txt"
        );
        const value = await axios({
          method: "GET",
          url: apiCall,
        });
        const val = await value.data;
        setData(val.text);
        setSuccessCode(val.successCode);
        await setData(val.text);
        await setSuccessCode(val.successCode);
        await setCurrentSuccessCode(val.successCode);
        await setCurrentApiKey(apiKey1);
        await setCurrentLink(
          "https://github.com/" +
            userName +
            "/" +
            repoName +
            "/blob/main/" +
            fileName +
            "-InvertedIndex.txt"
        );
        setopenPopUp(true);
      }
      setLoading(false);
    }
  }

  return (
    <div className="mainComponent">
      {dontShow && (
        <VersionReleases
          open={open}
          setOpen={setOpen}
          dontShow={dontShow}
          setDontShow={setDontShow}
        />
      )}
      <div>
        <h3 className="detailHeading" style={{ marginTop: "25px" }}>
          Fill the details to generate inverted index file
        </h3>
        <div className="mainComponentAPIKey col-lg-6 col-md-12 col-sm-12">
          <h6>
            API key of GITHUB <KeyIcon style={{ color: "#2699c7" }} />
          </h6>
          <TextField
            required
            className="apiGit"
            id="outlined-required"
            label="Required"
            value={apiKey1}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!showApiKey && (
                    <Visibility onClick={() => setShowApiKey(true)} />
                  )}
                  {showApiKey && (
                    <VisibilityOff onClick={() => setShowApiKey(false)} />
                  )}
                </InputAdornment>
              ),
            }}
            style={{ width: 300, marginTop: 10 }}
            onChange={(e) => {
              setapiError(false);
              setopenPopUp(false);
              setapiKey(e.target.value);
            }}
            type={showApiKey === true ? "text" : "password"}
          />
          <div className="helpIcon">
            <HelpIcon
              onClick={() => setpopup1(true)}
              titleAccess="Why API Key?"
              style={{ marginLeft: 8, color: "#2699c7" }}
            />
          </div>
          {popup1 && <PopUp1 close={setpopup1} />}
          {apiError && <ErrorAlert />}
        </div>
        <div className="mainComponentUserName col-lg-6 col-md-12 col-sm-12">
          <h6>
            Username of GITHUB <PersonIcon style={{ color: "#2699c7" }} />
          </h6>
          <TextField
            required
            className="apiUserName"
            id="outlined-required"
            label="Required"
            value={userName}
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
            GITHUB repository name <StorageIcon style={{ color: "#2699c7" }} />
          </h6>
          <TextField
            required
            className="gitRepoName"
            id="outlined-required"
            value={repoName}
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
            File Name <CreateIcon style={{ color: "#2699c7" }} />
          </h6>
          <TextField
            required
            value={fileName}
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
              fileError ? "" : "File name which is to be set for inverted index"
            }
          />
          {fileError && <ErrorAlert />}
        </div>

        <div style={{ marginLeft: "18px", marginTop: "1.8rem" }}>
          <p>
            Select the output type{" "}
            <Link to="/documentation/outputDocumentation">
              <HelpIcon
                style={{
                  marginLeft: 8,
                  color: "#2699c7",
                  display: "inline-block",
                }}
              />
            </Link>
          </p>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="output"
              name="output"
              defaultValue="Index"
              value={radioButton}
              onChange={(e) => {
                setRadioButton(e.target.value);
              }}
              row
            >
              <FormControlLabel
                value="Index"
                control={<Radio style={{ color: "#2699c7" }} />}
                label="To use index of file"
              />
              <FormControlLabel
                value="FileName"
                control={<Radio style={{ color: "#2699c7" }} />}
                label="To use file name"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mainComponentSubmitButton">
          <Button
            style={{
              backgroundColor: "#2699c7",
              marginTop: "1.8rem",
              marginLeft: "1%",
            }}
            type="submit"
            endIcon=<ArrowUpwardIcon style={{ color: "white" }} />
            onClick={submitFun}
            disabled={loading ? true : false}
          >
            <span className="mainComponentSubmitText">Submit</span>
          </Button>
        </div>
      </div>
      {dialog && (
        <ConfirmationAlert
          apiKey={apiKey1}
          userName={userName}
          repoName={repoName}
          setDialog={setDialog}
          fileName={fileName}
          radioButton={radioButton}
          setapiCall={setapiCall}
          setData={setData}
          setSuccessCode={setSuccessCode}
          setCurrentSuccessCode={setCurrentSuccessCode}
          setCurrentApiKey={setCurrentApiKey}
          setCurrentLink={setCurrentLink}
          setopenPopUp={setopenPopUp}
          setLoading={setLoading}
        />
      )}
      {!loading && !openPopUp && (
        <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
          <p>
            <span style={{ fontWeight: "bold", color: "#2699c7" }}>Note </span>:
            Make sure that there are only text files and size of the files in
            repository is less than{" "}
            <span style={{ fontWeight: "bold" }}>3MB</span>.
          </p>
        </div>
      )}
      {loading && (
        <div
          style={{ textAlign: "center", color: "#2699c7", fontWeight: "bold" }}
        >
          <div
            style={{
              textAlign: "center",
              justifyItems: "center",
              marginLeft: "48%",
              marginTop: "20px",
              marginBottom: "10px",
              marginRight: "48%",
            }}
          >
            <ReactLoading type="spin" color="#2699c7" height={30} width={30} />
          </div>
          Generating Index File...
        </div>
      )}

      {openPopUp && successCode && (
        <SuccessAlert link={apiCallIs} popup={setopenPopUp} />
      )}
      {openPopUp && !successCode && (
        <ErrorAlert1 text={dataIs} popup={setopenPopUp} />
      )}
    </div>
  );
}

export default MainComponent;
