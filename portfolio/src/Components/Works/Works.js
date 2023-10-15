import React from 'react';
import "./Works.css";
import w1 from "../../assets/w8.png";
import w2 from "../../assets/w9.png";
import w3 from "../../assets/w7.png";
import w4 from "../../assets/w10.png";
import w5 from "../../assets/w11.png";
import w6 from "../../assets/w6.jpg";


const Works = () => {
  return (
    <div className="works-container">
        <h1>My Recent Works</h1>
        <div className="works-list-container">
            <div className="works-item">
                <a href="https://battery-api-omega.vercel.app/" target='_blank'><img src={w1} alt='work1'></img></a>
            </div>
            <div className="works-item">
                <a href="https://react-portfolio-vikash.vercel.app/" target='_blank'><img src={w2} alt='work2'></img></a>
            </div>
            <div className="works-item">
                <a href="https://github.com/vikashkumar8507/Nodemailer" target='_blank'><img src={w3} alt='work3'></img></a>
            </div>
            <div className="works-item">
            <a href="https://host-buss.vercel.app/" target='_blank'><img src={w4} alt='work4'></img></a>
            </div>
            <div className="works-item">
            <a href="https://serve-kart.vercel.app/" target='_blank'><img src={w5} alt='work5'></img></a>
            </div>
            <div className="works-item">
                <img src={w6} alt='work6'></img>
            </div>
        </div>
    </div>
  )
}

export default Works