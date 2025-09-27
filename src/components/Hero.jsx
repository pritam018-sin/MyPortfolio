import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';
import profilePic from "../assets/pritam.png";
import { FaDownload } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="max-w-7xl min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-20 gap-10 mx-auto relative overflow-hidden container">

      {/* Left Section - Text */}
      <motion.div
        className="z-10 text-left w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="  text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 ">
          Hi, I am <span className="bg-gradient-to-r from-orange-500 via-red-400 to-red-500 text-transparent bg-clip-text">Pritam Singh,</span>
        </h1>

        <TypeAnimation
          sequence={[
            "a Passionat Learner", 2000,
            "a MERN Stack Developer", 2000,
            "a DSA Explorer", 2000,
            "a Tech Enthugiast"

          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-red-200 via-red-300 to-red-400 text-transparent bg-clip-text"
        />

        <p className="mt-6 text-white/60 max-w-xl">
          Welcome to my premium digital portfolio where I showcase what I've built, what I'm learning, and what’s coming next.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex gap-2">
          <Link to="/contact">
            <button className=' bg-green-500/20 text-green-300 border rounded-lg py-2 px-2 border-green-400/30 w-fit hover:bg-green-600 hover:text-white' >
              Hire Me!
            </button>
          </Link>
            <button className=' bg-red-500/20 text-red-300 border rounded-lg py-2 px-2 border-red-400/30 w-fit hover:bg-red-600 hover:text-white' >
              <motion.a
                href="/Resume_pritam.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Resume</span>
                <FaDownload className="inline-block ml-2" />
              </motion.a>
            </button>
          
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="z-10 p-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-full overflow-hidden border  border-red-500 hover:border-red-400 transition-all duration-300 shadow-xl backdrop-blur-md bg-white/10">
          <img
            src={profilePic}
            alt="Pritam Singh"
            className="w-96 h-96 object-cover rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
