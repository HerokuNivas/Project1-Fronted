import React from "react";
import Navbar from "./Navbar";
import "../css/HomeRoute.css";
import Contact from "./Contact";
import Footer from "./Footer";
import ComponentBorder from "./ComponentBorder";
import MainComponent from "./mainComponent";
import Search from "./search";
import image1 from "../images/diarymilk.png";


function HomeRoute() {
  return (
    <div>
      <Navbar />
      <MainComponent/>
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <ComponentBorder />
      </div>
      <div id="search">
        <Search/>
      </div>
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <ComponentBorder />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div style={{textAlign: "right", marginRight: "20px"}}>
        <a href="https://buy.stripe.com/4gw7wogRVfMg6uA4gi">
          <img src={image1} style={{borderRadius: "2%"}} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default HomeRoute;
