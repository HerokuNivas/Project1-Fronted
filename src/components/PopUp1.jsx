import Popup from "reactjs-popup";
import React from "react";
import '../css/PopUp1.css';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import useWindowDimensions from "../functions/windowWidth";


function PopUp1(props) {
    console.log("came in");
    console.log(props.ml);
    const {height, width} = useWindowDimensions();
    const [ml, setml] = useState("25%");
    const [mt, setmt] = useState("13%");
    const closeModel = () => {props.close(false)};

    // window.onresize = function(){
    //   if(width <= 1500){
    //     setml("2%")
    //   }
    // }

  return (
    
    <div>
      <Popup contentStyle={{position: "absolute", marginLeft: ml, background:"#16cdfa" ,marginTop: mt, textAlign: "center"}} closeOnDocumentClick={false} open={true}>
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