import React, { Component } from "react";
import Slider from "react-slick";
import CinemaCard from "../CinemaCard/cinema-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-cinema.css"
import {actCinemaListAPI} from "./modules/actions";
import {connect} from "react-redux";

class Responsive extends Component {

    componentDidMount() {
        this.props.cinemaListAPI();
    }

    renderCinemaCard = () => {
        const cinemaList = this.props.cinemaList;
        if (cinemaList && cinemaList.length > 0) {
            return cinemaList.map((cinema_object) => {
                return <CinemaCard cinema_object={cinema_object} />
            })
        }
    }

    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    {this.renderCinemaCard()}
                </Slider>
            </div>
        );
    }
} // end of class

const mapStateToProps = (state) => {
    return {
        loading: state.cinemaCarouselReducer.loading,
        cinemaList: state.cinemaCarouselReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cinemaListAPI: () => {
            dispatch(actCinemaListAPI());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Responsive)