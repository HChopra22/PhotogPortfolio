import React, {useState, useEffect} from 'react';

import { IoMdClose } from 'react-icons/io'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'

import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

//menu variant
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show : {
    x: 0,
    transition: {
      ease: [0.6,0.01,-0.05, 0.9]
    }
  }
}

const MobileNav = () => {
  const [theme, setTheme] = useState('light');

  useEffect(()=> {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light')
    }
  }, [])

useEffect(()=> {
  const html = document.querySelector('html')
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark')
    setTheme('dark')
  } else {
    html.classList.remove('dark')
    setTheme('light')
  }
},[theme])

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      {/*OpenNav */}
      <div onClick={()=> setOpenMenu(true)} 
      className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
          {/* menu */}
          <motion.div variants={menuVariants}
           initial='hidden'
           animate={openMenu ? 'show' : ''}
           className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
            {/*icon */}
            <div 
            onClick={() => setOpenMenu(false)}
            className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
              <IoMdClose/>
            </div>
            {/*menu list*/}
            <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary'>
              <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
                <li>
                <button onClick={handleThemeSwitch} className='p-4 bg-black text-white rounded-full w-12 h-12 flex justify-center items-center dark:bg-white dark:text-black'>
            {
              theme === 'light' ? <BsMoonFill/> : <BsFillSunFill></BsFillSunFill>

              }
          </button>
                </li>
            </ul>
          </motion.div>
    </nav>
  )
};

export default MobileNav;
