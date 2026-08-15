import { useContext, useEffect, useState } from "react";
import UseContextC from "./UseContextC";
import { UserContext } from "./UseContextA";

function UseContextB() {
    const user = useContext(UserContext)
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component B</h1>
            <h2>Again its you Mr.{user}</h2>
            <UseContextC />
        </div>
    );
}
export default UseContextB;