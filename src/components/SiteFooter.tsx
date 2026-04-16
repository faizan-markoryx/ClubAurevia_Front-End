import React from "react";
import { NavLink } from "react-router-dom";
import AnimateSection from "./AnimateSection";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-primary pb-8 pt-10 text-secondary w-full px-6 md:px-16 lg:px-24">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <AnimateSection duration={0.4}>
          <div className="space-y-4">
            <p className="text-3xl font-display tracking-tight">CLUB AUREVIA</p>
            <p className="max-w-sm text-[14px] sm:text-[16px] text-secondary/70 font-thin">
              Find out everything from parking to pet policy, so you can book with total peace of
              mind.
            </p>

            {/* <div className="space-y-2">
            <p className="text-[18px] text-secondary/80 font-thin">Follow Us</p>
            <div className="flex flex-wrap items-center gap-4 text-[16px] text-secondary/70">

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-secondary transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-secondary transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Snapchat"
                className="hover:text-secondary transition"
              >
                <FaSnapchatGhost size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-secondary transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div> */}
          </div>
        </AnimateSection>

        <AnimateSection duration={0.6} delay={0.2}>
          <div className="space-y-3 lg:ml-20">
            <p className="font-normal text-secondary/90 text-[18px]">General</p>
            <nav className="flex flex-col gap-2 text-sm text-secondary/70" aria-label="General">
              <NavLink to="/" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Home
              </NavLink>
              <NavLink to="/about-us" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                About us
              </NavLink>
              <NavLink to="/services" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Services
              </NavLink>
              <NavLink to="/contact-us" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Contact us
              </NavLink>
            </nav>
          </div>
        </AnimateSection>

        <AnimateSection duration={0.8} delay={0.4}>
          <div className="space-y-3 lg:ml-8">
            <p className="font-normal text-secondary/90 text-[18px]">Resource</p>
            <nav className="flex flex-col gap-2 text-sm text-secondary/70" aria-label="Resource">
              <NavLink to="/membership" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Membership
              </NavLink>
              <NavLink to="/destination" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Destination
              </NavLink>
              <NavLink to="/login" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Member login
              </NavLink>
              <NavLink to="/pay-now" className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Pay Now
              </NavLink>
            </nav>
          </div>
        </AnimateSection>

        <AnimateSection duration={1} delay={0.6}>
          <div className="space-y-3">
            <p className="font-normal text-secondary/90 text-[18px]">Contact</p>
            <div className="space-y-3 text-sm text-secondary/70">
              <p className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                Find out everything from parking to pet policy, so you can book with total peace of
                mind.
              </p>
              <div className="space-y-2">
                <p className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                  <a className="hover:text-secondary" href="mailto:info@lorem.com">
                    info@lorem.com
                  </a>
                </p>
                <p className="font-thin hover:text-secondary text-[14px] sm:text-[16px]">
                  <a className="hover:text-secondary" href="tel:+919897498972">
                    +91 98974 98972
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimateSection>
      </div>

      <div className="mt-10 border-t border-white/10 pt-5">
        <div className="flex flex-col gap-3 text-xs text-secondary/60 sm:flex-row sm:items-center sm:justify-center">
          <p className="text-[14px] sm:text-[16px] font-thin">2016 © All right reserved</p>
          {/* <p className="text-[14px] sm:text-[16px] font-thin">Made by Clickrit</p> */}
        </div>
      </div>
    </footer>
  )
}

