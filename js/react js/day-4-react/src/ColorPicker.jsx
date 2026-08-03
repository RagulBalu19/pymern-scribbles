import React,{useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value)
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="m-[50px] text-[3rem]">Color Picker Project</h1>
                <div className="w-[300px] h-[300px] flex justify-center items-center border border-gray-500 rounded-3xl mb-[25px] transition duration-250 ease-in" style={{backgroundColor: color}}>
                    <p className="text-gray-700 text-[2rem] text-center">Selected Color: {color}</p>
                </div>
                <label className="text-[1.5rem] font-bold mb-[10px]">Select a Color: </label> 
                <input className="w-[75px] h-[50px] rounded-xl border border-[hsl(0,0%,80%)]" type="color" value={color} onChange={handleColorChange}/>

            </div>
        </>
    );
}
export default ColorPicker;