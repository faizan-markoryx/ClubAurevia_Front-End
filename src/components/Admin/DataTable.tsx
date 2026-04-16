const DataTable = ({ columns, data }:any) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
      <table className="w-full text-sm">
        <thead className="bg-secondary">
          <tr>
            {columns.map((col:any, index:any) => (
              <th
                key={index}
                className="text-left p-3 font-medium text-primary"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row:any, i:any) => (
            <tr key={i} className="border-t">
              {Object.values(row).map((value:any, index:any) => (
                <td key={index} className="p-3 text-primary">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;