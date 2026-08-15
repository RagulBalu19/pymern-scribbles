import { createContext, useEffect, useState } from "react";
import UseContextB from './UseContextB';

export const UserContext = createContext();
function UseContextA() {
    const [user, setUser] = useState("Ragul")
    return(
        <div className="border-2 p-5 m-5">
            <h1>Component A</h1>
            <h2>Hello {user}</h2>

            <UserContext.Provider value={user}>
                <UseContextB/>
            </UserContext.Provider>
        </div>
    );
}
export default UseContextA;

// UseContextA is a provider component