import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constant";
import Axios from "axios";


export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          //Lưu trạng thái login
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          //Chuyển đến trang dashboard
          localStorage.setItem(
            "User",
            JSON.stringify(result.data.maLoaiNguoiDung)
          );
          localStorage.setItem("UserName", JSON.stringify(result.data.hoTen));
          history.push("/dashboard");

        } else if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem(
            "User",
            JSON.stringify(result.data.maLoaiNguoiDung)
          );
          localStorage.setItem("UserData", JSON.stringify(result.data));
          localStorage.setItem("UserName", JSON.stringify(result.data.hoTen));
          localStorage.setItem("UserAccount", JSON.stringify(result.data.taiKhoan));
          // history.push("/");
          history.goBack();

        } else {
          alert("Tai Khoan Khong Chap Thuan");
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};
