import Popup from "reactjs-popup";
import React from "react";
import '../css/PopUp1.css';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import useWindowDimensions from "../functions/windowWidth";


function PopUp1(props) {
    console.log("came in");
    const {height, width} = useWindowDimensions();
    const [ml, setml] = useState("25%");
    const [mt, setmt] = useState("13%");
    const [mr, setmr] = useState("1%");
    const closeModel = () => {props.close(false)};

    window.onresize = function(){
      if(width <= 1376){
        setml("1%");
        setmt("12.5rem");
        setmr("1%");
      }
    }

  return (
    
    <div>
      <Popup contentStyle={{position: "absolute", marginLeft: ml, background:"#16cdfa" ,marginTop: mt, marginRight: mr, textAlign: "center"}} closeOnDocumentClick={false} open={true}>
        <div className="popup1">
        <a className="close" onClick={closeModel}>
            <CloseIcon style={{color: "red"}}/>
          </a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dolor nulla animi, natus velit assumenda deserunt molestias
        </div>
      </Popup>
    </div>
  );
}

export default PopUp1;