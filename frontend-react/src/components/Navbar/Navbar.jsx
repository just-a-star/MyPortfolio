import React, { useEffect, useState } from "react";
// import react icons for navbar
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalScrollHeight = document.body.scrollHeight;

      if (windowHeight + scrollPosition >= totalScrollHeight) {
        // When the bottom is reached, set rotation to 360 degrees
        setRotation(360);
      } else {
        // Adjust this multiplier to change the speed of rotation
        const newRotation = (scrollPosition * 0.1) % 360;
        setRotation(newRotation);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.main_logo3} alt="logo" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.3s ease" }} />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills"].map((item) => (
                <li key={item}>
                  {" "}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {" "}
                    {item}{" "}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
