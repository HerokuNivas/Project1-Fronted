import React from "react";
import { useState } from "react";
import "../css/contact.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Sendbutton from "./Sendbutton";
import ErrorAlert from "../Errorandsuccess/error.tsx";
import AbcIcon from '@mui/icons-material/Abc';
import InputAdornment from '@mui/material/InputAdornment';
import { useStateContext } from "../context/ContextProvider";

const issues = [
  {
    value: "API Key Issue",
    label: "API Issue?",
  },
  {
    value: "Improper Documentation",
    label: "Documentation?",
  },
  {
    value: "Suggestions",
    label: "Any Suggestion?",
  },
  {
    value: "Others",
    label: "Others?",
  },
];

function Contact() {
  const [errorIs, setError] = useState(false);
  const [displayError, setdisplayError] = useState(false);

  const {issue, setIssue, others, setOthers, otherTitle, setOtherTitle, description, setDescription} = useStateContext();

  

  function addanchorProp() {
    if (issue === "Others") {
      document.getElementById("submitMail").href = document
        .getElementById("submitMail")
        .href.replace("subjectIs", issue + " : " + otherTitle);
    } else
      document.getElementById("submitMail").href = document
        .getElementById("submitMail")
        .href.replace("subjectIs", issue);
    document.getElementById("submitMail").href = document
      .getElementById("submitMail")
      .href.replace("bodyIs", description);
  }

  function removeanchorProp() {
    document.getElementById("submitMail").href =
      "mailto:invertedindexgenerator@gmail.com?subject=subjectIs&body=bodyIs";
  }


  return (
    <div className="contactPage">
      <h3 className="contactHeading">Contact Us</h3>

      <TextField
        id="outlined-select-issue"
        select
        value={issue}
        onChange={function (e) {
          setIssue(e.target.value);
          if (e.target.value === "Others") setOthers(true);
          else setOthers(false);
          if (e.target.value === "Others") setError(true);
          else setError(false);
        }}
        helperText="Please select the issue you are facing"
      >
        {issues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {others && (
        <div className="othersInput">
          <TextField
            required
            id="outlined-required"
            label="Required"
            value={otherTitle}
            onChange={function(e) {
              setOtherTitle(e.target.value);
              setdisplayError(false);
              if(e.target.value !== "") setError(false);
              else setError(true);
            }}
            placeholder="What is the issue?"
            helperText="Specify the issue which you are facing"
          />
          {displayError && <ErrorAlert style={{widht: "100%"}}/>}
        </div>
      )}

      <div id="issueDescribe">
        <TextField
          placeholder="Start typing here  .."
          label="Describe your issue here"
          value={description}
          InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AbcIcon fontSize="large" style={{color: "#16cdfa"}}/>
            </InputAdornment>
          ),
        }}
          multiline
          minRows={2}
          maxRows={10}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>

      <a
        onMouseEnter={addanchorProp}
        onMouseLeave={removeanchorProp}
        id="submitMail"
        onClick={()=>{
          if(errorIs === true){
            document.getElementById("submitMail").href = "#contact"
            setdisplayError(true);
          }
            
        }}
        href="mailto:invertedindexgenerator@gmail.com?subject=subjectIs&body=bodyIs"
      >
        <Sendbutton/>
      </a>
    </div>
  );
}

export default Contact;
