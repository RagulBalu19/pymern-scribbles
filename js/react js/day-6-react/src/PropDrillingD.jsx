import { createContext, useEffect, useState } from "react";

function PropDrillingD(props) {
    
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component D</h1>
            <h2>Bye {props.user}</h2>
        </div>
    );
}
export default PropDrillingD;