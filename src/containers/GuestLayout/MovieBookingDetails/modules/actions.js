import Axios from "axios";
import {MOVIE_DETAILS_FAILED, MOVIE_DETAILS_PAGE_REQUEST, MOVIE_DETAILS_SUCCESS} from "./constants";

//Goi ham nay trong mapDispatchToProps
export const actMovieDetailsAPI = (movie_ID) => {
    return (dispatch) => {
        dispatch(actMovieDetailsRequest());
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movie_ID}`,
            method: "GET"
        })
            .then((response) => {
                dispatch(actMovieDetailsSuccess(response.data));
            })
            .catch((err)=>{
                dispatch(actMovieDetailsFailed(err));
            })
    }
};

export const actMovieDetailsRequest = () => {
    return {
        type: MOVIE_DETAILS_PAGE_REQUEST
    }
};

export const actMovieDetailsSuccess = (movie_details_data) => {
    return {
        type: MOVIE_DETAILS_SUCCESS,
        payload: movie_details_data
    }
};

export const actMovieDetailsFailed = (err) => {
    return {
        type: MOVIE_DETAILS_FAILED,
        payload: err
    }
};
