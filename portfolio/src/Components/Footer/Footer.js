import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">
                <p>
                Ⓒ 2023 Vikash. All rights reserved
                </p>
            </div>

            <ul className='footer-social-media'>
                <li>
                    <a href="https://www.linkedin.com/in/vikash-kumar-b00b35212" target='_blank'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-youtube'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer