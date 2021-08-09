import React from "react";
import { Link } from "react-router-dom";

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Movie = ({ movieData }) => {
  if (!movieData) return null;
  const { lstLichChieuTheoPhim, hinhAnh, tenPhim } = movieData;

  return (
    <div style={{ marginTop: "20px", maxWidth: "500px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        className="flex-box"
      >
        <img style={{ width: "50px", height: "50px" }} src={hinhAnh} />
        <div style={{ marginLeft: "10px" }}>
          <p style={{ margin: "unset" }}>
            <b>{tenPhim}</b>
          </p>
          <span style={{ color: "grey", fontSize: "12px" }}>
            {randomInteger(100, 180)} phút - TIX {randomInteger(1, 9)} - IMDb{" "}
            {randomInteger(5, 8)}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {Array.isArray(lstLichChieuTheoPhim) && lstLichChieuTheoPhim.length
          ? lstLichChieuTheoPhim.map((gioChieu, index) => {
              const { ngayChieuGioChieu } = gioChieu;
              const day = new Date(gioChieu.ngayChieuGioChieu).getDate();
              const month = new Date(gioChieu.ngayChieuGioChieu).getMonth();
              const year = new Date(gioChieu.ngayChieuGioChieu).getFullYear();
              const hour = new Date(gioChieu.ngayChieuGioChieu).getHours();
              const minute = new Date(gioChieu.ngayChieuGioChieu).getMinutes();
              return (
                <Link
                  to={`/booking/${gioChieu.maLichChieu}`}
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(246,246,246,.5)",
                    border: "1px solid #e4e4e4",
                    marginRight: "10px",
                    fontSize: "14px",
                    padding: "5px",
                    borderRadius: "7px",
                    color: "#9b9b9b",
                  }}
                >
                  <p
                    style={{
                      margin: "unset",
                      color: "green",
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    {hour}:{minute}
                  </p>
                  <p style={{ margin: "0px 5px" }}>||</p>
                  <p style={{ margin: "unset" }}>
                    {day}-{month + 1}-{year}
                  </p>
                </Link>
              );
            })
          : ""}
      </div>
    </div>
  );
};

const MovieBlock = ({ cinema }) => {
  const { danhSachPhim = [] } = cinema;
  return (
    <div style={{ paddingBottom: "20px" }}>
      {Array.isArray(danhSachPhim) && danhSachPhim.length
        ? danhSachPhim.map((movie, index) => {
            return <Movie movieData={movie} />;
          })
        : ""}
    </div>
  );
};

export default MovieBlock;
