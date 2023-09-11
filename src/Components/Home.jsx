import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
import sapna from "../assets/Images/new-sapna.png";

const Home = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#040c11";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    
    <motion.div
      className="text-section"
      initial={{ x: '-90%' }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: 1 }} // 1-second delay
    >
      <div className="name">Sapana jaiswal</div>
    </motion.div>
    <div className="text-runner" >
    <motion.div className="runner"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{
        repeat: Infinity,
        duration: 15,
        delay:2, // Adjust the duration as needed
        ease: 'linear', // Use linear easing for a smoother loop
      }}
    >
      Frontend developer
    </motion.div>
  </div>

    <motion.div
      className="image-setting"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1 }} // 2-second delay
    >
      <img className="responsive2" src={sapna} alt="Your Image" />
    </motion.div>
  <div className="button-group">
  <div className="button-outer1">
  <Link to='/about' className="button-27" role="button">About me</Link>
  </div>
  <div className="button-outer2">
  <Link to="/contact" className="button-28"  role="button">Contact</Link>
  </div>
  </div>
    </>
  );
};

export default Home;
