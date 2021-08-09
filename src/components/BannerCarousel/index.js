import React, { Component } from 'react';


class BannerCarousel extends Component {
    render() {
        return (
            <div id="banner-carousel" className="carousel slide carousel-fade banner-carousel" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16190592773054.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/03/thien-than-ho-menh-16157904502407.jpg" alt="Four slide" />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#banner-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default BannerCarousel;