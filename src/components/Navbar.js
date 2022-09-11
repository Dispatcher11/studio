import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImVolumeMedium } from 'react-icons/im';
import { ImVolumeMute2 } from 'react-icons/im';

const Navbar = ({setMuted, muted}) => {
  const handleToggleMute = () => setMuted(current => !current);
    return ( 
            <nav id='nav' className={(!(window.location.href.indexOf("icon") > -1)) ? 'tran navbar justify-between mt-1' : (muted && (window.location.href.indexOf("icon") > -1)) ? 'tran navbar justify-between mt-1' : 'o-50 tran navbar justify-between mt-1'}>
    <div className="container">
      <h1 className="font-xxl text-white"><Link to="/">Iconics</Link></h1>
      <ul className="display-f">
        <li className="text-white text-hover-gray-light-5"><a href="/studio">HOME</a></li>
        <li className="text-white text-hover-gray-light-5"><a href="#posters">ICONS</a></li>
        {/* <li className="mr-4 text-white text-hover-gray-light-5"><a href="#about">ABOUT</a></li> */}
        <li className="text-white text-hover-gray-light-5"><a href="#contact">CONTACT</a></li>
      </ul>

      
      {/* <p className='text-white'> <FaInstagram /> </p>
      <p className='text-white'> <FaFacebookF /> </p> */}
      {!((window.location.href.indexOf("icon") > -1)) && (<div className='socials'><a href='https://www.instagram.com/belal_elgebaly/' target="_blank" className='text-white'> <FaInstagram /> </a></div>)}
      {((window.location.href.indexOf("icon") > -1) && window.innerWidth < 800) && (<div className='socials'><a href='https://www.instagram.com/belal_elgebaly/' target="_blank" className='text-white'> <FaInstagram /> </a></div>)}
      {((window.location.href.indexOf("icon") > -1) && window.innerWidth > 800) && (<div className='socials'> <a onClick={handleToggleMute} className="text-white">{muted ? (<ImVolumeMute2 />) : (<ImVolumeMedium />)}</a></div>)}
     

    </div>
  </nav>
     );
}
 
export default Navbar;