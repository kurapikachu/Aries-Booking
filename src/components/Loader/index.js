import React, { Component } from "react";
import "./loader.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="gooey">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}
