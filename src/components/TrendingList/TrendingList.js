import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./carousel-movie.css"
import MovieCard from "../MovieCard";

export default class TrendingList extends Component {

    trendingMovieList = [
        {
            "maPhim": 7852,
            "tenPhim": "hiếu thông chốt đắklắk ",
            "biDanh": "hieu-thong-chot-daklak",
            "trailer": "undefined",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/hieu-thong-chot-daklak_gp01.jpeg",
            "moTa": "abc",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-01T00:00:00",
            "danhGia": 10
        },
        {
            "maPhim": 7853,
            "tenPhim": "Anh là niềm kiêu hãnh của em",
            "biDanh": "anh-la-niem-kieu-hanh-cua-em",
            "trailer": "https://www.youtube.com/embed/DpCt6XkIIX0",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/anh-la-niem-kieu-hanh-cua-em_gp01.jpeg",
            "moTa": "Em là niềm kiêu hãnh của anh xoay quanh một chuyện tình lãng mạn mà vẫn không mất đi chất hiện thực giữa đại minh tinh và kĩ sư hàng không vũ trụ. Hai người tưởng chừng chẳng có mối liên hệ gì với nhau, nhưng thực ra chuyện xưa giữa Kiều Tinh Tinh và Vu Đồ đã đi từ thời thanh xuân niên thiếu đến khi trưởng thành.  Thời cấp ba, Kiều Tinh Tinh và Vu Đồ đều có tình cảm với nhau, nhưng vì hoài bão ở tương lai phía trước, bọn họ giấu tình cảm ngây thơ đó ở trong lòng. Mười năm trôi qua, Kiều Tinh Tinh đã trở thành đại minh tinh nổi tiếng, bao người vây quanh. Mà một Vu Đồ từng là học bá, là đại thần, là ngôi sao sáng thời trung học, nay đã mờ nhạt trong biển người rộng lớn. Cách biệt nhiều năm, Kiều Tinh Tinh bất ngờ gặp lại Vu Đồ khi chơi game Vương Giả Vinh Diệu. Nam thần từng từ chối cô thời đi học… Thời gian trôi nhanh, cậu vẫn tỏa sáng rực rỡ trong lòng tớ như ngày nào, còn tớ bây giờ có thể trở thành niềm kiêu hãnh của cậu được hay không?  Trên con đường theo đuổi giấc mơ phải kiên trì nỗ lực, cuộc gặp gỡ kì",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-02T10:35:31.87",
            "danhGia": 10
        },
        {
            "maPhim": 7861,
            "tenPhim": "Minion 3",
            "biDanh": "minion-3",
            "trailer": "https://youtu.be/v20G-Z1kKD8",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/minion_gp01.jpg",
            "moTa": "The Dialog variant is displayed in the center of the page, useful for mobile or small interfaces.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-03T12:17:14.843",
            "danhGia": 10
        },
        {
            "maPhim": 7862,
            "tenPhim": "Cruella",
            "biDanh": "cruella",
            "trailer": "https://www.youtube.com/embed/gmRKv7n2If8",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/cruella_gp01.jpg",
            "moTa": "Cruella là một bộ phim hài - chính kịch tội phạm đã được ra mắt của Mỹ dựa trên nhân vật Cruella de Vil, được giới thiệu trong tiểu thuyết Trăm linh một chú chó đốm của nhà văn Dodie Smith năm 1956 và bộ phim hoạt hình Một trăm linh một chú chó đốm của hãng Walt Disney ra mắt năm 1961 và được sản xuất bởi Walt Disney Pictures",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-08T14:47:44.097",
            "danhGia": 10
        },
        {
            "maPhim": 7863,
            "tenPhim": "GHAJINI",
            "biDanh": "ghajini",
            "trailer": "https://www.youtube.com/embed/-FmWuCgJmxo",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/ghajini_gp01.jpeg",
            "moTa": "Bộ phim kể về Sanjay Ramasamy (Aamir Khan) - chủ tịch của 1 tập đoàn máy tính lớn đem lòng yêu cô gái tên Kalpana Shetty (Asin) - người tự tung tin đồn cô chính là bạn gái của anh, dù cả hai chưa từng gặp mặt nhau. Sau đó, hai người vô tình chạm mặt nhau và chuyện tình của hai người bắt đầu từ đây. Những tưởng câu chuyện tình của họ sẽ kết thúc với một đám cưới hạnh phúc, nhưng không...",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-08T14:48:59.037",
            "danhGia": 10
        },
        {
            "maPhim": 7874,
            "tenPhim": "Avatar 2",
            "biDanh": "avatar-2",
            "trailer": "https://www.youtube.com/embed/M8Mi0elohJw",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/avatar-2_gp01.jpg",
            "moTa": "Avatar 2 là bộ phim khoa học viễn tưởng sắp ra mắt của Mỹ do James Cameron đạo diễn và 20th Century Studios sản xuất. Đây là bộ phim thứ hai trong loạt phim Avatar, sau Avatar.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-04-02T00:00:00",
            "danhGia": 10
        },
        {
            "maPhim": 7875,
            "tenPhim": "Chị Hằng Mổ Mắt",
            "biDanh": "chi-hang-mo-mat",
            "trailer": "https://www.youtube.com/embed/2UYxgN-k6wk",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/chi-hang-mo-mat_gp01.png",
            "moTa": "Bà Nguyễn Phương Hằng (vợ đại gia Huỳnh Uy Dũng, biệt danh Dũng \"lò vôi\") là một nhà kinh doanh có tiếng, đã sát cánh cùng chồng để xây dựng và phát triển Công ty cổ phần Đại Nam.\nNgười phụ nữ chưa từng thất bại trên thương trường\n\nMới đây, bà Nguyễn Phương Hằng gây chú ý khi gửi đơn tố cáo “thần y” Võ Hoàng Yên (SN 1975, quê Cà Mau, tạm trú tỉnh Bình Thuận) đã chiếm đoạt của vợ chồng bà hơn 200 tỷ đồng thông qua hoạt động cứu trợ bà con miền Trung trong đợt bão lũ vừa qua, qua việc xây một cơ sở thờ tự tại Bình Thuận và các hoạt động khác.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-08T14:47:58.44",
            "danhGia": 10
        },
        {
            "maPhim": 7884,
            "tenPhim": "World in the water",
            "biDanh": "world-in-the-water",
            "trailer": "https://www.youtube.com/embed/NpKbULrB9Z8",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/world-in-the-water_gp01.jpg",
            "moTa": "the story about a man and a woman and a children",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-09T22:39:30.937",
            "danhGia": 9
        },
        {
            "maPhim": 7895,
            "tenPhim": "Harry Potter and the Deathly Hallows",
            "biDanh": "harry-potter-and-the-deathly-hallows",
            "trailer": "https://www.youtube.com/embed/_EC2tmFVNNE",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/harry-potter-and-the-deathly-hallows_gp01.jpg",
            "moTa": "Part 1 begins as Harry, Ron and Hermione set out on their perilous mission to track down and destroy the secret to Voldemort's immortality and destruction-the Horcruxes. On their own, without the guidance of their professors or the protection of Professor Dumbledore, the three friends must now rely on one another more than ever. But there are Dark Forces in their midst that threaten to tear them apart",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-25T00:00:00",
            "danhGia": 10
        }
    ]

    renderMovieCard = () => {
        return this.trendingMovieList.map((movieObj) => {
            return <MovieCard movieObj={movieObj} />;
        });
    };

    render() {

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="container">
                <Slider {...settings}>
                    {this.renderMovieCard()}
                </Slider>
            </div>
        );
    }
}  //end of class
