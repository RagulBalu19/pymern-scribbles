function StudentCard({ student, onDeleteStudent, onEditStudent }) {    
    return(
        <>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
            
                <h2 className="text-2xl font-bold text-slate-800 mb-4">👤 {student.name}</h2>
                <div className="space-y-2 text-slate-600">
                    <p>📧 {student.email}</p>
                    <p>🎂 {student.age}</p>
                    <div className="mt-3">
                        <span className="mr-2">🎓</span>
                        <span className="inline-block bg-indigo-100 px-3 py-1 rounded-full text-sm font-semibold">{student.department}</span>
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition duration-300" onClick={()=>onEditStudent(student)}>Edit</button>
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition duration-300" onClick={()=> {
                            if(window.confirm("Delete this Student?")){
                                onDeleteStudent(student.id)
                                }
                            }}>Delete</button>
                </div>
                
            </div>
        </>
    );
}
export default StudentCard;