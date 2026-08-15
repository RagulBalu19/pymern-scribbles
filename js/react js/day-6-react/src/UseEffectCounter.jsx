import { useEffect, useState } from "react";

function UseEffectCounter() {
    const[count, setCount] = useState(0);
    const[color, setColor] = useState("green")
    useEffect(() => {
        document.title = `Count : ${count} ${color}`;
    }, [count, color])
    function Inc() {
        setCount(c => (c + 1))
    }
    function Dec() {
        setCount(c =>(c - 1))
    }
    function ChangeColor() {
        setColor(c =>(c === "green" ? "red" : "green"))
    }
    return(
        <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-full mt-5 font-bold text-2xl font-serif">
            <p style={{color: color}}>Count: {count}</p>
            <button className="border-3 px-2 py-1 mb-2" onClick={Inc}>Add</button>
            <button className="border-3 px-2 py-1 mb-2" onClick={Dec}>Dec</button><br/>
            <button className="border-3 px-2 py-1 mb-2" onClick={ChangeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectCounter;