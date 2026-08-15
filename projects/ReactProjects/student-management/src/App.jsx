import toast from "react-hot-toast"
import StudentForm from "./components/StudentForm.jsx"
import SearchBar from "./components/SearchBar.jsx"
import StudentList from "./components/StudentList.jsx"
import Stats from "./components/Stats.jsx"
import { useState, useEffect } from "react"

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];

  });

  // to store it in localStorage
  useEffect(()=>{
    localStorage.setItem("students", JSON.stringify(students));
  },[students]);


  // Search Bar
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  
  // filter student data
  const filterStudents = students.filter((student)=>{
    const matchesSearch = student.name.toLowerCase().includes(search.toLocaleLowerCase());
    const matchesDepartment = department === "" || student.department === department;

    return matchesSearch && matchesDepartment;
  });

  // alphabetic order
  const sortedStudents =[...filterStudents].sort((a,b) => a.name.localeCompare(b.name));

  // Edit Student
  const [editStudent, setEditStudent] = useState(null);


  // Add student Details
  function handleAddStudent(newStudent) {
    const studentWithId = {
      id: students.length+1,
      ...newStudent,
    };
    setStudents((prevStudents)=>[
      ...prevStudents,
      studentWithId,
    ]);
    toast.success("Student Added Successfully")
  }
  
  // Delete Student Details
  function handleDeleteChange(id) {
    setStudents((prevStudents)=>
      prevStudents.filter((student)=>student.id !== id));
    toast.success("Student Deleted");
  }

  // Edit Student Details
  function handleEditStudent(student){
    setEditStudent(student);
  }

  // Update Student Details
  function handleUpdateStudent(updatedStudent){
    setStudents((prevStudents)=>
    prevStudents.map((student)=>
    student.id === updatedStudent.id ? updatedStudent : student));

    setEditStudent(null);
    toast.success("Student Updated Successfully");
  }
  return (
<>
    <header className="bg-indigo-600 text-white rounded-2xl shadow-lg p-6 mb-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎓Student Management</h1>
      <p className="mt-2 text-indigo-100">Manage students Quickly and efficiently.</p>
    </header>
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left Section */}
          <div className=" space-y-6">
            <StudentForm 
              onAddStudent = {handleAddStudent} 
              editStudent ={editStudent} 
              onUpdateStudent = {handleUpdateStudent}/>

            <Stats 
              students = {students}/>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-6">
            <SearchBar 
              search = {search} 
              setSearch = {setSearch}
              department={department}
              setDepartment={setDepartment}
              />

            <StudentList 
              students = {sortedStudents} 
              onDeleteStudent = {handleDeleteChange} 
              onEditStudent = {handleEditStudent}/>
          </div>
        </div>
      </div>
    </div>
    <footer className="text-center text-slate-500 mt-10">

Made with ❤️ using React & Tailwind CSS

</footer>
</>
  )
}

export default App;