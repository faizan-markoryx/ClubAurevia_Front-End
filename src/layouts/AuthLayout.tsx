import React from "react"
import { Outlet } from "react-router-dom"

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-secondary flex items-center justify-center">
      {/* <div className="w-full max-w-md rounded-xl border border-white/10 bg-slate-900/60 p-6"> */}
        <Outlet />
      {/* </div> */}
    </div>
  )
}

