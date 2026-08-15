import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date())
     useEffect(() =>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);
        return () =>{
            clearInterval(intervalId)
        }
     },[])
     function formatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`
    }

    function padZero(number) {
        return(number < 10 ? "0":"")+number
    }
    return(
        <>
            <div className= "h-screen bg-cover bg-no-repeat bg-fixed bg-[url('./assets/Capture001.png')] m-0 flex justify-center items-center min-h-[100vh]">
                <div className="text-white text-[6rem] font-bold font-mono text-shadow-2xs text-center backdrop-blur-sm w-[100vw] pt-3 pb-3" >
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}
export default DigitalClock;