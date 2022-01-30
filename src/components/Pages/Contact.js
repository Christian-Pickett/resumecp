import React, {Component} from 'react';


class Contact extends Component {

    render() {
        return (        
            <section id="contact" class="contact-section">
                <div class="contact-section-header">
                    <h2>Contact me!</h2>
                    <p>Looking forward to working with you.</p>
                </div>
                <div class="contact-links">
                    <a
                        href="https://www.linkedin.com/in/christian-pickett-034ab7172/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn contact-details"
                        ><i class="fab fa-linkedin"></i> linkedin</a
                    >
                    <a
                        id="profile-link"
                        href="https://github.com/christian-pickett"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn contact-details"
                    >
                    <i class="fab fa-github"></i> GitHub</a>
                    <a href="mailto:christianpickett@protonmail.com" class="btn contact-details">
                    <i class="fas fa-at"></i> email</a>
                    <a href="tel:707-975-2865" class="btn contact-details">
                    <i class="fas fa-mobile-alt"></i> (707)975-2865</a>        
                </div>
            </section>
        )
    }
}

export default Contact;