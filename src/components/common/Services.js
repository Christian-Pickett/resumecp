import React, {Component} from 'react';
import SingleService from './SingleService';


const services = [
    {title: 'Data Analysis', description: '', icon: 'fa-database' },
    {title: 'Server Maintenance', description: '', icon: 'fa-server' },
    {title: 'Business Logic', description: '', icon: 'fa-business-time' },
    {title: 'Responsive Design', description: '', icon: 'fa-laptop' },
    {title: 'Web Security', description: '', icon: 'fa-shield-alt' },
    {title: 'Technical Support', description: '', icon: 'fa-headset' }
]

class Services extends Component {

    render(){
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">My Services</h2>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                            return <SingleService {...service} key={index} />
                        })} 
                    </div>
                </div>
            </section>
        );
    }

}

export default Services;