import React, { Component } from "react";
import "./cinema-card.css";
import { Link } from "react-router-dom";

export default class CinemaCard extends Component {

    render() {
        const { cinema_object } = this.props;
        return (
            <div className="cinema-list-item">
                <Link to={`/under-construction`} className="item__content" >
                    <div>
                        <div className="cinema-logo">
                            <img src={cinema_object.logo} alt="cinema-logo" />
                        </div>
                        <div className="cinema-text">
                            <h6 className="cinema-title-small">{cinema_object.tenHeThongRap}</h6>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
