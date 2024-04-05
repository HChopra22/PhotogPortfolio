import React, {useState, useEffect} from 'react';

import Socials from './Socials';

import Logo from '../img/header/Logo-normal.png'
import LogoDarkMode from '../img/header/logo-dark.png'
import MobileNav from './MobileNav'

import {BsFillSunFill, BsMoonFill} from 'react-icons/bs'

import { Link } from 'react-router-dom';

const Header = () => {
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
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/*Logo*/}
        <Link to={'/'} className='max-w-[200px]'>
          {theme === 'light' ? (
          <img src={Logo} alt='' />
          ) : (
            <img src={LogoDarkMode} />
          )}
        </Link>
        {/**navigation*/}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
        </nav>
        <nav className='hidden lg:flex'>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
        </nav>
        <nav className='hidden lg:flex'>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
        </nav>
        <nav className='hidden lg:flex'>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
        <nav className='hidden lg:flex'>
          <button onClick={handleThemeSwitch} className='p-2 bg-black text-white rounded-full w-8 h-8 flex justify-center items-center dark:bg-white dark:text-black'>
            {
              theme === 'light' ? <BsMoonFill/> : <BsFillSunFill></BsFillSunFill>}
          </button>
        </nav>
      </div>
        {/* socials */}
        <Socials />
        {/*Mobile Nav */}
        <MobileNav />
    </header>
  )
};

export default Header;
