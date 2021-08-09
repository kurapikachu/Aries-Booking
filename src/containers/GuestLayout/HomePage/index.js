import React, { Component } from "react";
import "./css/style.css";
import CarouselMovie from "../../../components/CarouselMovie";
import CarouselCinema from "../../../components/CarouselCinema";
import BannerCarousel from "../../../components/BannerCarousel";
import Loader from "../../../components/Loader";
import FooterGuest from "../../../components/FooterGuest";
import { actNowPlayingMovieAPI } from "./modules/actions";
import { connect } from "react-redux";
import News from "../../../components/News/news";

import ShowTime from './components/ShowTime'
import TrendingList from "../../../components/TrendingList/TrendingList";



class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    //Get data from props
    componentDidMount() {
        this.props.nowPlayingListAPI();
    }

    renderCarousel = () => {
        const nowPlayingList = this.props.nowPlayingList;
        return <CarouselMovie itemsToShow={nowPlayingList} />
    };


    renderCinemaCarousel = () => {
        return <CarouselCinema />;
    };

    render() {
        const { loading } = this.props;

        if (loading) {
            return <Loader />
        }
        return (
            <div>
                <BannerCarousel />
                {/* ========== 2- Now Playing ========== */}
                <div className="now-playing section">
                    <div className="container section__header mt-5">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3879/3879742.svg" alt="movie-icon" />
                        <h3 className="section__title">Now Playing</h3>
                    </div>
                    {this.renderCarousel()}
                </div>
                {/* ========== /2- Now Playing ========== */}


                {/* ========== 3- Trending ========== */}
                <div className="trending section theme-background">
                    <div className="container section__header">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/1784/1784614.svg" alt="trending-icon" />
                        <h3 className="section__title">Trending</h3>
                    </div>
                    <TrendingList />
                </div>
                {/* ========== /3- Trending ========== */}

                {/* ========== 4- Cinema logo ========== */}
                <div className="cinema-list-section section">
                    <div className="container section__header">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3507/3507076.svg" alt="popcorn-icon" />
                        <h3 className="section__title">Theaters</h3>
                    </div>
                    <div className="container">{this.renderCinemaCarousel()}</div>
                </div>
                {/* ========== /4- Cinema logo ========== */}


                {/* ========== 6- Showtime  ========== */}
                <div className="showTime__content grey-background section">
                    <div className='container section__header'>
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon" />
                        <h3 className="section__title">Today we have</h3>
                    </div>
                    <div className="container">
                        <ShowTime />
                    </div>
                </div>

                {/* ========== /6- Showtime  ========== */}


                {/* ========== 7- News ========== */}
                <div className="news section">
                    <div className="container section__header">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3320/3320351.svg" alt="news-icon" />
                        <h3 className="section__title">News</h3>
                    </div>
                    <div className="container">
                        <News />
                    </div>
                </div>
                {/* ========== /7- News  ========== */}

                <FooterGuest />
            </div>
        );
    }
} //end of class

const mapStateToProps = (state) => {
    return {
        loading: state.listNowPlayingReducer.loading,
        nowPlayingList: state.listNowPlayingReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nowPlayingListAPI: () => {
            dispatch(actNowPlayingMovieAPI());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);