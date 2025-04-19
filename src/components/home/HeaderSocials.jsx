import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      {/* GitHub */}
      <a
        href='https://www.github.com/surajkumarsikhar'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href='https://www.linkedin.com/in/surajkumarsikhar/'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedinIn />
      </a>

      {/* Instagram */}
      <a
        href='https://instagram.com/_s_u_r__a__j_'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
