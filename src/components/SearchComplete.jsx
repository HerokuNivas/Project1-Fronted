import React from "react";
import SearchItem from "./SearchItem";
import { useStateContext } from "../context/ContextProvider";
import BackToTop from "react-back-to-top-button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SearchComplete() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { currentObject, currentWord, link, setLink, apiKey, setApiKey, setCurrentWord, setCurrentObject, setCurrentSearchWord, currentSearchWord, apiKey1, setapiKey, fileName, setfileName, repoName, setrepoName, userName, setUserName, radioButton, setRadioButton, issue, setIssue, otherTitle, setOtherTitle, description, setDescription, others, setOthers, setVerifyChange, setbackButton} = useStateContext();
  return (
    <div>
      <div>
        <BackToTop showAt={0} speed={50} easing="easeInOutQuint">
          <span>
            <ArrowUpwardIcon style={{ color: "black", fontWeight: "bolder" }} />
          </span>
        </BackToTop>

        <div
          style={{
            margin: "25px",
            border: "2px solid #2699c7",
            padding: "25px",
          }}
        >
          <div className="arrowBackIconDoc">
            <Link to="/home">
              <ArrowBackIcon onClick={() => {
                setLink(link)
                setApiKey(apiKey)
                setCurrentObject(currentObject)
                setCurrentWord(currentWord) 
                setCurrentSearchWord(currentSearchWord) 
                setUserName(userName)
                setfileName(fileName)
                setrepoName(repoName)
                setapiKey(apiKey1)
                setRadioButton(radioButton)
                setOthers(others)
                setOtherTitle(otherTitle)
                setIssue(issue)
                setDescription(description)
                setVerifyChange(false)
                setbackButton(true)
            }}
                style={{
                  color: "#2699c7",
                  marginTop: "10px",
                  marginLeft: "-10px",
                  marginBottom: "10px",
                }}
              />
            </Link>
          </div>
          <div>
            <h1>Output of all words</h1>
          </div>
          {Object.entries(currentObject.Final.Files).map(([key, value]) => (
            <SearchItem
              keyIs={key}
              valueIs={value}
              wordIs={currentWord}
              objectIs={currentObject}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
