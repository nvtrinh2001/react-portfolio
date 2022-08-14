/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <div className="footer__message">THANK YOU FOR YOUR TIME</div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Technologies</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#achievement">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/nvtrinh2001">
          <BsLinkedin />
        </a>
        <a href="https://github.com/nvtrinh2001">
          <BsGithub />
        </a>
        <a href="https://facebook.com/nvtrinh2001">
          <BsFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Trinh V. Nguyen: All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
