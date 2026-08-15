import React, {useState} from "react";

function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = ()=>{
        setName("Sachin");
    }
    const updateAge = ()=>{
        setAge(age + 1);
    }
    const updateStatus = ()=>{
        setIsEmployed(!isEmployed);
    }
    return(
        <>
            <div>
                <p className="text-[2em] font-serif font-bold text-nowrap">Name: {name}</p>
                <button className="bg-indigo-500 py-2 px-3 rounded-2xl font-bold text-[2em]" onClick={updateName}>Set New Name</button>

                <p className="text-[2em] font-serif font-bold text-nowrap">Age: {age}</p>
                <button className="bg-indigo-500 py-2 px-3 rounded-2xl font-bold text-[2em]" onClick={updateAge}>Set New Age</button>
                
                <p className="text-[2em] font-serif font-bold  text-nowrap">Employ Status: {isEmployed ? "Yes" : "No"}</p>                
                <button className="bg-indigo-500 py-2 px-3 rounded-2xl font-bold text-[2em]" onClick={updateStatus}>Set New Status</button>

            </div>
        </>
    );
}

export default MyComponent;