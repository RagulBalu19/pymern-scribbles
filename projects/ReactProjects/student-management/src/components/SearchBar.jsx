function SearchBar({
  search,
  setSearch,
  department,
  setDepartment,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-4">

      <input
        type="text"
        placeholder="🔍 Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border rounded-xl px-4 py-3"
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border rounded-xl px-4 py-3"
      >
        <option value="">All Departments</option>
        <option value="MCA">MCA</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
      </select>

    </div>
  );
}

export default SearchBar;