// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vedant Potdar
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering graduate passionate about creating innovative web and mobile solutions. 
            Always eager to take on new challenges and learn cutting-edge technologies.
          </p>

          <div className="flex justify-center gap-6">
            {['GitHub', 'LinkedIn', 'Email'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-500">
              © 2025 Vedant Potdar | Built with ❤️ using React.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;