import React, { Component } from 'react';
import NewsCard from "../NewsCard/news-card";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news_data: [
                {
                    id: 1,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/nine-perfect-strangers-nicole-kidman-samara-weaving-social-featured.jpg?q=50&fit=crop&w=943&h=525&dpr=1.5",
                    title: "'Nine Perfect Strangers' Review: The Hulu Limited Series Blends Comedy, Drama, and Horror for One Intriguing TV Smoothie",
                    intro: "Melissa McCarthy, Manny Jacinto, and Regina Hall particularly shine in this new limited series created by David E. Kelley and John Henry Butterworth."
                },
                {
                    id: 2,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/5-Failed-Marvel-Adaptations.jpg?q=50&fit=crop&w=943&h=525&dpr=1.5",
                    title: "Marvel's Real Life 'What If...?': 5 Failed Movie Adaptations That Tease a Very Different Kind of MCU",
                    intro: "Make Towel Thor canon, you cowards!"
                },
                {
                    id: 3,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/The_Witcher__Nightmare_of_the_Wolf_social-trailer.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5",
                    title: "'The Witcher: Nightmare of the Wolf' Trailer Reveals a Swashbuckling Anime Prequel",
                    intro: "Toss a coin to an animated witcher."
                },
                {
                    id: 4,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/Movies-About-Comedy.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5",
                    title: "A History of Movies About Comedy, Many of Which Are Not Comedies",
                    intro: "A comic walks onto a film set..."
                },
                {
                    id: 5,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2016/07/suicide-squad-joker-harley-quinn-jared-leto-margot-robbie.jpg?q=50&fit=crop&w=750&dpr=1.5",
                    title: "What 'The Suicide Squad' Gets Right About Harley Quinn",
                    intro: "Or, how James Gunn's antihero movie brings one woman's emancipation arc full circle."
                },
                {
                    id: 6,
                    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/ryan-reynolds-google-questions-social.jpg?q=50&fit=crop&w=943&h=515&dpr=1.5",
                    title: "Watch: Ryan Reynolds Answers Popular Google Questions About Himself",
                    intro: "'Free Guy' opens in theaters this weekend."
                }
            ]
        }
    }

    renderNews = () => {
        return this.state.news_data.map((item) => {
            return <NewsCard key={item.id} news={item} />
        })
    }

    render() {
        return (
            <div className="news_row row">
                {this.renderNews()}
            </div>
        );
    }
}

export default News;
