import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const Icon = ({muted}) => {
    const { id } = useParams();
    return ( 
        <div className="icon">
            <div className="hero">   
            {!(window.innerWidth > 800) && <div className="background"><img src={icons[id]["background"]} alt="background" /></div>}

           {window.innerWidth > 800 && <video id="video" className="background"  autoPlay loop muted={muted}> <source src={process.env.PUBLIC_URL + (icons[id]["video"])} type="video/mp4" /> </video> }
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