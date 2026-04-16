import React from "react"
import { Outlet } from "react-router-dom"
import { SiteHeader } from "../components/SiteHeader"
import { SiteFooter } from "../components/SiteFooter"
import ScrollToTop from "../components/ScrollToTop"
import WhatsappButton from "../components/WhatsappButton"

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="mx-auto flex min-h-screen flex-col">
        <main>
          <ScrollToTop/>
          <Outlet />
        </main>
      <div className="mx-auto flex flex-col bg-primary w-full items-center">
        <SiteFooter />
      </div>
      <WhatsappButton/>
      </div>
    </div>
  )
}

