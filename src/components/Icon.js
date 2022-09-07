import { useParams } from "react-router-dom";
import {icons} from "./data.js";

const Icon = () => {
    const { id } = useParams();

    return ( 
        <div className="icon">
            <h1 className="mt-4 bg-primary">ICONS</h1>
                <h2>id number { id }</h2>
                <img src={icons[id - 1]["image"]} alt="" />
        </div>
     );
}
 
export default Icon;