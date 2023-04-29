import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import {Link as LinkS} from 'react-scroll'
import {AnimatePresence,motion} from 'framer-motion'

function NavBar() {

  const [visible, setVisible] = useState(false)
  function handleMenu() {
    setVisible(prev=>!prev)
  }

  return (
    <nav className='nav'>
      <div className="nav--container">
        <img src={logo} alt="GPT3-logo" />
        <ul>
          <li><LinkS to='home' spy={true} smooth={true} offset={0} duration={700}>Home</LinkS></li>
          <li><LinkS to='about' spy={true} smooth={true} offset={0} duration={700}>What is CHAT-GPT?</LinkS></li>
          <li><LinkS to='openai' spy={true} smooth={true} offset={0} duration={700}>OpenAI</LinkS></li>
          <li><LinkS to='casestudies' spy={true} smooth={true} offset={0} duration={700}>Case Studies</LinkS></li>
          <li><LinkS to='library' spy={true} smooth={true} offset={0} duration={700}>Library</LinkS></li>
        </ul>
        <div className="btns">
          <a href='sign-in'>Sign in</a>
          <a href='sign-up' className='btn-orange'>Sign up</a>
        </div>
        <AnimatePresence>
{!visible&&<motion.div exit={{x:'100vw'}} transition={{duration:1}} role='button' className='toggle-menu' onClick={handleMenu}>
          <motion.span initial={{opacity:0,x:'100vw'}} animate={{opacity:1,x:0}} transition={{duration:3}}></motion.span>
          <motion.span initial={{opacity:0,x:'100vw'}} animate={{opacity:1,x:0}} transition={{duration:2}}></motion.span>
          <motion.span initial={{opacity:0,x:'100vw'}} animate={{opacity:1,x:0}} transition={{duration:2}}></motion.span>
        </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
{visible&&<motion.nav initial={{opacity:1,x:'100vw'}} animate={{x:0}} exit={{x:'100vw',opacity:0}} transition={{duration:.5}}>
          <ul className='mobile-menu'>
            <li><LinkS onClick={handleMenu} to='home' spy={true} smooth={true} offset={0} duration={700}>Home</LinkS></li>
            <li><LinkS onClick={handleMenu} to='about' spy={true} smooth={true} offset={0} duration={700}>What is CHAT-GPT?</LinkS></li>
            <li><LinkS onClick={handleMenu} to='openai' spy={true} smooth={true} offset={0} duration={700}>OpenAI</LinkS></li>
            <li><LinkS onClick={handleMenu} to='casestudies' spy={true} smooth={true} offset={0} duration={700}>Case Studies</LinkS></li>
            <li><LinkS onClick={handleMenu} to='library' spy={true} smooth={true} offset={0} duration={700}>Library</LinkS></li>
          </ul>
          <div className="btns-menu">
            <a href='sign-in'>Sign in</a>
            <a href='sign-up'>Sign up</a>
          </div>
        </motion.nav>}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar