import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navBar">
  <span class="navbar-brand" href="#"><h3 style={{marginLeft: 26}}>Inverted Index Generator</h3></span>
  <div className="buttonSet">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <ExpandMoreIcon style={{color: "black"}} className="expandNavbar" fontSize="medium"/>
  </button>
  </div>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto listItems">
      <li class="nav-item active">
        <Link className="nav-link changeLink listItem" to="/documentation"><h6>📄</h6></Link>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#contact"><h6>Contact Us✉️</h6></a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
