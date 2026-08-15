import React,{ useState } from "react";

function ToDo(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t,newTask]);
            setNewTask("")
        } else{
            alert("Add Some Task")
        }
        
    }
    function deleteTask(index) {
        const UT = task.filter((_,i) => i !== index);
        setTask(UT);
    }
    function moveUp(index) {
        if (index > 0) {
            const UPT = [...task];
            [UPT[index],UPT[index - 1]] = [UPT[index - 1], UPT[index]];
            setTask(UPT)
        }
    }
    function moveDown(index) {
        if (index < task.length - 1) {
            const DPT = [...task];
            [DPT[index],DPT[index + 1]] = [DPT[index + 1], DPT[index]];
            setTask(DPT)
        }
    }
    return(
        <>
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto">
                    <div className="h-screen w-screen bg-purple-500 ">
                        <div className="flex flex-col justify-center items-center gap-5">
                            <h1 className="font-bold text-2xl text-center"><u>ToDo List Using React</u></h1>
                            <input id="inputText" className="px-3 border-2 rounded-2xl" type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>

                            <button className="border-2 px-3 py-1 rounded-2xl hover:bg-amber-300" onClick={addTask}>Add Task</button>
                        </div>

                        <ol className="flex flex-col justify-center items-center gap-5">
                            {task.map((tasks,index) => 
                            <li key={index} className="flex gap-5 justify-center items-center">
                                <span>{tasks}</span>

                                <button className="border-2 py-1 px-4 rounded-2xl transition-colors ease-in transition-0.5 text-white cursor-pointer" onClick={() => deleteTask(index)}>Delete</button>
                                
                                <button className="border-2 py-1 px-4 rounded-2xl transition-colors ease-in transition-0.5 text-white cursor-pointer" onClick={() => moveUp(index)}>UP</button>
                                
                                <button className="border-2 py-1 px-4 rounded-2xl transition-colors ease-in transition-0.5 text-white cursor-pointer" onClick={() => moveDown(index)}>DOWN</button>
                            </li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;