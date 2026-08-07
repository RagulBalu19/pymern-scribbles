import React,{ useState } from "react";

function UpdateStateInArray() {
    const [foods, setFoods] = useState(["Idly","Dosa"]);

    function handleAddFood() {
        const nF = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, nF]);
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }
    return(
        <>
            <div className="flex flex-col justify-center items-center text-2xl font-bold gap-5">
                <h1>List of Foods</h1>
                <ul className="list-disc">
                    {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input  className="border rounded-3xl" type="text" id="foodInput" placeholder="Enter A food Items"/>
                <button className="border rounded-3xl bg-amber-200 py-3 px-2"  onClick={handleAddFood}>Add Item</button>
            </div>
        </>
    );
}
export default UpdateStateInArray;