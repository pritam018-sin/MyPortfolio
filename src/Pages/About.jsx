import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaGraduationCap, FaTrophy, FaTools } from 'react-icons/fa';
import { education, achievements, skills } from '../Utils/aboutData';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, type: 'spring' }
  })
};

const About = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-7xl mx-auto text-white'>

        {/* ABOUT TITLE */}
        <h1 className='text-center text-4xl sm:text-5xl font-bold mb-12 underline underline-offset-4 text-red-300'>
          About Me
        </h1>

        {/* EDUCATION */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-6 flex items-center gap-3 text-white'>
            <FaGraduationCap className='text-red-300' /> Education
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {education.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='p-6 rounded-xl backdrop-blur-xl bg-white/7 border border-white/10 hover:border-gradient-to-r from-pink-500 to-red-500 hover:border-2 hover:bg-white/9 shadow-xl transition-all duration-300 cursor-pointer'
              >
                <h3 className='text-2xl text-red-400 font-semibold mb-1'>{item.degree}</h3>
                <p className='text-lg text-red-200 mb-1'>{item.field}</p>
                <p className='text-sm text-gray-300 mb-1'>{item.institution}</p>
                <p className='text-sm italic mb-2'>{item.year}</p>
                <p className='text-md text-gray-300'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-6 flex items-center gap-3 text-white'>
            <FaTrophy className='text-yellow-400' /> Achievements
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-gradient-to-r from-yellow-400 to-orange-400 hover:border-2 shadow-xl transition-all duration-300 cursor-pointer hover:bg-white/9'
              >
                <h3 className='text-lg font-bold mb-1 text-red-400'>{item.title}</h3>
                <p className='text-sm italic text-yellow-300 mb-2'>{item.year}</p>
                <p className='text-md text-gray-300'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-6 flex items-center gap-3 text-white'>
            <FaTools className='text-green-400' /> Skills
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-wrap gap-3'
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className='px-4 py-2 text-md rounded-full bg-white/10 border border-white/10 text-white hover:border-red-400 hover:text-red-200 hover:bg-red-400/20 transition-all duration-300 cursor-pointer'
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default About;
