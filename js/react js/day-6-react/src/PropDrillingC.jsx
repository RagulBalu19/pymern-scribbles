import { createContext, useEffect, useState } from "react";
import PropDrillingD from "./PropDrillingD.jsx";

function PropDrillingC(props) {
    
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component c</h1>
            <PropDrillingD user = {props.user}/>
        </div>
    );
}
export default PropDrillingC;