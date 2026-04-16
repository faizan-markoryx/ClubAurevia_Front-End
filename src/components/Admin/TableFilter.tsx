const TableFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">

      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-4 py-2 w-full"
      />

      <select className="border rounded-lg px-4 py-2">
        <option>Status</option>
        <option>Pending</option>
        <option>Approved</option>
      </select>

    </div>
  );
};

export default TableFilter;