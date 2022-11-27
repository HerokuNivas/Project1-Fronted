import React from "react";
import SearchItem from "./SearchItem";
import { useStateContext } from "../context/ContextProvider";
import BackToTop from "react-back-to-top-button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function SearchComplete() {
  const { currentObject, currentWord } = useStateContext();
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
            border: "2px solid #16cdfa",
            padding: "25px",
          }}
        >
          <div className="arrowBackIconDoc">
            <Link to="/home">
              <ArrowBackIcon
                style={{
                  color: "#16cdfa",
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
