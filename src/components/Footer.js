import { HashLink } from 'react-router-hash-link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.2}
    },
    exit: {
     opacity: 0,
     transition: {ease: 'easeInOut' } 
    }
  }

const Footer = ({setPlay}) => {
    // const {isNum, setIsNum} = useState(false);
    // console.log(window.location.href)
    // if (window.location.href.indexOf("icon1") > -1) {
    //     setIsNum(true);
    //   };
    

    const onClick = () => {
      setPlay(false);
    }

    return ( 
        <motion.footer id='contact' className="footer" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div id='back' className=' text-gray-light-3' onClick={onClick}><HashLink smooth to="/#posters"><div className={'goback ' + ((window.location.href.indexOf("icon") > -1) ? 'show' : '')}><BsArrowLeft className='font-lg text-gray mr-1' />  <div>Back</div></div></HashLink></div>
            <div className="container">
                <h6><FaBehance /></h6>
                <h6><FaTwitter /></h6>
                <h6><FaInstagram /></h6>
                <h6><FaFacebookSquare /></h6>
                <h6><GoMail /></h6>
            </div>
            <p className='font-sm mb-2 text-gray-light-6'>© 2022 by Belal Elgebaly</p>
        </motion.footer>
     );
}
 
export default Footer;