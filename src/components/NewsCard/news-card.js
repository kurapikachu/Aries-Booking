import React, { Component } from 'react';
import "./news-card.css";

class NewsCard extends Component {

    news = this.props.news;

    render() {
        return (
            <div className="news__card col-md-6">
                <div className="news__wrapper"
                    style={{ background: `url(${this.news.image}) center/cover no-repeat` }}>
                    <div className="data">
                        <div className="content">
                            <h1 className="title">
                                <a href="#">{this.news.title}</a>
                            </h1>
                            <p className="text">{this.news.intro}</p>
                            <a href="#" className="button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard;