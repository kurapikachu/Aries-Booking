import { act } from "react-dom/test-utils";
import {
  GET_GHE_REQUEST,
  GET_GHE_SUCCESS,
  GET_GHE_FAILED,
  CHANGE_SELECT_GHE,
} from "./constant";

let stateDefault = {
  danhSachGheDangDat: {},
  danhSachGheDangChon: [],
  thongTinPhim: {},
};
const addGheReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_GHE_REQUEST:
      return { ...state };

    case GET_GHE_SUCCESS: {
      state.danhSachGheDangDat = { ...action.ghe };
      state.thongTinPhim = action.ghe.thongTinPhim;
      state.danhSachGheDangChon = [...state.danhSachGheDangDat];
      let index = state.danhSachGheDangChon.findIndex(
        (gheDangDat) => gheDangDat.tenGhe === action.ghe.tenGhe
      );
      return { ...state };
    }
    case GET_GHE_FAILED: {
      return { ...state };
    }
    case CHANGE_SELECT_GHE: {
      let index = state.danhSachGheDangChon.findIndex(
        (item) => item.maGhe == action.ghe.maGhe
      );
      if (index == -1) {
        state.danhSachGheDangChon = [...state.danhSachGheDangChon, action.ghe];
      } else {
        let updateDanhSach = [...state.danhSachGheDangChon];
        updateDanhSach.splice(index, 1);
        state.danhSachGheDangChon = updateDanhSach;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default addGheReducer;
