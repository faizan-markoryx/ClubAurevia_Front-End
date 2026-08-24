// import { useEffect, useState } from "react";
// import { MdOutlineEdit } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { getUsers } from "../../services/authService";
// import { FaRegSadTear } from "react-icons/fa";

// const Users = () => {

//   const columns = [
//     "Member ID",
//     "Name",
//     "Email",
//     "Phone",
//     "Active Membership",
//     "Welcome Letter",
//     "Manage Account",
//   ];

//   const [users, setUsers] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [pagination, setPagination] = useState<any>({});
//   const [searchUser, setSearchUser] = useState("")

//   const limit = 10;

//   const fetchUsers = async () => {
//     try {

//       const res = await getUsers(page, limit, searchUser);

//       setUsers(res.users);
//       setPagination(res.pagination);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [page, searchUser]);

//   return (
//     <>

//       <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">
//         <div className="w-full">
//           <h1 className="text-2xl font-semibold text-primary">
//             Users
//           </h1>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchUser}
//             className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[450px]"
//             onChange={(e) => setSearchUser(e.target.value)}
//           />

//           {/* <select className="border rounded-lg px-4 py-2 w-full sm:w-[250px]">
//             <option>All Membership</option>
//             <option>Elite Stays</option>
//             <option>Signature Escapes</option>
//             <option>Curated Destinations</option>
//           </select> */}
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
//         <table className="w-full text-sm">
//           <thead className="bg-secondary">
//             <tr>
//               {columns.map((col, index) => (
//                 <th
//                   key={index}
//                   className="text-left p-3 font-medium text-primary"
//                 >
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="py-6 text-center text-gray-500 font-medium"
//                 >
//                   <div className="flex flex-col items-center justify-center py-10 text-gray-500">
//                     {/* Icon */}
//                     <FaRegSadTear size={40} className="mb-2" />

//                     <p className="text-sm font-medium">
//                       No Record Found
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               users.map((user: any) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="py-3 px-3 text-primary">
//                     {user?.memberId}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.firstName} {user?.lastName}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.email}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.phone}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.activeMembership?.name || "--"}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.welcomeLetter ? "Approved" : "Not Approved"}
//                   </td>

//                   <td className="py-3 px-3 text-primary">
//                     {user?.role == "admin" ? (
//                       "Super Admin"
//                     ) : (
//                       <NavLink to={`/admin/manage-account/${user._id}`}>
//                         <p className="flex items-center gap-1">
//                           <MdOutlineEdit className="w-4 h-4" />
//                           <span>Edit</span>
//                         </p>
//                       </NavLink>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* PAGINATION */}
//       {
//         pagination.totalPages > 1 && <>
//           <div className="flex justify-end items-center mt-6">

//             <div className="flex items-center gap-2 bg-white shadow-sm border rounded-lg px-3 py-2">

//               {/* Previous */}
//               <button
//                 disabled={page === 1}
//                 onClick={() => setPage(page - 1)}
//                 className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
//               >
//                 Previous
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: pagination.totalPages || 1 }, (_, index) => {

//                 const pageNumber = index + 1;

//                 return (
//                   <button
//                     key={pageNumber}
//                     onClick={() => setPage(pageNumber)}
//                     className={`px-3 py-1 text-sm rounded-md border transition

//           ${page === pageNumber
//                         ? "bg-[#16302C] text-white border-[#16302C]"
//                         : "hover:bg-gray-100"
//                       }

//           `}
//                   >
//                     {pageNumber}
//                   </button>
//                 );
//               })}

//               {/* Next */}
//               <button
//                 disabled={page === pagination.totalPages}
//                 onClick={() => setPage(page + 1)}
//                 className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
//               >
//                 Next
//               </button>

//             </div>

//           </div>
//         </>
//       }

//     </>
//   );
// };

// export default Users;












import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../services/authService";
import { FaRegSadTear, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Users = () => {
  const columns = [
    "", // Expander Icon
    "Member ID",
    "Name",
    "Email",
    "Phone",
    "Active Membership",
    "Welcome Letter",
    "Manage Account",
  ];

  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>({});
  const [searchUser, setSearchUser] = useState("");
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  const limit = 10;

  const fetchUsers = async () => {
    try {
      const res = await getUsers(page, limit, searchUser);
      setUsers(res.users);
      setPagination(res.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, searchUser]);

  const toggleRow = (userId: string) => {
    if (expandedRowId === userId) {
      setExpandedRowId(null);
    } else {
      setExpandedRowId(userId);
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "--";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-primary">Users</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
          <input
            type="text"
            placeholder="Search by ID, name, email..."
            value={searchUser}
            className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[450px]"
            onChange={(e) => {
              setSearchUser(e.target.value);
              setPage(1); // Reset page on search
            }}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`text-left p-4 font-medium text-primary whitespace-nowrap ${index === 0 ? 'w-10' : ''}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-6 text-center text-gray-500 font-medium">
                  <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                    <FaRegSadTear size={40} className="mb-2" />
                    <p className="text-sm font-medium">No Record Found</p>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user: any) => (
                <React.Fragment key={user._id}>
                  {/* MAIN ROW */}
                  <tr
                    className={`border-t transition cursor-pointer ${
                      expandedRowId === user._id ? "bg-gray-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleRow(user._id)}
                  >
                    <td className="py-4 px-4 text-primary">
                      {expandedRowId === user._id ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-primary font-medium">{user?.memberId}</td>
                    <td className="py-4 px-4 text-primary">
                      {user?.firstName} {user?.lastName}
                    </td>
                    <td className="py-4 px-4 text-primary">{user?.email}</td>
                    <td className="py-4 px-4 text-primary">{user?.phone}</td>
                    <td className="py-4 px-4 text-primary font-semibold">
                      {user?.activeMembership?.name || "--"}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user?.welcomeLetter
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user?.welcomeLetter ? "Approved" : "Pending"}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-primary" onClick={(e) => e.stopPropagation()}>
                      {user?.role === "admin" ? (
                        <span className="text-gray-500 font-medium">Super Admin</span>
                      ) : (
                        <NavLink to={`/admin/manage-account/${user._id}`}>
                          <button className="flex items-center gap-1 text-primary hover:underline font-medium">
                            <MdOutlineEdit className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                        </NavLink>
                      )}
                    </td>
                  </tr>

                  {/* EXPANDED DETAILS SECTION */}
                  {expandedRowId === user._id && (
                    <tr className="bg-gray-50 border-b">
                      <td colSpan={8} className="p-0">
                        <div className="p-6 border-l-4 border-[#16302C] bg-white m-4 rounded-r-lg shadow-sm">
                          
                          {/* 🔥 NEW SECTION: PERSONAL INFORMATION 🔥 */}
                          <div className="mb-6 border-b pb-6">
                            <h3 className="text-lg font-semibold text-primary mb-4">
                              Personal Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                              <div>
                                <p className="text-gray-500 mb-1">Address Line 1</p>
                                <p className="font-medium text-gray-800">{user.addressLine1 || "--"}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Address Line 2</p>
                                <p className="font-medium text-gray-800">{user.addressLine2 || "--"}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">City</p>
                                <p className="font-medium text-gray-800">{user.city || "--"}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">State & Postal Code</p>
                                <p className="font-medium text-gray-800">
                                  {user.state || "--"} {user.postalCode ? `- ${user.postalCode}` : ""}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Country</p>
                                <p className="font-medium text-gray-800">{user.country || "--"}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Account Created Date</p>
                                <p className="font-medium text-gray-800">{formatDate(user.createdAt)}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* MEMBERSHIP HISTORY SECTION */}
                          <h3 className="text-lg font-semibold text-primary mb-4">
                            Membership & Usage History
                          </h3>

                          {user.membershipHistory && user.membershipHistory.length > 0 ? (
                            <div className="space-y-6">
                              {user.membershipHistory.map((history: any, idx: number) => (
                                <div key={idx} className="border rounded-lg p-4 bg-gray-50">
                                  {/* Membership Header Info */}
                                  <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                                    <div>
                                      <p className="font-semibold text-primary text-base">
                                        {history.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        Assigned: {formatDate(history.createdAt)}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-sm bg-white px-4 py-2 border rounded-md shadow-sm">
                                      <p>
                                        <span className="text-gray-500">Amount Paid:</span>{" "}
                                        <span className="font-medium text-primary">
                                          ₹{history.pricePaid ? history.pricePaid.toLocaleString('en-IN') : "0"}
                                        </span>
                                      </p>
                                      <p>
                                        <span className="text-gray-500">Total:</span>{" "}
                                        <span className="font-medium">{history.totalNights}</span>
                                      </p>
                                      <p>
                                        <span className="text-gray-500">Used:</span>{" "}
                                        <span className="font-medium text-red-500">
                                          {history.usedNights}
                                        </span>
                                      </p>
                                      <p>
                                        <span className="text-gray-500">Remaining:</span>{" "}
                                        <span className="font-medium text-green-600">
                                          {history.remainingNights}
                                        </span>
                                      </p>
                                      <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                          history.status === "active"
                                            ? "bg-green-100 text-green-700 border-green-200"
                                            : "bg-gray-200 text-gray-700 border-gray-300"
                                        }`}
                                      >
                                        {history.status.toUpperCase()}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Nested Usage History Ledger */}
                                  {history.usageHistory && history.usageHistory.length > 0 ? (
                                    <div className="bg-white rounded-md border mt-3 overflow-hidden">
                                      <table className="w-full text-sm">
                                        <thead className="bg-gray-100 border-b">
                                          <tr className="text-left text-gray-600 font-medium">
                                            <th className="px-4 py-2 w-1/3">Usage Date</th>
                                            <th className="px-4 py-2 w-1/3">Nights Deducted</th>
                                            <th className="px-4 py-2 w-1/3">Remarks</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {history.usageHistory.map((usage: any, uIdx: number) => (
                                            <tr key={uIdx} className="border-b last:border-0">
                                              <td className="px-4 py-2 text-primary">
                                                {formatDate(usage.dateUsed)}
                                              </td>
                                              <td className="px-4 py-2 font-medium text-red-500">
                                                -{usage.nightsDeducted} Nights
                                              </td>
                                              <td className="px-4 py-2 text-gray-600">
                                                {usage.remarks || "--"}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  ) : history.usedNights > 0 ? (
                                    // 🔥 AGAR USED NIGHTS HAIN PAR HISTORY NAHI HAI (OLD DATA)
                                    <div className="bg-white rounded-md border mt-3 overflow-hidden">
                                      <table className="w-full text-sm">
                                        <thead className="bg-gray-100 border-b">
                                          <tr className="text-left text-gray-600 font-medium">
                                            <th className="px-4 py-2 w-1/3">Usage Date</th>
                                            <th className="px-4 py-2 w-1/3">Nights Deducted</th>
                                            <th className="px-4 py-2 w-1/3">Remarks</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="px-4 py-2 text-primary">--</td>
                                            <td className="px-4 py-2 font-medium text-red-500">
                                              -{history.usedNights} Nights
                                            </td>
                                            <td className="px-4 py-2 text-gray-400 italic">
                                              Previous usage history details unavailable
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  ) : (
                                    <p className="text-sm text-gray-400 mt-3 pt-3 border-t">
                                      No nights used yet for this plan.
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">
                              No membership history found for this user.
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-end items-center mt-6">
          <div className="flex items-center gap-2 bg-white shadow-sm border rounded-lg px-3 py-2">
            {/* Previous */}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: pagination.totalPages || 1 }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`px-3 py-1 text-sm rounded-md border transition ${
                    page === pageNumber
                      ? "bg-[#16302C] text-white border-[#16302C]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next */}
            <button
              disabled={page === pagination.totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;