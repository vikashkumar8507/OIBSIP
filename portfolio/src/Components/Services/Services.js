import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div className='services-container'>
            <div className="services-list-container">
                {/* desc */}
                <div className="services-desc-container">
                    <h1>
                        My Awesome <span>Services</span>
                    </h1>
                    <p>
                        I provide services like full stack web development and cloud computing. I am a MERN full stack developer and i am working on personal mern stack projects for few months. I have learnt HTML, CSS, JavaScript, Bootstrap, jQuery, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose and MySQL. 
                    </p>
                    <a href="https://www.linkedin.com/in/vikash-kumar-b00b35212" target='_blank'><button>Hire Me</button></a>
                </div>

                {/* item */}

                <div className="service-item-container">
                    <div className="services-item">
                        <i className='fa-solid fa-code'></i>
                        <div className="item-desc">
                            <h3>Web Development</h3>
                            <p>I am a MERN full stack developer and i am working on personal mern stack projects for few months. I have learnt HTML, CSS, JavaScript, Bootstrap, jQuery, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose and MySQL.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-desktop'></i>
                        <div className="item-desc">
                            <h3>Cloud Computing</h3>
                            <p>I have learned basics of few AWS services like AWS S3, AWS Amplify, AWS lambda, AWS EC2</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-cloud'></i>
                        <div className="item-desc">
                            <h3>Skills</h3>
                            <p>HTML, CSS, JavaScript, Bootstrap, jQuery, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose, MySQL, Amazon AWS </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services