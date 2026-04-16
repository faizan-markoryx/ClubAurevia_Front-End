import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const CustomerNavbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const mobileLinkClass = ({ isActive }: any) =>
    `flex justify-between items-center px-4 py-3 border-b text-primary ${isActive ? "font-semibold" : ""
    }`;

  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="mx-auto px-8 py-3 flex justify-between items-center">
            <span className="text-2xl sm:text-2xl font-medium tracking-tight font-display text-primary">
              CLUB AUREVIA
            </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 flex-wrap">
            <div className={`cursor-pointer px-4 py-2 flex justify-center items-center rounded-lg text-sm font-medium transition text-primary border border-primary hover:bg-red-700 hover:text-white hover:border-transparent`} onClick={()=>navigate("/login")}>
               Logout
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>

        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">

          <span className="font-semibold text-primary">
            Menu
          </span>

          <button
            className="text-xl text-primary"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>

        </div>

        {/* Mobile Links */}
        <div className="flex flex-col">

          <NavLink to="/admin/dashboard" className={mobileLinkClass} onClick={() => setOpen(false)}>
            Dashboard
            <span>›</span>
          </NavLink>

          <NavLink to="/admin/payments" className={mobileLinkClass} onClick={() => setOpen(false)}>
            Payments
            <span>›</span>
          </NavLink>

          <NavLink to="/admin/trip-inquiry" className={mobileLinkClass} onClick={() => setOpen(false)}>
            Trip Inquiry
            <span>›</span>
          </NavLink>

          <NavLink to="/admin/users" className={mobileLinkClass} onClick={() => setOpen(false)}>
            Users
            <span>›</span>
          </NavLink>

        </div>

      </div>
    </>
  );
};

export default CustomerNavbar;