import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/portfolio/index.jpeg';
import img2 from '../assets/portfolio/Leonhard_Euler.737565df.jpg';
import img3 from '../assets/portfolio/logo512.png';

const portfolio = [
    {title: 'Save The Wood', subtitle: 'Ludum Dare 43, Godot Engine', image: img1, link: "https://github.com/Christian-Pickett/SaveTheFire"},
    {title: 'Euler Project', subtitle: 'Computational Mathematics', image: img2, link: "https://github.com/Christian-Pickett/Euler_project"},
    {title: 'Personal Webpage', subtitle: 'AWS, React, Node.js', image: img3, link: "https://github.com/Christian-Pickett/resumecp"},
];

class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                </div>
                <div className="row">
                    {portfolio.map((item, index) => {
                        return <PortfolioItem {...item} key={index} />
                    })}
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio;