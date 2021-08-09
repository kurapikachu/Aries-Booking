import {
  ADD_USER_REQUESET,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from "./constant";
import Axios from "axios";

export const actAddUserApi = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        const account = {
          taiKhoan: result.data.taiKhoan,
          matKhau: result.data.matKhau,
        };
        actLoginApi(account);
        dispatch(actAddUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
      });
  };
};

const actLoginApi = (account) => {
  return Axios({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data: account,
  })
    .then((result) => {
      localStorage.setItem("User", JSON.stringify(result.data.maLoaiNguoiDung));
      localStorage.setItem("UserName", JSON.stringify(result.data.hoTen));
      window.history.go(-2);
    })
    .catch((err) => {});
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUESET,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (err) => {
  return {
    type: ADD_USER_FAILED,
    payload: err,
  };
};
