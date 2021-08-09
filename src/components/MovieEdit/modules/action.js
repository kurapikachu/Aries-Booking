import {UPDATE_MOVIE_REQUEST} from "./constants";
import Axios from "axios";
import {  message } from 'antd';
import formatDate from "../../GlobalFunctions/GlobalFunctions";


export const actMovieUpdateAPI = (movie) => {
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
            dispatch(actMovieUpdateRequest());
            Axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${accessToken}`
                }
            }).then((result) => {

                window.history.go("/dashboard/movie");

                // alert("Updated successfully");
            }).catch((err) => {
                // console.log(err.response.data);
                message.error({content:"Sorry, can not update this movie"});
            })
        }
    }
}

export const actMovieUpdateRequest = () => {
    return {
        type: UPDATE_MOVIE_REQUEST
    }
};

