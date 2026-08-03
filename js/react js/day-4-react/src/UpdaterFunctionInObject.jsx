import React,{ useState } from "react";

function UpdaterFunctionInObject() {
    const [student,setStudent] = useState({
        name:"Ragul",
        age:23,
        Degree:"MCA"
    });
function handleNameChange(e) {
    setStudent(s=>({...s,name:e.target.value}))
    
}
function handleAgeChange(e) {
    setStudent(s=>({...s,age:e.target.value}))
    
}
    function handleDegreeChange(e) {
        setStudent(s=>({...s,Degree:e.target.value}))
        
    }
    return(
        <>
            <div className="flex flex-col justify-center items-center gap-5">
                <p className="font-bold text-[1.2rem] text-">Student Details: {student.name}</p>
                <p className="font-bold text-[1.2rem] text-">Student Age: {student.age}</p>
                <p className="font-bold text-[1.2rem] text-">Student Degree: {student.Degree}</p>
                <input value={student.name} type="text" onChange={handleNameChange} className="border border-black" /> <br/>
                <input value={student.age} type="number" onChange={handleAgeChange} className="border border-black" /> <br/>
                <input value={student.Degree} type="text" onChange={handleDegreeChange} className="border border-black" /> <br/>
            </div>
        </>
    )
}
export default UpdaterFunctionInObject;