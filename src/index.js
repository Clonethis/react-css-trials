import React from "react";
import ReactDOM from "react-dom";
import "./styling/css/style.css";
import logo from "./styling/images/black_logo_better.jpeg";
export default class App extends React.Component {
  render() {
    return (
      <div className="first-page">
        <div className="header">
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
              <span className="heading-primary--secondary">
                Zdrave a s chuti
              </span>
            </h1>
            <a href="#" className="btn btn--main-white btn--animated">
              Welcome
            </a>
          </div>
        </div>
        <section className="grid-system">
          <div className="row">
            <div className="col-1-2">Column 1-2</div>
            <div className="col-1-2">Column 1-2</div>
          </div>
          <div className="row">
            <div className="col-1-3">Column 1-3</div>
            <div className="col-1-3">Column 1-3</div>
            <div className="col-1-3">Column 1-3</div>
          </div>
          <div className="row">
            <div className="col-1-3">Column 1-3</div>
            <div className="col-2-3">Column 2-3</div>
          </div>
          <div className="row">
            <div className="col-1-4">Column 1-4</div>
            <div className="col-1-4">Column 1-4</div>
            <div className="col-1-4">Column 1-4</div>
            <div className="col-1-4">Column 1-4</div>
          </div>

          <div className="row">
            <div className="col-1-4">Column 1-4</div>
            <div className="col-1-4">Column 1-4</div>
            <div className="col-2-4">Column 2-4</div>
          </div>

          <div className="row">
            <div className="col-1-4">Column 1-4</div>
            <div className="col-3-4">Column 3-4</div>
          </div>
        </section>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
