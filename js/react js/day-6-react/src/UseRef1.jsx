import { useRef } from "react";

function UseRef1() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleChange1() {
        inputRef1.current.focus();
        inputRef1.current.style.background ="green"
        inputRef2.current.style.background =""
        inputRef3.current.style.background =""
    }

    function handleChange2() {
        inputRef2.current.focus();
        inputRef1.current.style.background =""
        inputRef2.current.style.background ="green"
        inputRef3.current.style.background =""
    }

    function handleChange3() {
        inputRef3.current.focus();
        inputRef1.current.style.background =""
        inputRef2.current.style.background =""
        inputRef3.current.style.background ="green"
    }
    return(

        <div className="flex flex-col border-2 rounded-4xl gap-3 w-screen justify-center items-center">
            <button className="rounded-xl border p-2 mt-2 bg-amber-300 font-bold" onClick={handleChange1}>BUTTON 1!</button>
            <input  className="rounded-xl border p-2 mt-2 bg-red-300 font-bold"ref={inputRef1}/>
            <button className="rounded-xl border p-2 mt-2 bg-amber-300 font-bold" onClick={handleChange2}>BUTTON 2!</button>
            <input  className="rounded-xl border p-2 mt-2 bg-red-300 font-bold" ref={inputRef2}/>
            <button className="rounded-xl border p-2 mt-2 bg-amber-300 font-bold" onClick={handleChange3}>BUTTON 3!</button>
            <input  className="rounded-xl border p-2 mt-2 bg-red-300 font-bold" ref={inputRef3}/>
        </div>
    );
}
export default UseRef1;