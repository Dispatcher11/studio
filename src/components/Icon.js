import { useParams } from "react-router-dom";
import {icons} from "./data.js";
import { useState } from 'react';

const Icon = () => {
    const { id } = useParams();


const [muted, setMuted] = useState(true);
const handleToggleMute = () => setMuted(current => !current);
var my=document.getElementById("video");

    const unmutepls = () => {
        setMuted(current => !current);
        my.muted=muted;
    }
    

    return ( 
        <div className="icon">
            <div className="hero">   
            <video id="video" className="background" autoPlay loop>
        <source src={process.env.PUBLIC_URL + (icons[id]["background"])} type="video/mp4" />
      </video>
                {/* <button onClick={unmutepls} className="control btn-gray">{muted ? 'Mute' : 'Unmute'}</button> */}
                <h1 className="text-white">{icons[id]["name"]}</h1> 
                <h3 className="text-white">{icons[id]["caption"]}</h3>
                <p className="text-white">{icons[id]["body"]}</p>
            </div>
                <div id="icons" className="details-gallery mt-1">
                {icons[id]["images"].map((image) => (
                        <img src={image} />
                ))}
            </div>  
        </div>
     );
}
 
export default Icon;