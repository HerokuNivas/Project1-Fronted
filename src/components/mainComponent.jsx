import React from "react";
import { useState } from "react";
import "../css/mainComponent.css";
import TextField from "@mui/material/TextField";
import HelpIcon from "@mui/icons-material/Help";
import PopUp1 from "./PopUp1";

function MainComponent() {
    const [popup1, setpopup1] = useState(false);
    

  return (
    <div className="mainComponent">
      <h3 className="detailHeading">
        Fill the details to generate inverted index
      </h3>
      <div className="mainComponentAPIKey">
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
    </div>
  );
}

export default MainComponent;
