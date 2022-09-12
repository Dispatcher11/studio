import {icons} from "./data.js";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const Homebody = ({muted}) => {

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
}

let newIcons = shuffle([...icons]);

    return ( 
        <div className="homebody">
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
                    <div className="image-container" key={icon["id"]}>
                      <a href={"/studio/icon" + icon["id"]}>
                        {/* <img className={(myElementIsVisible1) ? '' : 'fill'} src={icon["image"]} /> */}
                        <img src={icon["poster"]} />
                    <div className="overlay">
                           <div className="text">{icon["name"]}</div>
                    </div>
                      </a>
                    </div>
                ))}
            </div>           
        </div>
     );
}
 
export default Homebody;