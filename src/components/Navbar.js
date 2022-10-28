import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImVolumeMedium } from 'react-icons/im';
import { ImVolumeMute2 } from 'react-icons/im';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: .3, duration: 0.2}
  },
  exit: {
   opacity: 0,
   transition: {ease: 'easeInOut' } 
  }
}

const Navbar = ({setMuted, muted}) => {

  const handleToggleMute = () => setMuted(current => !current);
    return ( 
            <motion.nav id='nav' className={(!(window.location.href.indexOf("icon") > -1)) ? 'tran navbar justify-between mt-1' : (muted && (window.location.href.indexOf("icon") > -1)) ? 'tran navbar justify-between mt-1' : 'o-50 tran navbar justify-between mt-1'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
              <span id='top' style={{position: "absolute", top: -20}}></span>
    <div className="container">
      <h1 className="font-xxl text-white"><Link to="/">Iconics</Link></h1>
      <ul className="display-f">
        <li className="text-white text-hover-gray-light-5"><Link to="/studio">HOME</Link></li>
        <li className="text-white text-hover-gray-light-5"><a href="#posters">ICONS</a></li>
        {/* <li className="mr-4 text-white text-hover-gray-light-5"><a href="#about">ABOUT</a></li> */}
        <li className="text-white text-hover-gray-light-5"><a href="#contact">CONTACT</a></li>
      </ul>

      
      {/* <p className='text-white'> <FaInstagram /> </p>
      <p className='text-white'> <FaFacebookF /> </p> */}
      <div className='socials'>
      <a className={!((window.location.href.indexOf("icon") > -1)) ? 'text-white' : 'out text-white'} href='https://www.instagram.com/belal_elgebaly/' target="_blank"> <FaInstagram/> </a>
      {((window.location.href.indexOf("icon") > -1) && window.innerWidth < 800) && (<a href='https://www.instagram.com/belal_elgebaly/' target="_blank" className='text-white'> <FaInstagram /> </a>)}
      {((window.location.href.indexOf("icon") > -1) && window.innerWidth > 800) && (<a onClick={handleToggleMute} className="text-white">{muted ? (<ImVolumeMute2 />) : (<ImVolumeMedium />)}</a>)}
      </div>
     

    </div>
  </motion.nav>
     );
}
 
export default Navbar;