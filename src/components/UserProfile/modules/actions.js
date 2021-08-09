import Axios from "axios";
import {USER_INFO_FAILED, USER_INFO_REQUEST, USER_INFO_SUCCESS} from "./constants";

export const actUserInfoAPI = (username) => {
    return (dispatch) => {
        dispatch(actUserInfoRequest());
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST"
        })
            .then((response) => {
                dispatch(actUserInfoSuccess(response.data));
            })
            .catch((err)=>{
                dispatch(actUserInfoFailed(err));
            })
    }
};

export const actUserInfoRequest = () => {
    return {
        type: USER_INFO_REQUEST
    }
};

export const actUserInfoSuccess = (movie_details_data) => {
    return {
        type: USER_INFO_SUCCESS,
        payload: movie_details_data
    }
};

export const actUserInfoFailed = (err) => {
    return {
        type: USER_INFO_FAILED,
        payload: err
    }
};
