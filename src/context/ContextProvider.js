import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentLink, setCurrentLink] = useState("");
  const [currentApiKey, setCurrentApiKey] = useState("");
  const [currentSuccessCode, setCurrentSuccessCode] = useState(false);
  const [currentObject, setCurrentObject] = useState({ Initial: "Great" });
  const [currentWord, setCurrentWord] = useState("");

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
        setCurrentWord
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
