import React, {Component} from "react";

class PortfolioItem extends Component {
    render(){
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link"  href={this.props.link}>

                    <img className="img-portfolio" src={this.props.image} alt="..." />
                </a>
                <div className="portfolio-caption"> 
                    <div className="portfolio-caption-heading">{this.props.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default PortfolioItem;