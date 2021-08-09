import { USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_DELETE_FAILED } from "./constants";
import Axios from "axios";
import { Table, Space, Button, message } from 'antd';

export const actUserListAPI = () => {
    return (dispatch) => {
        dispatch(actUserListRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method: "GET"
        })
            .then((result) => {
                dispatch(actUserListSuccess(result.data))
            })
            .catch((err) => {
                dispatch(actUserListFailed(err))
            });
    };
};


export const actUserListDeleteAPI = (id) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(() => {

            window.history.go("/dashboard/user")
        }).catch((err) => {
            console.log(err);
            dispatch(actUserListDeleteFailed(err))
        })
    }
}

export const actUserListRequest = () => {
    return {
        type: USER_LIST_REQUEST
    }
};
export const actUserListSuccess = (data) => {
    return {
        type: USER_LIST_SUCCESS,
        payload: data
    }
};
export const actUserListFailed = (err) => {
    return {
        type: USER_LIST_FAILED,
        payload: err
    }
};
export const actUserListDeleteFailed = (error) => {
    return {
        type: USER_LIST_DELETE_FAILED,
        payload: error
    }
};