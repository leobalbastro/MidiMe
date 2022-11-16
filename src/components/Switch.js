import { React} from "react";
import "./Switch.css";
import cx from "classnames";
import image from "../images/DarkModeOn.svg";

export const Switch = ({ rounded = false, isToggled, onToggle})=> {
    const sliderCX = cx("slider",{
        rounded:rounded
    });
    return <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} style={{}} />
    
        <div className={sliderCX} style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"left" }}/>
    </label>
}