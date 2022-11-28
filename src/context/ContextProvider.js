import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentLink, setCurrentLink] = useState("");
  const [currentApiKey, setCurrentApiKey] = useState("");
  const [currentSuccessCode, setCurrentSuccessCode] = useState(false);
  const [currentObject, setCurrentObject] = useState({ Initial: "Great" });
  const [currentWord, setCurrentWord] = useState("");
  const [link, setLink] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [currentSearchWord, setCurrentSearchWord] = useState("");
  const [success, setSuccess] = useState(false);
  const [doneSuccess, setDoneSuccess] = useState("");
  const [change, setChange] = useState(false);
  const [apiKey1, setapiKey] = useState("");
  const [userName, setUserName] = useState("");
  const [repoName, setrepoName] = useState("");
  const [fileName, setfileName] = useState("");
  const [radioButton, setRadioButton] = useState("Index");
  const [issue, setIssue] = useState("API Key Issue");
  const [others, setOthers] = useState(false);
  const [otherTitle, setOtherTitle] = useState("");
  const [description, setDescription] = useState("");
  const [verifyChange, setVerifyChange] = useState(false);
  const [backButton, setbackButton] = useState(false);



  return (
    <StateContext.Provider
      value={{
        currentLink,
        setCurrentLink,
        currentApiKey,
        setCurrentApiKey,
        currentSuccessCode,
        setCurrentSuccessCode,
        currentObject,
        setCurrentObject,
        currentWord,
        setCurrentWord,
        link,
        setLink,
        apiKey,
        setApiKey,
        currentSearchWord,
        setCurrentSearchWord,
        success,
        setSuccess,
        doneSuccess,
        setDoneSuccess,
        change,
        setChange,
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
        issue,
        setIssue,
        others,
        setOthers,
        otherTitle,
        setOtherTitle,
        description,
        setDescription,
        verifyChange,
        setVerifyChange,
        backButton,
        setbackButton
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
