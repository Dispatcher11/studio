import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const Icon = ({muted}) => {
    const { id } = useParams();
    return ( 
        <div className="icon">
            <div className="hero">   
            <video id="video" className="background"  autoPlay loop muted={muted}>
        <source src={process.env.PUBLIC_URL + (icons[id]["background"])} type="video/mp4" />
      </video>
                <h1 className="text-white">{icons[id]["name"]}</h1> 
                <h3 className="text-white">{icons[id]["caption"]}</h3>
                <p className="text-white">{icons[id]["body"]}</p>
            </div>
                <div id="icons" className="details-gallery mt-1">
                {icons[id]["images"].map((image) => (
                        <img key={image} src={image} />
                ))}
            </div>  
        </div>
     );
}
 
export default Icon;