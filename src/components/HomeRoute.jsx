import React from "react";
import Navbar from "./Navbar";
import "../css/HomeRoute.css";
import Contact from "./Contact";
import Footer from "./Footer";
import ComponentBorder from "./ComponentBorder";
import MainComponent from "./mainComponent";
import Search from "./search";


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
        <a href="https://www.buymeacoffee.com/vsnsainivaS">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=vsnsainivaS&button_colour=16cdfa&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default HomeRoute;
