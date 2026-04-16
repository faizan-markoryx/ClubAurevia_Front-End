import React, { useEffect, useMemo, useState } from "react"
import { NavLink, type NavLinkRenderProps } from "react-router-dom"
import menuIcon from "../assets/home-page-images/menu-icon.png"

type NavItem = {
  to: string
  label: string
}

// const navLinkClassName = ({ isActive }: NavLinkRenderProps) => {
//   const base =
//     "text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
//   const active = "text-secondary underline underline-offset-8 decoration-secondary/70"
//   const inactive = "text-secondary/70 hover:text-secondary"
//   return `${base} ${isActive ? active : inactive}`
// }

const sidebarLinkClassName = ({ isActive }: NavLinkRenderProps) => {
  const base =
    "text-[21px] font-display tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm w-fit"
  const active = "text-secondary underline underline-offset-8 decoration-secondary/70"
  const inactive = "text-secondary/80 hover:text-secondary"
  return `${base} ${isActive ? active : inactive}`
}

export const SiteHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { to: "/", label: "Home" },
      { to: "/about-us", label: "About us" },
      { to: "/services", label: "Services" },
      { to: "/destination", label: "Destination" },
      { to: "/membership", label: "Membership" },
      { to: "/pay-now", label: "Pay Now" },
      { to: "/contact-us", label: "Contact us" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // 20px scroll ke baad bg lagega
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40">
        <div className={`mx-auto h-20 flex w-full items-center justify-between gap-4 px-6 md:px-16 lg:px-24 ${isScrolled ? "bg-primary" : "bg-transparent"}`}>
          <div className="flex items-center gap-3">
            <NavLink to="/" className="inline-flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-medium tracking-tight font-display text-secondary">
                CLUB AUREVIA
              </span>
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hidden sm:inline-flex items-center justify-center bg-secondary text-primary text-sm font-[400] px-5 py-2.5 transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Member login
            </NavLink>

            <div className="flex items-center">
              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-3 py-2 text-sm text-white font-thin"
                  aria-controls="sidebar-menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(true)}
                >
                  Menu
                </button>
              </div>
              <div className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                <img src={menuIcon} alt="menu icon" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-50 transition",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-black/50 transition-opacity",
            isMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />

        <aside
          id="sidebar-menu"
          className={[
            "absolute right-0 top-0 h-full w-[320px] sm:w-[550px] bg-primary transition-transform duration-300",
            "border-l border-white/10",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col px-7 py-8">
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                className="text-2xl font-display text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                CLUB AUREVIA
              </NavLink>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center text-secondary"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="mt-10 flex flex-1 flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={sidebarLinkClassName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-2">
                <NavLink
                  to="/login"
                  className="inline-flex items-center justify-center bg-secondary text-primary text-sm font-semibold px-5 py-2.5 transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Member login
                </NavLink>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-secondary/60 text-right">The Aurevia Standard</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

