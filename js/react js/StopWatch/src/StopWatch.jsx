import { useState, useEffect, useRef } from "react";
function StopWatch() {
    const [isRunning, SetIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0);
    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10);
        }
        return ()=>{
            clearInterval(intervalRef.current);
        }

    },[isRunning])
    function Start(){
        SetIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef.current);
        
    }
    function Stop(){
        SetIsRunning(false)
    }
    function Reset(){
        setElapsedTime(0)
        SetIsRunning(false)
    }
    function FormatTime(){
        
        let hours = Math.floor (elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor (elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor (elapsedTime / (1000) % 60)
        let milliseconds = Math.floor ((elapsedTime % 1000)/10)

        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(2,"0")

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen font-serif font-bold text-2xl bg-slate-950">
            <div className="bg-slate-400 flex flex-col gap-5 justify-center items-center h-[500px] w-[500px] rounded-bl-2xl rounded-tr-2xl">
                <div className="text-white text-[2.5rem]">{FormatTime()}</div>
                <div className="flex justify-center items-center gap-3">
                    <button className="hover:bg-green-300 cursor-pointer border-none px-3 py-2 rounded-lg bg-green-500" onClick={Start}>Start</button>
                    <button className="hover:bg-orange-300 cursor-pointer border-none px-3 py-2 rounded-lg bg-orange-500" onClick={Reset}>Reset</button>
                    <button className="hover:bg-red-300 cursor-pointer border-none px-3 py-2 rounded-lg bg-red-500" onClick={Stop}>Stop</button>
                </div>
            </div>
            
        </div>   
    );
}
export default StopWatch;