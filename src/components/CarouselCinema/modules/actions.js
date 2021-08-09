import Axios from "axios";
import { CINEMA_CAROUSEL_REQUEST, CINEMA_CAROUSEL_SUCCESS, CINEMA_CAROUSEL_FAILED } from "./constants";

//Goi ham nay trong mapDispatchToProps
export const actCinemaListAPI = () => {
    return (dispatch) => {
        dispatch(actCinemaListRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
            method: "GET"
        })
            .then((response) => {
                dispatch(actCinemaListSuccess(response.data));
            })
            .catch((err) => {
                dispatch(actCinemaListFailed(err));
            })
    }
};

export const actCinemaListRequest = () => {
    return {
        type: CINEMA_CAROUSEL_REQUEST
    }
};

export const actCinemaListSuccess = (cinemaList) => {
    return {
        type: CINEMA_CAROUSEL_SUCCESS,
        payload: cinemaList
    }
};

export const actCinemaListFailed = (err) => {
    return {
        type: CINEMA_CAROUSEL_FAILED,
        payload: err
    }
};
