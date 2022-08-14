import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const SocialNetwork = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://linkedin.com/nvtrinh2001"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/nvtrinh2001"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://facebook.com/nvtrinh2001"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
