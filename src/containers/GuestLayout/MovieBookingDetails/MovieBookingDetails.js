import React, {Component} from 'react';
import "./movie-booking-details.css";
import FooterGuest from "../../../components/FooterGuest";
import TrailerModal from "../../../components/TrailerModal/trailer-modal";
import {connect} from "react-redux";
import {actMovieDetailsAPI} from "./modules/actions";
import Loader from "../../../components/Loader";
import ShowTime from "../HomePage/components/ShowTime";

class MovieBookingDetails extends Component {

    componentDidMount() {
        console.log("I am DidMount in Movie Booking Page. My props have");
        //dispatch the action to get the movie, pass the id to the action, id comes from <Link>

        //Goi ham lay thong tin phim, truyen vao maPhim
        const movie_ID = this.props.match.params.id;
        this.props.getMovieDetails(movie_ID);
    }

    renderMovieDetails = () => {
        const details = this.props.movieDetails;
        if (details !== null) {
            console.log(this.props.movieDetails.moTa);
            const rating= details.danhGia;
            const posterURL = details.hinhAnh;
            const showTimeList = details.lichChieu;
            const introduction = details.moTa;
            const releaseDate = details.ngayKhoiChieu;
            const movieTitle = details.tenPhim;
            const trailerURL  = this.youtube_parser(details.trailer);

            return (
                <div className="header container-fluid theme-background">
                    <div className="wrap">
                        <div className="row movie-info">
                            <div className="col-md-4 movie-left">
                                <div className="movie-img">
                                    <img src={posterURL} alt="poster"/>
                                </div>
                            </div>
                            <div className="col-md-8 movie-right text-center">
                                <div className="movie-title"><h1>{movieTitle}</h1></div>
                                <div className="story-line">
                                    <p style={{color: '#525252'}}>{introduction}</p>
                                </div>
                                <div className="circle">{rating}</div>
                                <div className="ratings">
                                    <span className="mr-2">in ratings</span>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/263/263075.svg" alt="rating"/>
                                </div>
                                <div className="movie-info-button">
                                    <TrailerModal youtubeID={trailerURL} />
                                    <button className="btn_hover btn-ticket"><i className="fa fa-ticket-alt mr-2"/>TICKET
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }

    youtube_parser (url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    render() {
        console.log("I am in render function of Movie Booking Page")
        console.log("Props in RENDER have")
        console.log(this.props);

        const loader = this.props.loading;
        if (loader) { return <Loader /> };

        return (
            <div className="movie-booking-page">
                {/* Header */}
                {this.renderMovieDetails()}

                <div className="showTime__content grey-background section">
                    <div className='container section__header'>
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon"/>
                        <h3 className="section__title">Pick your schedule</h3>
                    </div>
                    <div className="container">
                        <ShowTime/>
                    </div>
                </div>
                <FooterGuest/>
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
        getMovieDetails: (movie_ID) => {
            dispatch(actMovieDetailsAPI(movie_ID))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBookingDetails);