import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UseContextA";
function UseContextD() {
    const user =useContext(UserContext)
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component D</h1>
            <h2>Bye {user}</h2>
        </div>
    );
}
export default UseContextD;

// UseContextD is a Consumer Component