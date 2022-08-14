/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { BiUser, BiBookAlt } from 'react-icons/bi';
import { BsBookmarkStar } from 'react-icons/bs';
import { SiCodeproject } from 'react-icons/si';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <SiCodeproject />
      </a>
      <a
        href="#service"
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#service' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#achievement"
        onClick={() => setActiveNav('#achievement')}
        className={activeNav === '#achievement' ? 'active' : ''}
      >
        <BsBookmarkStar />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
