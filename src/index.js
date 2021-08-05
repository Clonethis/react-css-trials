import React from "react";
import ReactDOM from "react-dom";
import "./styling/css/style.css";
import "./styling/css/icons/styles.css";
// React compontents
import FirstPage from "./react_components/pages/FirstPage";
// import violet from "./styling/images/ruzovy.png";
// import green from "./styling/images/zeleny.png";
export default class App extends React.Component {
  render() {
    return <FirstPage />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
