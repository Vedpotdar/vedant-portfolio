// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const projects = [
        {
            title: 'Hostel Room Organizer',
            description: 'MERN stack application for efficient hostel management with room allocation, student records, and administrative features.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Vedpotdar/Room_Organizer',
            demo: null,
            image: '/api/placeholder/400/250'
        },
        {
            title: 'Portfolio Website',
            description: 'Modern, responsive portfolio website built with React.js, featuring smooth animations and dark mode functionality.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com/Vedpotdar/my_portfolioweb',
            demo: null,
            image: '/api/placeholder/400/250'
        },
        {
            title: 'Enterlyze Web',
            description: 'Complete visitor management solution for Infocloud with web.',
            tech: ['React.js', 'Express.js'],
            github: null,
            demo: {
                web: 'https://infocloud.enterlyze.com',
                app: 'https://play.google.com/store/apps/details?id=com.infocloudic.visitormanagement'
            },
            image: '/api/placeholder/400/250'
        },
        {
            title: 'Enterlyze Application',
            description: 'Complete visitor management solution for Infocloud with mobile applications.',
            tech: ['React Native','Node.js', 'Express.js'],
            github: null,
            demo: {
                app: 'https://play.google.com/store/apps/details?id=com.infocloudic.visitormanagement'
            },
            image: '/api/placeholder/400/250'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Code
                                        </motion.a>
                                    )}

                                    {project.demo && (
                                        <motion.a
                                            href={project.demo.web || project.demo.app}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;