import { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../services/authService";
import { FaRegSadTear } from "react-icons/fa";

const Users = () => {

  const columns = [
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
  const [searchUser, setSearchUser] = useState("")

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

  return (
    <>

      <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-primary">
            Users
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
          <input
            type="text"
            placeholder="Search..."
            value={searchUser}
            className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[450px]"
            onChange={(e) => setSearchUser(e.target.value)}
          />

          {/* <select className="border rounded-lg px-4 py-2 w-full sm:w-[250px]">
            <option>All Membership</option>
            <option>Elite Stays</option>
            <option>Signature Escapes</option>
            <option>Curated Destinations</option>
          </select> */}
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              {columns.map((col, index) => (
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
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-6 text-center text-gray-500 font-medium"
                >
                  <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                    {/* Icon */}
                    <FaRegSadTear size={40} className="mb-2" />

                    <p className="text-sm font-medium">
                      No Record Found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((user: any) => (
                <tr key={user._id} className="border-t">
                  <td className="py-3 px-3 text-primary">
                    {user?.memberId}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.firstName} {user?.lastName}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.email}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.phone}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.activeMembership?.name || "--"}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.welcomeLetter ? "Approved" : "Not Approved"}
                  </td>

                  <td className="py-3 px-3 text-primary">
                    {user?.role == "admin" ? (
                      "Super Admin"
                    ) : (
                      <NavLink to={`/admin/manage-account/${user._id}`}>
                        <p className="flex items-center gap-1">
                          <MdOutlineEdit className="w-4 h-4" />
                          <span>Edit</span>
                        </p>
                      </NavLink>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {
        pagination.totalPages > 1 && <>
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
                    className={`px-3 py-1 text-sm rounded-md border transition
          
          ${page === pageNumber
                        ? "bg-[#16302C] text-white border-[#16302C]"
                        : "hover:bg-gray-100"
                      }
          
          `}
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
        </>
      }

    </>
  );
};

export default Users;