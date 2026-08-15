import { useContext, useEffect, useState } from "react";
import UseContextD from "./UseContextD";
import { UserContext } from "./UseContextA";

function UseContextC() {
    const user = useContext(UserContext);
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component c</h1>
            <h2>Hey bro again you Mr.{user}</h2>
            <UseContextD/>
        </div>
    );
}
export default UseContextC;