import React from "react";

const AppNavBar = () => {
  return (
    <nav className="blue">
      <div className="nav-wrapper">
        <div className="brand-logo" style={{ marginLeft: "20px" }}>
          Jasper Reports
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="waves-effect waves-light btn">Button</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;
