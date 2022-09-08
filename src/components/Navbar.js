import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
            <nav className="navbar justify-between mt-1">
    <div className="container">
      <h1 className="font-xxl text-white"><Link to="/">Iconics</Link></h1>
      <ul className="display-f">
        <li className="text-white text-hover-gray-light-5"><a href="#work">HOME</a></li>
        <li className="text-white text-hover-gray-light-5"><a href="#posters">ICONS</a></li>
        {/* <li className="mr-4 text-white text-hover-gray-light-5"><a href="#about">ABOUT</a></li> */}
        <li className="text-white text-hover-gray-light-5"><a href="#about">CONTACT</a></li>
      </ul>

      <div className='socials'>
      <p className='text-white'> <FaInstagram /> </p>
      <p className='text-white'> <FaFacebookF /> </p>
       </div>
    </div>
  </nav>
     );
}
 
export default Navbar;