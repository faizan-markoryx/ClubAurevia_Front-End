import React from "react"
import { Outlet } from "react-router-dom"
import CustomerNavbar from "./CustomerNavbar"

export const CustomerLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <CustomerNavbar />
      <div className="mx-auto px-4 sm:px-8 py-6">
        <Outlet />
      </div>
    </div>
  )
}

