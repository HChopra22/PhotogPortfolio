import React, { useState } from 'react';

import WomanImg from '../img/home/woman.png';

import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'

import {transition1} from '../transitions'

import {useTypewriter} from 'react-simple-typewriter'

const Home = () => {
  const [emoji] = useTypewriter({
    words: ['🖥️', '🎨', '📷'],
    loop: {},
  })
  return <motion.section initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition1} className='section'>
    <div className='container mx-auto h-full relative'>
      {/*img and text wrapper */}
        <div className='flex flex-col justify-center'>
          <motion.div
             initial={{opacity:0, y:'-50%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-50%'}} transition={transition1}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <p className='text-[26px] lg:text-[36px] font-primary dark:font-white mb-2 lg:mb-2'>Hello, I'm Harsh</p>
            <h1 className='h1'>Photographer <br/> & UX Designer</h1>
            <p className='text-[26px] lg:text-[36px] font-primary dark:font-white mb-4 lg:mb-12'>London, United Kingdom {emoji}</p>

            <Link to={'/contact'} className='btn mb-[30px]'>Hire Me</Link>
          </motion.div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div 
            initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={transition1}
            className='relative lg:-right-40 overflow-hidden'>
              <motion.img whileHover={{scale: 1.1}} transition={transition1} src={WomanImg} alt='Harsh Chopra' />
            </motion.div>
          </div>
        </div>
    </div>
  </motion.section>;
};

export default Home;
