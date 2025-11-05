// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myphoto from '../image/myimg.jpeg';
import resumePDF from '../Vedant_Potdar_9545099800.pdf';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={myphoto}
                    alt="Vedant Potdar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Computer Engineering Graduate & Software Developer</h3>

            <p className="text-lg leading-relaxed">
              Computer Engineering graduate passionate about web and mobile app development using
              <span className="text-blue-500 font-semibold"> React.js, Express.js, and React Native</span>.
              Currently building live applications at Infocloud IT Services.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <p><strong>Name:</strong> Vedant Potdar</p>
                <p><strong>Experience:</strong> Software Developer Intern</p>
                <p><strong>Location:</strong> India</p>
              </div>
              <div className="space-y-2">
                <p><strong>Email:</strong> vedantpotdar@gmail.com</p>
                <p><strong>Phone:</strong> +91 93241 72905</p>
                <p><strong>Availability:</strong> Open to opportunities</p>
              </div>
            </div>

            <motion.a
              href={resumePDF} // Update with actual resume path
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors mt-6"
            >
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;