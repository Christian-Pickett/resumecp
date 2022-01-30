import React, {Component} from 'react';
import Header from '../common/Header';
import imageUrl from '../assets/img/Keyboard.jpg';

//Reusable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Timeline from '../common/Timeline';
import ContactMe from '../common/ContactMe';

class Home extends Component {

    render() {

        return (
            <div>
                <Header 
                    title="Welcome to my webpage!"
                    subtitle="Thank you for visiting."
                    buttonText="Tell me more"
                    showButton={false}
                    link="/services"
                    image={imageUrl}
                />
                <Services />
                <Portfolio />
                <Timeline /> 
                <ContactMe />
            </div>
        )
    }
}

export default Home;