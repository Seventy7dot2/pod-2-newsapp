import React from "react";
import "./Navbar.css";
import Draw from "./Draw";
const Navbar = (setCategory) => {
  return (
    <div className="nav">
      <div className="icon"><Draw setCategory={setCategory}/></div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="no logo"
        height="80%"
      />
    </div>
  );
};

export default Navbar;
