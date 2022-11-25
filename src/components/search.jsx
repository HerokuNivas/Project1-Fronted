import React from "react";
import "../css/search.css";
import TextField from "@mui/material/TextField";
import LinkIcon from "@mui/icons-material/Link";
import { TiSortAlphabetically } from "react-icons/ti";
import { useState } from "react";
import ErrorAlert from "../Errorandsuccess/error.tsx";
import { Button } from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ReactLoading from "react-loading";
import axios from "axios";

export default function Search() {
  const [link, setLink] = useState("");
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [wordError, setWordError] = useState(false);
  const [success, setSuccess] = useState(false);
  var object;

  async function performSearch() {
    setLoading(true);
    if (link === "" || word === "") {
      if (link === "") {
        setLinkError(true);
      }
      if (word === "") {
        setWordError(true);
      }
      setLoading(false);
      return;
    } else {
      const apiCall =
        "http://127.0.0.1:8000/search/?link=" +
        link +
        "&word=" +
        word;
      console.log(apiCall);  
      const data = await axios({
        method: "GET",
        url: apiCall
      }) 
      const val = await data.data;
      object = val;
      setLoading(false); 
    }
    setLoading(false);
  }

  return (
    <div className="searchPage">
      <h3 className="searchHeading">Search</h3>
      <div className="searchPageLink col-lg-6 col-md-12 col-sm-12">
        <h6>
          Link <LinkIcon style={{ color: "#16cdfa" }} />
        </h6>
        <TextField
          required
          className="searchPageLinkText"
          id="outlined-required"
          label="Required"
          style={{ width: 400, marginTop: 10 }}
          onChange={(e) => {
            setLinkError(false);
            setLink(e.target.value);
          }}
        />
        {linkError && <ErrorAlert />}
      </div>

      <div className="searchPageWord col-lg-6 col-md-12 col-sm-12">
        <h6>
          Word <TiSortAlphabetically style={{ color: "#16cdfa" }} size="25px" />
        </h6>
        <TextField
          required
          className="searchPageWordText"
          id="outlined-required"
          label="Required"
          style={{ width: 300, marginTop: 10 }}
          onChange={(e) => {
            setWordError(false);
            setWord(e.target.value);
          }}
        />
        {wordError && <ErrorAlert />}
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button
          style={{
            backgroundColor: "#16cdfa",
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

        {loading && (
          <div
            style={{
              textAlign: "center",
              color: "#16cdfa",
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
                color="#16cdfa"
                height={30}
                width={30}
              />
            </div>
            Searching...
          </div>
        )}


      </div>
    </div>
  );
}
