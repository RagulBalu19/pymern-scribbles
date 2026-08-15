import StudentCard from "./StudentCard.jsx";

function StudentList({ students,onDeleteStudent, onEditStudent }) {    
    
    if (students.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                <h2 className="text-2xl font-bold text-slate-500">📂 No Students Found</h2>
                <p className="text-slate-400 mt-2">Add A student to get started</p>
            </div>
        )
    }
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {students.map((student)=>(
                <StudentCard 
                    key={student.id}
                    student={student}
                    onDeleteStudent = {onDeleteStudent}
                    onEditStudent = {onEditStudent}
                    />
            ))}
        </div>
    );
    
}
export default StudentList;