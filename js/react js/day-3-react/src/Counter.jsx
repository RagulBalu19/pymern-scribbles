import React,{useState} from "react";

function Counter() {
    const [num, setNum] = useState(0);
    const inc = ()=>{
        setNum(num + 1);
    }
    const dec =()=>{
        setNum(num - 1);
    }
    const reset = ()=>{
        setNum(0);
    }


    return(
        <>
            <div className="flex flex-col justify-center items-center gap-6 bg-slate-300 h-[400px] p-16 m-0 rounded-3xl text-[4em]">
                <p className="text-nowrap font-black font-serif  text-center">{num}</p>
                <div className="flex justify-center item gap-5">
                    <button className="bg-slate-500 py-3 px-2 border-none rounded-2xl hover:cursor-pointer hover:bg-slate-400 hover:text-black text-white font-serif" onClick={inc}>Increase</button>
                    <button className="bg-slate-500 py-3 px-2 border-none rounded-2xl hover:cursor-pointer hover:bg-slate-400 hover:text-black text-white font-serif" onClick={reset}>Reset</button>
                    <button className="bg-slate-500 py-3 px-2 border-none rounded-2xl hover:cursor-pointer hover:bg-slate-400 hover:text-black text-white font-serif" onClick={dec}>Decrease</button>
                </div>
            </div>
        </>
    );
}

export default Counter;