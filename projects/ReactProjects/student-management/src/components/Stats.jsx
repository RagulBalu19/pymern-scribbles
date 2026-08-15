function Stats({ students }) {
    const deptCount = students.reduce((acc, student) => {
        const dept = student.department;

        if(acc[dept]){
            acc[dept]++;
        }else{
            acc[dept] = 1;
        }
        return acc;
    },{})
    const departmentIcons = {
        MCA: "🎓",
        CSE: "💻",
        ECE: "⚡",
        IT: "🖥️",
    };
    const badgeColors = {
        MCA: "bg-blue-100 text-blue-700",
        CSE: "bg-green-100 text-green-700",
        ECE: "bg-purple-100 text-purple-700",
        IT: "bg-orange-100 text-orange-700",
    };
    return(
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">📊 Student Statistics</h2>
            <div className="flex justify-between items-center bg-indigo-50 rounded-xl p-4 mb-5">
                <span className="text-lg font-medium">👥 Total Students</span>
                <span className="text-2xl font-bold text-indigo-600">{students.length}</span>
            </div>
            <hr/>
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Department Wise Count</h3>

            {Object.entries(deptCount).map(([department, count]) => (
                <div key={department} className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-700">{(departmentIcons[department] || "📚") + " " + department}</span>
                    <span className={`${badgeColors[department] || "bg-gray-100 text-gray-700"} px-3 py-1 rounded-full text-sm font-semibold`}>{count}</span>
                </div>
            ))}
               
        </div>
    );
}
export default Stats;