import Axios from "axios";


export const actNowPlaying5MovieAPI = () => {
    return (dispatch) => {
        dispatch(actNowPlaying5MovieRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
            .then((response) => {
                dispatch(actNowPlaying5MovieSuccess(response.data))
            })
            .catch((error) => { dispatch(actNowPlaying5MovieFailed(error)) })
    }
};

export const actNowPlaying5MovieRequest = () => {
    return {
        type: "listNowPlayingReducer/REQUEST",
    }
};

export const actNowPlaying5MovieSuccess = (data) => {
    return {
        type: "listNowPlayingReducer/SUCCESS",
        payload: data,
    }
};

export const actNowPlaying5MovieFailed = (error) => {
    return {
        type: "listNowPlayingReducer/FAILED",
        payload: error
    }
};

//========= Call API for the Movie