import React, {Component} from 'react';

class About extends Component {
    render(){
        return(
            <div>
                <section className="page-section" id="timeline">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Timeline</h2>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="img/about/UCDavis.jpeg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2015-2017</h4>
                                    <h4 className="subheading">UC Davis</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Bachelor of Sciences in Computer Science</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="img/about/voxpro.jpeg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Fall & Winter 2017</h4>
                                    <h4 className="subheading">VoxPro</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Right after I graduated in the summer of 2017, I got a job working in technical support for
the Google subsidiary specializing in home automation, Nest. I was part of the HVAC
support team who answered customer questions and concerns as well as performed over
the phone installations. This gave me valuable experience in effective communication of
technical concepts as well as troubleshooting customer issues over the phone.</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="img/about/ARS.jpeg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Spring & Summer 2018</h4>
                                    <h4 className="subheading">American Recovery Services</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">At American Recovery Services, I created a new piece of software which
reconciled ARS’s database records with one of their business partners while
reporting its actions through a custom GUI interface on a daily cycle. For this
project I used the .NET framework, postgresSQL, and their partner’s RESTful API.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="img/about/EandM.jpeg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2019-2020</h4>
                                    <h4 className="subheading">EandM</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">At EandM, I used the ASP.NET web framework alongside MS SQL Server in order
to provide company salespeople a performant and dynamic web-based tool to
drive sales. My goal was to minimize the time company personnel spend on
searching and organizing their supplier and customer data, so that they could
maximize their time spent helping and talking with their customers.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Hire
                                    <br />
                                    Me
                                    <br />
                                    Today!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        )
    }
}

export default About;