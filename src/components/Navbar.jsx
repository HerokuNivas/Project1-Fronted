import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {

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
        <Link className="nav-link changeLink listItem" to="/documentation"><h6>Documentation <ArticleIcon fontSize="small" style={{color: "white"}}/></h6></Link>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#search"><h6>Perform Search <SearchIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#contact"><h6>Contact Us <EmailIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
      <li class="nav-item active">
        <Link className="nav-link changeLink listItem" to="/developers"><h6>Developers <PersonIcon fontSize="small" style={{color: "white"}}/></h6></Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
