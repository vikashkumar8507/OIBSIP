import React from 'react';
import "./Header.css";
import Typical from 'react-typical';
import profileImg from "../../assets/my6.png";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-list-container">
        {/* {header content} */}
        <div className='header-content'>
          <h1>Hi 𝕴 Am</h1>
          <h2 className='fullname'>Vikash Kumar</h2>
          <h2 className='anime-text'>
            I'm a {""}
            <Typical
              steps={[
                "Full Stack Developer 🫶🏼",
                1000,
                "MERN stack Developer 🤖", 1000,
                "Front-end Developer ✍🏼", 1000,
                "Back-end Developer 🪢", 1000,
              ]} loop={Infinity}
              wrapper='b' />
          </h2>
          <p>I am an undergraduate student of B.Tech 4th year at National Institute of Science and Technology Berhampur Odisha India. I am a passionate full stack developer eager to learn new technologies and contribute to the society. I am looking for a development role. </p>

          <div className='header-payment-container'>
            <a href="https://www.linkedin.com/in/vikash-kumar-b00b35212" target='_blank'><button>Hire Me</button></a>
            <i className='fa-brands fa-paypal'></i>
            <i className='fa-brands fa-cc-visa'></i>
            <i className='fa-brands fa-cc-mastercard'></i>
            <i className='fa-brands fa-cc-amex'></i>
          </div>
        </div>
        {/* image container */}
        <div className="profile-img-container">
          <img src={profileImg} alt="" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>

        </div>
      </div>
    </div>
  )
}

export default Header