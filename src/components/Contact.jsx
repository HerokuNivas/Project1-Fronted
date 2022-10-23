import React from "react";
import { useState } from "react";
import "../css/contact.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Sendbutton from "./Sendbutton";

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
  const [issue, setIssue] = useState("API Key Issue");
  const [others, setOthers] = useState(false);
  const [otherTitle, setOtherTitle] = useState("");
  const [errorIs, setError] = useState(false);
  const [description, setDescription] = useState("");

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
            InputLabelProps={
              {
                style: {color: errorIs===false?"black":"red"},
              }
            }
            onChange={function(e) {
              setOtherTitle(e.target.value);
              if(e.target.value !== "") setError(false);
              else setError(true);
            }}
            
            placeholder="What is the issue?"
            helperText="Specify the issue which you are facing"
          />
        </div>
      )}

      <div id="issueDescribe">
        <TextField
          placeholder="Start typing here  .."
          label="Describe your issue here 🆎"
          multiline
          minRows={2}
          maxRows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "350px" }}
        />
      </div>

      <a
        onMouseEnter={addanchorProp}
        onMouseLeave={removeanchorProp}
        id="submitMail"
        href="mailto:invertedindexgenerator@gmail.com?subject=subjectIs&body=bodyIs"
      >
        {errorIs === false && <Sendbutton />}
      </a>
    </div>
  );
}

export default Contact;
