import React, { Component } from 'react';
import "./cinema-details.css";
import FooterGuest from "../../../components/FooterGuest";
import { connect } from "react-redux";
import { actCinemaDetailsAPI, actMovieDetailsAPI } from "./modules/actions";
import Loader from "../../../components/Loader";
import ShowTime from "../HomePage/components/ShowTime";

class CinemaDetails extends Component {

    componentDidMount() {
        console.log("I am DidMount in Cinema Details Page");
        console.log(this.props);
        const cinema_ID = this.props.match.params.id;
        this.props.getCinemaDetails(cinema_ID);
    }

    renderCinemaDetails = () => {
        const details = this.props.movieDetails;
        if (details !== null) {

            return (
                <div className="header container-fluid theme-background">
                    <div className="wrap">
                        <div className="row movie-info">
                            <div className="col-md-4 movie-left">
                                <div className="movie-img">
                                    <img src={"https://i.pinimg.com/originals/ae/a9/1e/aea91e10280fa08d5e38c48d1c869f0a.jpg"} alt="poster" />
                                </div>
                            </div>
                            <div className="col-md-8 movie-right text-center">
                                <div className="movie-title"><h1>Galaxy</h1></div>
                                <div className="story-line">
                                    <p style={{ color: '#525252' }}>{"hello"}</p>
                                </div>
                                <div className="circle">{"5"}</div>
                                <div className="ratings">
                                    <span className="mr-2">in ratings</span>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/263/263075.svg" alt="rating" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }


    render() {
        console.log("Cinema Details Page props:")
        console.log(this.props);

        const loader = this.props.loading;
        if (loader) { return <Loader /> }

        return (
            <div className="movie-booking-page">
                {/* Header */}
                {this.renderCinemaDetails()}

                <h1>Cinema Details</h1>

                <div className="showTime__content grey-background section">
                    <div className='container section__header'>
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon" />
                        <h3 className="section__title">Pick your schedule</h3>
                    </div>
                    <div className="container">
                        <ShowTime />
                    </div>
                </div>
                <FooterGuest />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetails: state.movieDetailsReducer.data,
        loading: state.movieDetailsReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCinemaDetails: (cinema_ID) => {
            dispatch(actCinemaDetailsAPI(cinema_ID))
        },

    }
}

// handleOnClick() {
//     this.props.addThing();
// };

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetails);