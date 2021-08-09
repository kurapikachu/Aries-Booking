import React from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="error-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="error-text">
              <h3 className="error">404 Error</h3>
              <img src="https://media.istockphoto.com/vectors/exclamation-mark-icon-bubble-vector-id658157330?b=1&k=6&m=658157330&s=170667a&w=0&h=p6TB7FvwP_Mh4cDXbisn7eWsW5P3IreEgAB2XHCUkGI=" />
              <h4>Oops! This page Could Not Be Found!</h4>

              <Link to={"/"} className="btn btn-primary btn-round">Return to homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
