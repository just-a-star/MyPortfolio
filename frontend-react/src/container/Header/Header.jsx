import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap } from "../../wrapper";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.85 }} className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🙏</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I'm</p>
              <h1 className="head-text">Bintang</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Developer</p>
            <p className="p-text">Tech Enthusiast</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.85, delayChildren: 0.85 }} className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="buletan foto profil"
        />
      </motion.div>
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
        {[images.sass, images.react, images.javascript, images.compose].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
