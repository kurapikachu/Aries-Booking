import React, { Component } from "react";
import "./movie-card.css";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {


    render() {
        const { movieObj } = this.props;
        return (

            <Link to={`/movie/${movieObj.maPhim}`} className="movie__card">
                <div className="news__wrapper"
                    style={{ background: `url(${movieObj.hinhAnh}) center/cover no-repeat`, width: 270 }}>
                    <div className="data">
                        <div className="content">
                            <h1 className="title">{movieObj.tenPhim}</h1>
                            <Link to={`/movie/${movieObj.maPhim}`} className="button">T I C K E T <i className="fas fa-ticket-alt" /></Link>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
