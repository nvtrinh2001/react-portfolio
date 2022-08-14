import React from 'react';
import './header.css';
import CTA from './CTA';
import ProfileImage from '../../assets/me.png';
import SocialNetwork from './SocialNetwork';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello, I'm</h4>
        <h1>Trinh V. Nguyen</h1>
        <h4 className="text-light">Fullstack Blockchain Developer</h4>
        <CTA />
        <SocialNetwork />

        <div className="profile-img">
          <img src={ProfileImage} alt="profile" className="profile__img-link" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
