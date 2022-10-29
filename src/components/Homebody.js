import {icons} from "./data.js";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: .1, ease: 'easeIn'}
  },
  exit: {
   opacity: 0,
   transition: {ease: 'easeOut' } 
  }
}

const Homebody = ({setMuted}) => {

  // const {ref: f1, inView: myElementIsVisible1} = useInView();

  function shuffle(array) {
  let currentIndex = array.length,
      randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const handleClick = () => {
  setMuted(true);
};

let newIcons = shuffle([...icons]);

    return ( 
        <motion.div className="homebody"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="hero">   
            <div className="background"></div> 
            {/* <video id="video" className="background"  autoPlay loop muted={true}>
        <source src={process.env.PUBLIC_URL + ("/videos/iconics.mp4")} type="video/mp4" />
      </video> */}
                <h1 className="text-white">Collections of the most<br /> iconic movies and series!</h1>
                <a href="#posters" className="learn font-md text-white text-hover-gray-light-8">Learn more</a>
            </div>

            <div className="banner container mt-1"  id="posters">
                <h1>Movies And Series</h1>
            </div>

            {/* <div className="gallery mt-1" ref={f1}> */}
            <div className="gallery mt-1" >
                {newIcons.map((icon) => (
                    <div className="image-container" key={icon["id"]} onClick={handleClick}>
                      <HashLink to={"/icon" + icon["id"] + "#top"}>
                        {/* <img className={(myElementIsVisible1) ? '' : 'fill'} src={icon["image"]} /> */}
                        <img src={icon["poster"]} />
                    <div className="overlay">
                           <div className="text">{icon["name"]}</div>
                    </div>
                    </HashLink>
                    </div>
                ))}
            </div>           
        </motion.div>
     );
}
 
export default Homebody;