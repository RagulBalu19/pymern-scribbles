import { createContext, useEffect, useState } from "react";
import PropDrillingB from "./PropDrillingB.jsx";

function PropDrillingA() {
    const [user, setUser] = useState("Ragul")
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component A</h1>
            <h2>Hello {user}</h2>
            <PropDrillingB user = {user}/>
        </div>
    );
}
export default PropDrillingA;