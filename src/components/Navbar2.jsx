import React from "react";
import "../css/Navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyIcon from '@mui/icons-material/Key';
import StorageIcon from '@mui/icons-material/Storage';
import OutputIcon from '@mui/icons-material/Output';
import SearchIcon from '@mui/icons-material/Search';

function Navbar2(props) {
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
        <a className="nav-link changeLink listItem" href="#apiDocumentation"><h6>API Key <KeyIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#repoDocumentation"><h6>Repository <StorageIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#searchDocumentation"><h6>Perform Search <SearchIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
      <li class="nav-item">
        <a className="nav-link changeLink listItem" href="#outputDocumentation"><h6>Types of output <OutputIcon fontSize="small" style={{color: "white"}}/></h6></a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar2;
