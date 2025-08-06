import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, categories } from '../Utils/skillData';
import { FaCode, FaStar, FaRocket, FaLayerGroup, FaChartBar } from 'react-icons/fa';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: 'spring' }
  })
};

const progressVariant = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Skill data with proficiency levels and categories

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className='min-h-screen mt-24'>
      <div className='max-w-7xl mx-auto text-white'>
        
        {/* Header with Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500'>
            Technical Expertise
          </h1>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Skills I've mastered through real-world projects and continuous learning
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <span className='text-red-300'>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Visualization */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {/* Radial Charts */}
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
              {filteredSkills.slice(0, 6).map((skill, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    y: -10,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: '#ec4899'
                  }}
                  className='p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl cursor-pointer'
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32 mb-4'>
                      <svg className='w-full h-full' viewBox='0 0 100 100'>
                        {/* Background circle */}
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="#1f2937" 
                          strokeWidth="8" 
                        />
                        {/* Progress circle */}
                        <motion.circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="url(#gradient)" 
                          strokeWidth="8" 
                          strokeLinecap="round"
                          strokeDasharray="283"
                          strokeDashoffset={283 - (283 * skill.level) / 100}
                          initial={{ strokeDashoffset: 283 }}
                          animate={{ strokeDashoffset: 283 - (283 * skill.level) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <div className='text-2xl text-red-300'>{skill.icon}</div>
                        <div className='text-xl font-bold text-white mt-1'>{skill.level}%</div>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-center text-red-300'>{skill.name}</h3>
                    <span className='text-sm text-gray-400 mt-1'>{skill.projects} projects</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/20 border border-white/10 shadow-xl h-full'
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaStar className='text-yellow-400 text-xl' />
              <h2 className='text-2xl font-bold text-white'>Skill Details</h2>
            </div>
            
            {hoveredSkill ? (
              <div className='animate-fadeIn'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='text-4xl text-red-300'>{hoveredSkill.icon}</div>
                  <div>
                    <h3 className='text-2xl font-bold text-red-300'>{hoveredSkill.name}</h3>
                    <span className='text-sm px-2 py-1 bg-red-900/30 text-red-300 rounded-full'>
                      {hoveredSkill.category}
                    </span>
                  </div>
                </div>
                
                <div className='mb-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-gray-400'>Proficiency</span>
                    <span className='font-bold text-red-300'>{hoveredSkill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-3'>
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${hoveredSkill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div className='mb-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-gray-400'>Projects Completed</span>
                    <span className='font-bold text-red-300'>{hoveredSkill.projects}</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(hoveredSkill.projects / 18) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div className='flex items-center gap-2 mb-4'>
                  <span className='text-gray-400'>Experience Level:</span>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${
                          i < Math.floor(hoveredSkill.level / 20) 
                            ? 'text-yellow-400' 
                            : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className='bg-gray-800/50 p-4 rounded-lg border border-gray-700'>
                  <h4 className='font-bold text-gray-300 mb-2'>Key Projects:</h4>
                  <ul className='text-gray-400 text-sm space-y-1'>
                    {[...Array(3)].map((_, i) => (
                      <li key={i} className='flex items-start'>
                        <span className='text-red-400 mr-2'>•</span>
                        <span>{hoveredSkill.projectName[i]} using {hoveredSkill.name} in production environment</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center h-full py-12 text-center'>
                <FaChartBar className='text-5xl text-gray-600 mb-4' />
                <h3 className='text-xl text-gray-500 font-medium mb-2'>Hover Over a Skill</h3>
                <p className='text-gray-600 max-w-xs'>
                  Select and hover over any skill to see detailed information and metrics
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* All Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className='flex items-center gap-3 mb-6'>
            <FaLayerGroup className='text-red-300 text-xl' />
            <h2 className='text-2xl font-bold text-white'>All Technical Skills</h2>
          </div>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: '#ec4899'
                }}
                className={`p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col items-center cursor-pointer transition-all ${
                  hoveredSkill?.name === skill.name ? 'ring-2 ring-pink-500' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(skill)}
              >
                <div className='text-3xl text-red-300 mb-2'>{skill.icon}</div>
                <h3 className='text-lg font-bold text-center text-white'>{skill.name}</h3>
                <div className='text-xs text-gray-400 mt-1'>{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;