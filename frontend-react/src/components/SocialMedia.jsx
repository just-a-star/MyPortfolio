import React from "react";
import { BsYoutube, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.youtube.com/@bintangrahmatullah3867/videos" target="_blank" rel="noopener noreferrer">
          <BsYoutube />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/bint.rahmatullah" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/just-a-star" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/bintang-rahmatullah/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
