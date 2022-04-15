import React from "react";
import "./styles/OnionImage.css";
import onnionDashboard from "../images/onion-dashboard.png";

function OnionImage() {
    return(
        <div className="topbar-img">
            <img className="onion-image" src={onnionDashboard} alt="Dashboard"/>
        </div>
    );

}

export default OnionImage;