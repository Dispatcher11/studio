import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const Icon = ({muted}) => {
    const { id } = useParams();
    return ( 
        <div className="icon">
            <div className="hero">   
            {!(window.innerWidth > 720) && <div className="background"><img src={icons[id]["background"]} alt="background" /></div>}

           {window.innerWidth > 720 && <video id="video" className={(muted) ? 'background tran' : 'brightness background tran'}  autoPlay loop muted={muted}> <source src={process.env.PUBLIC_URL + (icons[id]["video"])} type="video/mp4" /> </video> }
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
        </div>
     );
}
 
export default Icon;