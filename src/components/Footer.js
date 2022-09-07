import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <h6><FaBehance /></h6>
                <h6><FaTwitter /></h6>
                <h6><FaInstagram /></h6>
                <h6><FaFacebookSquare /></h6>
                <h6><GoMail /></h6>
            </div>
            <p className='font-sm mb-2 text-gray-light-6'>© 2022 by Belal Elgebaly</p>
        </footer>
     );
}
 
export default Footer;