import React, { Component } from "react";
import "./css/footer-style.css";

export default class FooterGuest extends Component {
  render() {
    return (
      <div>
        {/* ============Footer============ */}
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light page-footer">
          <footer>
            <div className="row mt-5 justify-content-center align-item-center ">
              <div className="col-11">
                <div className="row ">
                  <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <h4 className="text-muted mb-md-0 mb-5 bold-text">
                      Aries Booking
                    </h4>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 className="mb-3 mb-lg-4 bold-text ">
                      <b>THEATER</b>
                    </h6>
                    <ul className="list-unstyled">
                      <li>Galaxy</li>
                      <li>Lotte</li>
                      <li>CGV</li>
                      <li>BHD</li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                      <b>MOVIES</b>
                    </h6>
                    <p className="mb-1">Buy ticket</p>
                    <p>Watch Trailer</p>
                  </div>
                </div>
                <div>
                  <p className="mx-2">Social media</p>
                  <p className="social mb-4 pb-0 bold-text">
                    <span className="mx-2">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span className="mx-2">
                      <i class="fab fa-linkedin"></i>
                    </span>
                    <span className="mx-2">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span className="mx-2">
                      <i class="fab fa-instagram"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="text-center">
              <small>
                Copyright 2021 © Aries Entertainment Pvt. Ltd. All Rights Reserved.
                <br></br>
                The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
              </small>
            </div>

          </footer>
        </div>

        {/* End of Footer */}
      </div>
    );
  }
}
