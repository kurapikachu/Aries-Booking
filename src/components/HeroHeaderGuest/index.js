import "./hero-style.css";

import React, { Component } from "react";

export default class HeroHeaderGuest extends Component {
  render() {
    return (
      <div>
        {/* ========== 1- COMPONENT Hero Header ========== */}
        <section class="hero">
          <header class="hero-header">
            <h1 class="hero-title mb-5">One place. All movies.</h1>
            <div class="hero-content">
              <form>
                <div class="inner-form">
                  <div class="input-field first-wrap">
                    <div class="svg-wrapper"></div>
                    <input
                      id="search"
                      type="text"
                      placeholder="Search a movie"
                    />
                  </div>
                  <div class="input-field second-wrap">
                    <button class="btn-search" type="button">
                      SEARCH
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </header>
        </section>
        {/* ========== End COMPONENT Hero Header ========== */}
      </div>
    );
  }
}
