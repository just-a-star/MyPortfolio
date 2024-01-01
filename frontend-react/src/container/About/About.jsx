import React, { useState, useEffect } from "react";
import "./About.scss";
import { images } from "../../constants";
import { urlFor, client } from "../../clients";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// const abouts = [
//   {
//     title: "Web Development",
//     description:
//       "I have experience building websites using JavaScript, React, HTML, CSS, and Bootstrap. I have also worked with Node.js, Express, and MongoDB to build full stack web applications.",
//     imgURL: images.about01,
//   },
//   {
//     title: "Android Development",
//     description: "I have experience in android development using Kotlin and Java. Used jetpack compose for UI and MVVM architecture for the app architecture.",
//     imgURL: images.about02,
//   },
//   {
//     title: "Game Development",
//     description:
//       "I have experience in game development using Unity and C#. Won 1st place in a game development competition. I Mainly work on the game logic and mechanics.",
//     imgURL: images.about03,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div>
      <h2 className="head-text">
        About
        <span> Me </span>
        {/* <br />
        <span>and here</span> */}
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
