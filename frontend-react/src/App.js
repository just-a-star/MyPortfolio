import React from "react";
import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work, Contacts } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonial />
      <Contacts />
      <Footer /> */}
    </div>
  );
};

export default App;
