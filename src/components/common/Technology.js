import React, {Component} from 'react';
import SingleService from './SingleService';


const services = [
    {title: 'JavaScript', description: '', icon: 'fab fa-js' },
    {title: 'Node.js', description: '', icon: 'fab fa-node' },
    {title: 'React', description: '', icon: 'fab fa-react' },
    {title: 'Linux', description: '', icon: 'fab fa-linux' },
    {title: 'AWS', description: '', icon: 'fab fa-aws' },
    {title: 'git', description: '', icon: 'fab fa-git-alt' }
]

class Technology extends Component {

    render(){
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">My Stack</h2>
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

export default Technology;