import {UPDATE_ACCOUNT_REQUEST, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAILED} from "./constants";
import Axios from "axios";
import {  message } from 'antd';


export const actUserListUpdateAPI = (account) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        dispatch(actUserListUpdateRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            method: "PUT",
            data: account,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then((result) => {
            // dispatch(actUserListUpdateSuccess(result.data));
            window.history.go("/dashboard/user")
        }).catch((err) => {
            // dispatch(actUserListUpdateFailed(err));
            console.log(err.response.data);
            message.error({content:"Không thể cập nhật người dùng "});
        })
    }
}


export const actUserListUpdateRequest = () => {
    return {
        type: UPDATE_ACCOUNT_REQUEST
    }
};
export const actUserListUpdateSuccess = (user) => {
    return {
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: user
    }
};
export const actUserListUpdateFailed = (err) => {
    return {
        type: UPDATE_ACCOUNT_FAILED,
        payload: err
    }
};
