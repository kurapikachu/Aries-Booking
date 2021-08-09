import Axios from "axios";
import {CINEMA_DETAILS_FAILED, CINEMA_DETAILS_PAGE_REQUEST, CINEMA_DETAILS_SUCCESS} from "./constants";

//Goi ham nay trong mapDispatchToProps
export const actCinemaDetailsAPI = (movie_ID) => {
    return (dispatch) => {
        dispatch(actCinemaDetailsRequest());
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movie_ID}`,
            method: "GET"
        })
            .then((response) => {
                dispatch(actCinemaDetailsSuccess(response.data));
            })
            .catch((err)=>{
                dispatch(actCinemaDetailsFailed(err));
            })
    }
};

export const actCinemaDetailsRequest = () => {
    return {
        type: CINEMA_DETAILS_PAGE_REQUEST
    }
};

export const actCinemaDetailsSuccess = (movie_details_data) => {
    return {
        type: CINEMA_DETAILS_SUCCESS,
        payload: movie_details_data
    }
};

export const actCinemaDetailsFailed = (err) => {
    return {
        type: CINEMA_DETAILS_FAILED,
        payload: err
    }
};
