import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actBookGhe } from "./../../containers/GuestLayout/BookingPage/modules/action";
import "./CheckOutInfo.css"


class ThongTinDatGhe extends Component {
  constructor(props) {
    super(props);
  }

  tongTien = (data) => {
    let total = 0;
    data.map((gheDangDat, index) => {
      return (total += gheDangDat.giaVe);
    });
    return <span>{total} VND</span>;
  };

  checkOut = () => {
    this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      let data = {
        maLichChieu: this.props.maLichChieu,
        danhSachVe: [
          {
            maGhe: gheDangDat.maGhe,
            giaVe: gheDangDat.giaVe,
          },
        ],
        taiKhoanNguoiDung: localStorage.getItem("UserAccount").replace(/[^\w\s]/gi, ""),
      };
      this.props.checkOut(data.maLichChieu, data.danhSachVe, data.taiKhoanNguoiDung);
    });
  };

  render() {

    return (
      <div className="container">
        <div className="row">
          <widget type="ticket" className="--flex-column">
            <div className="top --flex-column">

              <div className="movie-title">{this.props.movieInfo.tenPhim}</div>
              <div className="tourname">{this.props.movieInfo.tenCumRap}</div>
              <div className="date">{this.props.movieInfo.ngayChieu} - {this.props.movieInfo.gioChieu}</div>

              <img src="https://image.freepik.com/free-vector/popcorn-soda-icon-illustration_138676-83.jpg" alt="poster" />
              <div className="deetz --flex-row-j!sb">
                <div className="event --flex-column">
                  <div className="date">Your seat(s):</div>
                  <div className="location -bold">
                    {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                      return (
                        <Fragment key={index}>

                          <span className="mr-1">{gheDangDat.tenGhe} - </span>
                          {(index + 1) % 5 === 0 && <br />}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="price --flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">{this.tongTien(this.props.danhSachGheDangDat)}</div>
                </div>
              </div>
            </div>
            <div className="rip" />
            <div className="bottom --flex-row-j!sb">
              <div className="barcode" />
              <button
                className="buy"
                onClick={() => {
                  this.checkOut();
                }}
              >
                CONFIRM
              </button>
            </div>
          </widget>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.addGheReducer.danhSachGheDangChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOut: (maLichChieu, danhSachVe, taiKhoanNguoiDung) => {
      dispatch(actBookGhe(maLichChieu, danhSachVe, taiKhoanNguoiDung));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
