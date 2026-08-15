import { useEffect, useState } from "react";

function UseEffectWidthHeight() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    
    useEffect(()=>{
        window.addEventListener("resize",Resize);
        console.log("Event Listener Added");
        
        return()=>{
            window.removeEventListener("resize",Resize)
            console.log("Event Listener Removes");
            
        }
    },[])

    function Resize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(
        <div className="border-2 mt-3 flex flex-col items-center justify-center rounded-full px-2 py-1 font-bold text-2xl font-serif">
            <p>Window Width: {width} Px</p>
            <p>Window Height: {height} Px</p>
        </div>
    );
}
export default UseEffectWidthHeight;