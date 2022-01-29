import React, {Component} from 'react';
import Header from '../common/Header';
import imageUrl from '../assets/img/Home.jpg';

//Reusable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Timeline from '../common/Timeline';

class Home extends Component {

    render() {

        return (
            <div>
                <Header 
                    title="Welcome to our studio!"
                    subtitle="IT'S NICE TO MEET YOU!"
                    buttonText="Tell me more"
                    showButton={true}
                    link="/services"
                    image={imageUrl}
                />
                <Services />
                <Portfolio />
                <Timeline /> 
            </div>
        )
    }
}

export default Home;