import React from "react";
import "../css/search.css";
import TextField from "@mui/material/TextField";
import LinkIcon from "@mui/icons-material/Link";
import { TiSortAlphabetically } from "react-icons/ti";
import { useState } from "react";
import ErrorAlert from "../Errorandsuccess/error.tsx";
import ErrorAlert1 from "../Errorandsuccess/error2.tsx";
import { Button } from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ReactLoading from "react-loading";
import axios from "axios";
import KeyIcon from "@mui/icons-material/Key";
import SearchItem from "./SearchItem";
import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../context/ContextProvider";
import Checkbox from "@mui/material/Checkbox";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Grid } from "@mui/material"; 
import SearchComplete from "./SearchComplete";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";

export default function Search() {
  
  const [loading, setLoading] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [wordError, setWordError] = useState(false);
  const [change, setChange] = useState(false);
  const [popup, setPopUp] = useState(true);
  const { currentApiKey, currentLink, currentSuccessCode, currentWord, setCurrentWord, currentObject, setCurrentObject, link, setLink, apiKey, setApiKey, success, setSuccess, doneSuccess, setDoneSuccess, currentSearchWord, setCurrentSearchWord, verifyChange, setVerifyChange, backButton, setbackButton } = useStateContext();
  const [checked, setChecked] = useState(false);
  const [itemIs, setItemIs] = useState(3);
  const listIs = [3, 5, 10];
  const [showApiKey, setShowApiKey] = useState(false);

  

  function submitFunction() {
    if (checked === false) {
      setApiKey(currentApiKey);
      setLink(currentLink);
    } else {
      setApiKey("");
      setLink("");
    }
  }

  async function performSearch() {
    if (change === false && doneSuccess !== "Failure" && success) {
      setVerifyChange(true);
      return;
    }
    setSuccess(false);
    setLoading(true);
    if (link === "" || currentWord === "" || apiKey === "") {
      if (link === "") {
        setLinkError(true);
      }
      if (currentWord === "") {
        setWordError(true);
      }
      if (apiKey === "") {
        setApiError(true);
      }
      setLoading(false);
      setPopUp(true);
      return;
    } else {
      const apiCall =
        "https://vsainivas.pythonanywhere.com/search/?link=" +
        link +
        "&word=" +
        currentWord +
        "&apiKey=" +
        apiKey;
      const data = await axios({
        method: "GET",
        url: apiCall,
      });
      const val = await data.data;
      if (val.Success === "Success") {
        setPopUp(false);
        setDoneSuccess("Success");
        setCurrentSearchWord(currentWord);
      } else {
        setDoneSuccess("Failure");
        setPopUp(true);
      }
      setCurrentObject((object) => ({ ...object, Final: val }));
      setLoading(false);
      setSuccess(true);
      setChange(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    if(backButton)
      window.scrollTo({top: 750, behavior: 'smooth'})
    setbackButton(false)  
  }, [])

  return (
    
    <div className="searchPage">
      
      <h3 className="searchHeading">Search</h3>
      <div className="searchPageLink col-lg-6 col-md-12 col-sm-12">
        <h6>
          Link <LinkIcon style={{ color: "#2699c7" }} />
        </h6>
        <TextField
          required
          className="searchPageLinkText"
          id="outlined-required"
          label="Required"
          value={link}
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setLinkError(false);
            setLink(e.target.value);
            setVerifyChange(false);
            setChange(true);
          }}
        />
        {linkError && <ErrorAlert />}
      </div>

      <div className="searchPageWord col-lg-6 col-md-12 col-sm-12">
        <h6>
          Word <TiSortAlphabetically size="25px" style={{ color: "#2699c7" }} />
        </h6>
        <TextField
          required
          className="searchPageWordText"
          id="outlined-required"
          label="Required"
          value={currentWord}
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setWordError(false);
            setCurrentWord(e.target.value);
            setVerifyChange(false);
            setChange(true);
          }}
        />
        {wordError && <ErrorAlert />}
      </div>

      <div
        style={{ marginTop: "2rem" }}
        className="searchPageAPI col-lg-6 col-md-12 col-sm-12"
      >
        <h6>
          Api Key of GITHUB <KeyIcon style={{ color: "#2699c7" }} size="25px" />
        </h6>
        <TextField
          required
          className="searchPageWordText"
          id="outlined-required"
          label="Required"
          value={apiKey}
          style={{ width: 300, marginTop: 10 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!showApiKey && <Visibility onClick={()=>setShowApiKey(true)} />}
                {showApiKey && <VisibilityOff onClick={()=>setShowApiKey(false)}/>}
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setApiError(false);
            setApiKey(e.target.value);
            setVerifyChange(false);
            setChange(true);
          }}
          type={showApiKey===true?"text":"password"}
        />
        {apiError && <ErrorAlert />}
      </div>

      {currentSuccessCode && (
        <div
          style={{ marginTop: "20px", marginLeft: "15px", marginBottom: "0px" }}
        >
          <p>
            Check this box to use above details{" "}
            <Checkbox
              checked={checked}
              value={checked}
              onChange={(e) => {
                submitFunction();
                setChecked(e.target.checked);
              }}
              style={{ color: "#2699c7" }}
            />
          </p>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <Button
          style={{
            backgroundColor: "#2699c7",
            marginTop: "1.8rem",
            marginLeft: "1%",
          }}
          type="submit"
          endIcon=<FindInPageIcon style={{ color: "white" }} />
          disabled={loading ? true : false}
          onClick={performSearch}
        >
          <span className="searchSubmitText">Search</span>
        </Button>
          
          {verifyChange && (
              <div>
                <p style={{marginTop: "20px", marginBottom:"20px", marginLeft: "10px", color:"red"}}>Change atleast one input value before submitting again.</p>
              </div>
            )}
        {loading && (
          <div
            style={{
              textAlign: "center",
              color: "#2699c7",
              fontWeight: "bold",
            }}
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
              <ReactLoading
                type="spin"
                color="#2699c7"
                height={30}
                width={30}
              />
            </div>
            Searching...
          </div>
        )}

        {!success && <div style={{textAlign: "center", marginTop: "1.8rem", marginRight: "20px"}}><p><span style={{fontWeight: "bold", color: "#2699c7"}}>Note </span>: Make sure that the index file generated is recent (i.e., no changes are made to repository after generaing index file). Else you may end up with error or wrong results .</p></div>}

        {success && popup && doneSuccess === "Failure" && (
          <ErrorAlert1
            popup={setPopUp}
            text="Check the detils which you entered. Also make sure that you haven't deleted any text file from repository after generating index file. If done so regenerate the index file."
          />
        )}

        {success && doneSuccess === "Success"  && (
          <div>
            {itemIs !== "more" && <div style={{marginBottom: "45px"}}>
              <CloseIcon
                fontSize="medium"
                style={{ position: "absolute", right: "20px", color: "red" }}
                onClick={() => setSuccess(false)}
              />
              {Object.entries(currentObject.Final.Files).slice(0, itemIs).map(([key, value]) => (
                <SearchItem
                  keyIs={key}
                  valueIs={value}
                  wordIs={currentSearchWord}
                  objectIs={currentObject}
                />
              ))}
            </div>}

            {JSON.stringify(currentObject.Final.Files) === "{}" && itemIs !== "more" && (
              <div>
                <p
                  style={{
                    marginTop: "25px",
                    color: "red",
                    marginLeft: "10px",
                  }}
                >
                  No documents found with that word
                  <SentimentVeryDissatisfiedIcon />
                </p>
              </div>
            )}
            
            {JSON.stringify(currentObject.Final.Files) !== "{}" && <div
              style={{
                marginTop: "20px",
              }}
            >
              
              <p style={{color: "#2699c7", fontWeight: "bold", marginLeft: "36%"}}>Select the number of words to be displayed.</p>
              <div style={{marginTop: "20px"}}>
              <div style={{marginLeft: "46%"}}>
              <Grid container spacing={2}>
                {listIs.map((item) => (
                  <Grid item>
                    <p
                      onClick={() => {
                        setItemIs(item);
                      }}
                      style={{
                        fontWeight: item === itemIs ? "bold" : "normal",
                        textDecoration: item === itemIs ? "underline" : "",
                      }}
                    >
                      {item}
                    </p>
                  </Grid>
                ))}
                <Grid><div style={{marginTop: "50px", marginLeft: "-50px"}}><Link to="/result"><span title="Click this to get complete output" className="spanText1">more</span></Link></div></Grid>
              </Grid></div></div>
            </div>}
          </div>
        )}
      </div>
    </div>
  );
}
