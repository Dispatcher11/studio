import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const Icon = () => {
    const { id } = useParams();

    return ( 
        <div className="icon">
            <div className="hero">   
            <div className="background"><img src={icons[id]["background"]} alt="background" /></div> 
                <h1 className="text-white">{icons[id]["name"]}</h1>
                <h3 className="text-white">{icons[id]["caption"]}</h3>
                <p className="text-white">{icons[id]["body"]}</p>
            </div>
                <div id="icons" className="gallery mt-1">
                {icons[id]["images"].map((image) => (
                    <div className="image-container">
                        <img src={image} />
                    </div>
                ))}
            </div>  
        </div>
     );
}
 
export default Icon;