import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return ( 
            <nav class="navbar justify-between mt-1">
    <div class="container">
      <h1 class="font-xxl text-white">Portraits</h1>
      <ul class="display-f">
        <li class="mr-4 text-white text-hover-gray-light-5"><a href="#work">HOME</a></li>
        <li class="mr-4 text-white text-hover-gray-light-5"><a href="#about">WORK</a></li>
        <li class="mr-4 text-white text-hover-gray-light-5"><a href="#about">ABOUT</a></li>
        <li class="mr-4 text-white text-hover-gray-light-5"><a href="#about">CONTACT</a></li>
      </ul>

      <div className='socials'>
      <p className='text-white mr-1'> <FaInstagram /> </p>
      <p className='text-white'> <FaFacebookF /> </p>
       </div>
    </div>
  </nav>
     );
}
 
export default Navbar;