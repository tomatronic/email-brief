import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
    return(
      <header className="mainHeader">
        <div className="pureLogo">
          <img src={logo} className="App-logo" alt="Pure360" />
        </div>
        <div className="headerText">
          <div className="companyName">{props.companyName}</div>
          <div className="templateText">Template Builder</div>
        </div>
      </header>
    )
}

export default Header;
