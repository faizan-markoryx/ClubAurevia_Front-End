import React from "react"
import { Outlet } from "react-router-dom"
import AdminNavbar from "../components/Admin/AdminNavbar"

export const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <div className="mx-auto px-4 sm:px-8 py-6">
        <Outlet />
      </div>
    </div>
  )
}

