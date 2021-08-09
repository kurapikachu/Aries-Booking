import Axios from "axios";
import { actUserListDeleteFailed } from "../../../../components/UserManagement/modules/actions";
import { USER_LIST_DELETE_FAILED } from "../../../../components/UserManagement/modules/constants";

//Goi API => return a callback fnc => lay ve 1 array cac object phim ve
export const actNowPlayingMovieAPI = () => {
    return (dispatch) => {
        dispatch(actNowPlayingMovieRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
            .then((response) => {
                dispatch(actNowPlayingMovieSuccess(response.data))
            })
            .catch((error) => { dispatch(actNowPlayingMovieFailed(error)) })
    }
};


export const actNowPlayingMovieRequest = () => {
    return {
        type: "listNowPlayingReducer/REQUEST",
    }
};

export const actNowPlayingMovieSuccess = (data) => {
    return {
        type: "listNowPlayingReducer/SUCCESS",
        payload: data,
    }
};

export const actNowPlayingMovieFailed = (error) => {
    return {
        type: "listNowPlayingReducer/FAILED",
        payload: error
    }
};

export const actMovieDeleteFailed = (error) => {
    return {
        type: "listNowPlayingReducer/DELETE_FAILED",
        payload: error
    }
};

export const actMovieDeleteAPI = (movieID) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movieID}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(() => {
            window.history.go("/dashboard/user")
        }).catch((err) => {
            console.log(err);
            dispatch(actMovieDeleteFailed(err))
        })
    }
}
