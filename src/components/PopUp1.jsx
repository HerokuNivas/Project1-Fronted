import Popup from "reactjs-popup";
import React from "react";
import "../css/PopUp1.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../functions/windowWidth";

function PopUp1(props) {
  const { height, width } = useWindowDimensions();
  const [ml, setml] = useState("25%");
  const [mt, setmt] = useState("10rem");
  const [mr, setmr] = useState("1%");
  const closeModel = () => {
    props.close(false);
  };

  function callNow(){
    if (width <= 1376) {
      setml("4%");
      setmt("12.5rem");
      setmr("1%");
    }

    else{
      setml("25%");
      setmt("13%");
      setmr("1%");
    }
  }


  window.onresize = function () {
    if (width <= 1376) {
      setml("4%");
      setmt("12.5rem");
      setmr("1%");
    }

    else{
      setml("4%");
      setmt("13%");
      setmr("1%");
    }
  };


  return (
    <div>
      <Popup
        contentStyle={{
          position: "absolute",
          marginLeft: ml,
          background: "#16cdfa",
          marginTop: mt,
          marginRight: mr,
          textAlign: "left",
          width: "300px",
        }}
        closeOnDocumentClick={true}
        onClose={closeModel}
        open={true}
      >
        <div className="popup1">
          <a className="close" onClick={closeModel}>
            <CloseIcon style={{ color: "#ff0000" }} />
          </a>
          <div className="popup1text">
            <span className="popup1text1">To know more about GIT Api key </span>
            <a className="popuptext1anchor1" href="https://docs.github.com/en/rest" rel="noopener noreffer" target="_blank">Click Here</a>
            <span className="popup1question1">Why do we need an API ?</span>
            With the help of this API we can add the generated inverted index file to your git repository.
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp1;
