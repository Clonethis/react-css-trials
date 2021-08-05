import React from "react";
import logo from "../../styling/images/black_logo_better.jpeg";
export default class SectionHeader extends React.Component {
  render() {
    return (
      <div className="header" id="header">
        <div className="header__logo-box">
          {/* logo on top left of the page */}
          <img alt="Logo" src={logo} className="header__logo" />
        </div>
        {/* centering whole content */}
        <div className="header__text-box">
          {/* Main heading*/}
          <h1 className="heading-primary">
            {/* span used to style heading differently */}
            <span className="heading-primary--main">Snakkuj</span>
            <span className="heading-primary--secondary">Zdrave a s chuti</span>
          </h1>
          <a href="#" className="btn btn--main-white btn--animated">
            Welcome
          </a>
        </div>
      </div>
    );
  }
}
