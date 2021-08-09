import {ADD_MOVIE_FAILED, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS} from "./constants";
import Axios from "axios";
import formatDate from '../../GlobalFunctions/GlobalFunctions';

export const actAddMovieRequest = () => {
    return {
        type: ADD_MOVIE_REQUEST,
    }
}
export const actAddMovieSuccess = (data) => {
    return {
        type: ADD_MOVIE_SUCCESS,
        payload: data
    }
}

export const actAddMovieFailed = (err) => {
    return {
        type: ADD_MOVIE_FAILED,
        payload: err
    }
}

export const actAddMovieAPI = (movie) => {

    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    let form = new FormData();

    let formData = Object.keys(movie).reduce((carry, key) => {
        let data = movie[key];
        if (key === 'ngayKhoiChieu') {
            data = formatDate(data);
        }
        carry.append(key,data);
        return carry;
    }, new FormData())

    form.append("", "")

    if (localStorage.getItem("UserAdmin")) {
        return (dispatch) => {
            dispatch(actAddMovieRequest());
            Axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${accessToken}`
                }
            })
                .then((result) => {
                    dispatch(actAddMovieSuccess(result.data))
                    return result.data;
                })
                .then((data) => {
                    window.location = '/dashboard/movie';
                })
                .catch((err) => {
                    dispatch(actAddMovieFailed(err))
                })
        }
    }
}