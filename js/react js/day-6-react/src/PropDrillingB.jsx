import { createContext, useEffect, useState } from "react";
import PropDrillingC from "./PropDrillingC.jsx";

function PropDrillingB(props) {
    
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component B</h1>
            <PropDrillingC user = {props.user}/>
        </div>
    );
}
export default PropDrillingB;