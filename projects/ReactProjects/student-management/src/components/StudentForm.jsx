import { useState,useEffect } from "react"

function StudentForm({ onAddStudent, editStudent, onUpdateStudent }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        department: "",
        email: "",
    })

    useEffect(()=>{
        if (editStudent) {
            setFormData(editStudent);
        }
    },[editStudent])
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(f=>({
            ...f, [name]:value,
            
        }))
    }
    function add(e) {
        e.preventDefault();
        if(!validateForm()){
            return;
        }
        if (editStudent) {
            onUpdateStudent(formData)
        } else {
            onAddStudent(formData)
        }
        setFormData({
            name: "",
            age: "",
            department: "",
            email: "",
        });
    }

    // Validation Form
    function validateForm() {
        if (!formData.name.trim()) {
            alert("Name is Required");
            return false;
        }
        if (!formData.age){
            alert("Age is Required");
            return false;
        }
        if (isNaN(!formData.age)) {
            alert("Age must be a number");
            return false;
        }
        if (formData.age < 18 || formData.age > 60) {
            alert("Age Must be between 18 and 60");
            return false;
        }
        if (!formData.department.trim()) {
            alert("Department is Required");
            return false;
        }
        if (!formData.email.trim()) {
            alert("Email is Required");
            return false;
        }
       const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[A-Za-z]{2,}$/;
        if (!regex.test(formData.email)) {
            alert("InValid Email Address");
            return false;
        }
        return true;
    }
    
    return(
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Student Form</h1>
            {/* {Error && (
                <p className="text-red-600 bg-red-50 border border-red-200 px-4 py-2">{Error}</p>
            )} */}
            <form onSubmit={add} className="space-y-4">
                <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Full Name"/>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age"/>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" name="department" type="text" value={formData.department} onChange={handleChange} placeholder="Department"/>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address"/>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg">{editStudent ? "Update Student" : "Add Details"}</button>
            </form>
            
        </div>
    )
}

export default StudentForm;