import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/image-ppl.JPG';
import CV from '../assets/K.M.L.P.K.Kappagoda2.pdf';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Define motion variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
};

const Hero = () => {
  return (
    <div className=' bg-black text-white py-16' id='home'>
            <div className=' container mx-auto px-8 mt:px-16 lg:px-24 '>
              <div className='mt-20 flex flex-col md:flex-row items-center md:space-x-36' >
        {/* Text and Info Section */}
        <motion.div
          className="flex-1 text-center md:text-left mb-8 md:mb-0"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-normal text-gray-300 mb-16">WELCOME TO MY WORLD</h4>
            <h1 className="text-4xl font-bold">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                LAHIRU KAPPAGODA
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mt-5">Full-Stack Developer</h2>
            <p className="mt-5 text-gray-300 text-xl">
              I am a passionate full-stack developer specializing in building modern and responsive web applications.
              I create seamless user experiences across the frontend and backend.
            </p>
            <div className="mt-5">
              <h4 className="text-lg font-normal text-gray-300 mb-5">FIND ME IN</h4>
              <div className="flex justify-center md:justify-start gap-6">
                <motion.div
                  whileHover={iconVariants.hover}
                  className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                >
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-1xl text-green-400 hover:text-white" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={iconVariants.hover}
                  className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                >
                  <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-1xl text-green-400 hover:text-white" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={iconVariants.hover}
                  className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                >
                  <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-1xl text-green-400 hover:text-white" />
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="mt-8 space-x-4">
              <motion.a
                href={CV}
                download
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
        

        {/* Image Section */}
        <motion.div
           className=' mx-auto mb-8 w-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={HeroImage}
            alt="Lahiru Kappagoda"
            className="w-80 h-80 md:w-100 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
