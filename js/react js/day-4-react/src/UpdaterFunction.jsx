import React,{ useState } from "react";

function UpdaterFunction() {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    function decrement() {
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    function reset() {
        setCount(c=>c=0);
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center gap-5">
                <p className="mt-3 font-serif text-[1.5rem] ">Count: {count}</p>
                <div className="flex gap-5 justify-center items-center">
                    <button className="border border-gray-500 px-2 py-1 rounded-xl" onClick={increment}>Increase</button>
                    <button className="border border-gray-500 px-2 py-1 rounded-xl" onClick={reset}>Reset</button>
                    <button className="border border-gray-500 px-2 py-1 rounded-xl" onClick={decrement}>Decrease</button>
                </div>
            </div>
        </>
    )
}

export default UpdaterFunction;