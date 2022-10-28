import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: .2, ease: 'easeIn'}
    },
    exit: {
     opacity: 0,
     transition: {ease: 'easeOut' } 
    }
  }
  
const Icon = ({muted}) => {
    const { id } = useParams();
    return ( 
        <motion.div className="icon"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="hero">   
            {!(window.innerWidth > 800) && <div className="background"><img src={icons[id]["background"]} alt="background" /></div>}

           {window.innerWidth > 800 && <video id="video" className={(muted) ? 'background tran' : 'brightness background tran'}  autoPlay loop muted={muted}> <source src={process.env.PUBLIC_URL + (icons[id]["video"])} type="video/mp4" /> </video> }
           <div id="cover"></div>
                <h1 className={(muted) ? 'tran' : 'o-0 tran'}>{icons[id]["name"]}</h1> 
                <h3 className={(muted) ? 'tran' : 'o-0 tran'}>{icons[id]["caption"]}</h3>
                <p className={(muted) ? 'tran' : 'o-0 tran'}>{icons[id]["body"]}</p>
            </div>
                <div id="icons" className="details-gallery mt-1">
                {icons[id]["images"].map((image) => (
                        <img key={image} src={image} />
                ))}
            </div>  
        </motion.div>
     );
}
 
export default Icon;