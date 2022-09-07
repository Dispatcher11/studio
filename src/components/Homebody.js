import {icons} from "./data.js";
import { Link } from 'react-router-dom';

const Homebody = () => {

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

shuffle(icons);
    return ( 
        <div className="homebody">
            <div className="hero">   
            <div className="background"></div> 
                <h1 className="text-white">Collections of the most<br /> iconic movies and series!</h1>
                <a href="#" className="learn font-md text-white mt-2 text-hover-gray-light-8">Learn more</a>
            </div>

            <div className="banner container mt-1">
                <h1>Movies And Series</h1>
            </div>

            <div id="icons" className="gallery mt-1">
                {icons.map((icon) => (
                    <div className="image-container">
                      <Link to={"/icon" + icon["id"]}>
                        <img src={icon["image"]} />
                    <div className="overlay">
                           <div className="text">{icon["name"]}</div>
                    </div>
                      </Link>
                    </div>
                ))}
            </div>           
        </div>
     );
}
 
export default Homebody;