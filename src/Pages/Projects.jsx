import React, { useState } from 'react';
import { projects, categories } from '../Utils/projectData'

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5, type: 'spring' }
    })
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Placeholder for image backgrounds
    const getImageClass = (image) => {
        const colors = [
            "bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600",
            "bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600",
            "bg-gradient-to-br from-red-900 via-red-700 to-orange-600",
            "bg-gradient-to-br from-green-900 via-green-700 to-emerald-600",
            "bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-600",
            "bg-gradient-to-br from-yellow-900 via-yellow-700 to-amber-600"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Check out my latest work and professional projects
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl backdrop-blur-xl transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/30'
                                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                                }`}
                        >
                            <span className='text-red-300'>{category.icon}</span>
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                y: -10,
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderColor: '#ec4899'
                            }}
                            className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                {hoveredProject === project.id && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex gap-4"
                                        >

                                            {/* GitHub & Live buttons */}

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                                            >
                                                <FaGithub className="text-xl" />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                                            >
                                                <FaExternalLinkAlt className="text-xl" />
                                            </a>


                                        </motion.div>
                                    </div>
                                )}
                            </div>


                            {/* Project Details */}
                            <div className="p-6">
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm text-gray-400 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <span className="text-sm px-3 py-1 bg-red-900/30 text-red-300 rounded-full">
                                        {categories.find(c => c.id === project.category)?.name}
                                    </span>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-red-300 transition-colors"
                                        >
                                            <FaGithub className="text-xl" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-red-300 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-5xl mb-4 text-gray-600">😕</div>
                        <h3 className="text-2xl text-gray-400 mb-2">No projects found</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6">
                            There are no projects in this category. Try selecting a different category.
                        </p>
                        <button
                            onClick={() => setActiveCategory("all")}
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-medium hover:from-red-600 hover:to-pink-700 transition-all"
                        >
                            View All Projects
                        </button>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-24"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        I'm available for freelance work. Let's collaborate to bring your ideas to life!
                    </p>
                    <Link
                        to='/contact'
                        className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-bold text-lg inline-block hover:from-red-600 hover:to-pink-700 transition-all shadow-lg shadow-red-500/30"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
