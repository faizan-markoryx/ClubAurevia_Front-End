import React from "react"
import { NavLink } from "react-router-dom"

import bannerVideo from "../assets/home-page-images/banner-video.mp4"

import FeatureSection from "../components/FeatureSection";
import RoomSelector from "../components/RoomSelector";

import ExperienceParadiseImage1 from "../assets/home-page-images/Experience-Paradise-Image-1.png"
import ExperienceParadiseImage2 from "../assets/home-page-images/Experience-Paradise-Image-2.png"
import ExperienceParadiseImage3 from "../assets/home-page-images/Experience-Paradise-Image-3.png"

import BrandsLogo1 from "../assets/client-logos/Client-Logo-1.png"
import BrandsLogo2 from "../assets/client-logos/Client-Logo-2.png"
import BrandsLogo3 from "../assets/client-logos/Client-Logo-3.png"
import BrandsLogo4 from "../assets/client-logos/Client-Logo-4.png"
import BrandsLogo5 from "../assets/client-logos/Client-Logo-5.png"
import BrandsLogo6 from "../assets/client-logos/Client-Logo-6.png"
import BrandsLogo7 from "../assets/client-logos/Client-Logo-17.png"
import BrandsLogo8 from "../assets/client-logos/Client-Logo-18.png"
import BrandsLogo9 from "../assets/client-logos/Client-Logo-19.png"
import BrandsLogo10 from "../assets/client-logos/Client-Logo-20.png"
import MilestonesSection from "../components/MilestonesSection";

import AirlinesPartners1 from "../assets/client-logos/Client-Logo-7.png"
import AirlinesPartners2 from "../assets/client-logos/Client-Logo-8.png"
import AirlinesPartners3 from "../assets/client-logos/Client-Logo-9.png"
import AirlinesPartners4 from "../assets/client-logos/Client-Logo-10.png"
import AirlinesPartners5 from "../assets/client-logos/Client-Logo-21.png"

import TravelPartners1 from "../assets/client-logos/Client-Logo-11.png"
import TravelPartners2 from "../assets/client-logos/Client-Logo-12.png"
import TravelPartners3 from "../assets/client-logos/Client-Logo-13.png"
import TravelPartners4 from "../assets/client-logos/Client-Logo-14.png"
import TravelPartners5 from "../assets/client-logos/Client-Logo-15.png"
import TravelPartners6 from "../assets/client-logos/Client-Logo-16.png"
// import TravelPartners7 from "../assets/client-logos/Client-Logo-22.svg"
// import TravelPartners7 from "../assets/client-logos/Client-Logo-22.png"
import TravelPartners8 from "../assets/client-logos/Client-Logo-23.png"
import TravelPartners9 from "../assets/client-logos/Client-Logo-24.svg"
import FaqSection from "../components/FaqSection";

import Handpicked1 from "../assets/home-page-images/Handpicked-1.jpg"
import Handpicked2 from "../assets/home-page-images/Handpicked-2.jpg"
import Handpicked3 from "../assets/home-page-images/Handpicked-3.jpg"
import TestimonialSlider from "../components/TestimonialSlider";
import DestinationSlider from "../components/DestinationSlider";
import AureviaStandard from "../components/AureviaStandard";
import BrandLogoSlider from "../components/BrandLogoSlider";
import ExploreOurDestinations from "../components/ExploreOurDestinations";
import AnimateSection from "../components/AnimateSection";

export const Home: React.FC = () => {

  const logos = [
    BrandsLogo1,
    BrandsLogo2,
    BrandsLogo3,
    BrandsLogo4,
    BrandsLogo5,
    BrandsLogo6,
    BrandsLogo7,
    BrandsLogo8,
    BrandsLogo9,
    BrandsLogo10,
  ];


  const airlinesPartners = [
    AirlinesPartners1,
    AirlinesPartners2,
    AirlinesPartners3,
    AirlinesPartners4,
    AirlinesPartners5,
    AirlinesPartners2,
    AirlinesPartners4,
    AirlinesPartners1,
    AirlinesPartners3,
    AirlinesPartners5
  ];

  const travelPartners = [
    TravelPartners1,
    TravelPartners2,
    TravelPartners3,
    TravelPartners4,
    TravelPartners5,
    TravelPartners6,
    // TravelPartners7,
    TravelPartners8,
    TravelPartners9,
    TravelPartners4,
  ]

  return (
    <>
      <section
        className="relative overflow-hidden bg-neutral-900 text-secondary min-h-screen sm:h-[765px]"
        aria-labelledby="aurevia-hero-title"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bannerVideo}   // <-- apna video path yaha daale
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/25 sm:bg-black/25" />

        <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center min-h-screen md:px-10 lg:px-16">
          <AnimateSection>
            <div className="max-w-2xl space-y-4 sm:space-y-6">

              <h1
                id="aurevia-hero-title"
                className="font-display text-[32px] leading-tight text-secondary sm:text-5xl md:text-[60px]"
              >
                The Aurevia Standard
              </h1>

              <p className="leading-relaxed text-secondary/90 text-sm sm:text-[18px] px-6 sm:px-6 font-thin">
                Where curated luxury meets exceptional hospitality, creating journeys defined by comfort, elegance, and unforgettable experiences.
              </p>

              <div className="pt-4 sm:pt-0">
                <NavLink
                  to="/contact-us"
                  className="sm:inline-flex items-center justify-center bg-secondary text-primary text-[16px] font-thin px-6 sm:px-8 py-2 sm:py-2.5 transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Book Now
                </NavLink>
              </div>
            </div>
          </AnimateSection>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-2xl space-y-4 sm:space-y-4 pb-12 px-6">
            <h1
              id="aurevia-hero-title"
              className="font-display text-[32px] leading-tight text-primary sm:text-5xl md:text-[48px] text-center"
            >
              Explore By Categories!
            </h1>

            <p className="text-sm leading-relaxed text-primary/90 sm:text-sm px-2 sm:px-6 font-normal text-center">
              Discover handpicked stays, curated journeys, and exceptional experiences designed for
              travelers who value comfort, luxury, and personalized hospitality.
            </p>
          </div>
        </div>
        <DestinationSlider />
      </section>

      <FeatureSection />

      <section>
        <div className="w-full py-12 px-6 md:px-16 lg:px-24">

          {/* Top Content */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <AnimateSection duration={0.6}>
              <div className="max-w-2xl">

                <h2 className="text-[32px] sm:text-4xl md:text-5xl font-display text-primary mb-4 leading-tight">
                  Experience Paradise
                </h2>

                <p className="text-primary text-sm sm:text-base leading-relaxed">
                  From serene beachside escapes to iconic city destinations, Club Aurevia offers access to extraordinary stays and unforgettable experiences tailored for modern travelers.
                </p>
              </div>
            </AnimateSection>

            <AnimateSection duration={1.6} delay={0.8}>
              <NavLink to="/destination">
                <button className="bg-primary text-[#E0E1E0] px-8 py-2 text-sm tracking-wide hover:bg-[#162a21] transition duration-300">
                  Explore Destination
                </button>
              </NavLink>
            </AnimateSection>
          </div>

          {/* Images Grid */}
          <AnimateSection duration={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

              <div className="overflow-hidden">
                <img
                  src={ExperienceParadiseImage1}
                  alt="Hotel Service"
                  className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  src={ExperienceParadiseImage2}
                  alt="Reception"
                  className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  src={ExperienceParadiseImage3}
                  alt="Front Desk"
                  className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

            </div>
          </AnimateSection>
        </div>
      </section>

      <RoomSelector />

      <ExploreOurDestinations />

      <AureviaStandard />

      <section className="w-full py-8">
        <div className="w-full flex justify-center items-center">
          <AnimateSection duration={1.3}>
            <div className="w-full xl:w-[871px] space-y-4 sm:space-y-4 px-6">
              <h1
                id="aurevia-hero-title"
                className="font-display text-[32px] leading-tight text-primary sm:text-5xl md:text-[48px] text-center"
              >
                Explore Our Global Hotel Partners
              </h1>

              <p className="text-sm leading-relaxed text-primary/90 sm:text-base px-8 font-thin text-center">
                We collaborate with the world’s most renowned hospitality brands to ensure exceptional comfort,
                quality, and service wherever you travel.
              </p>
            </div>
          </AnimateSection>
        </div>

        <AnimateSection duration={1.3} delay={0.5}>
          <BrandLogoSlider logos={logos} />
        </AnimateSection>
      </section>

      <MilestonesSection />

      <section className="w-full pt-16 py-8">
        <div className="w-full flex justify-center items-center">
          <AnimateSection duration={1.3}>
            <div className="max-w-4xl space-y-4 sm:space-y-4 px-6">
              <h1
                id="aurevia-hero-title"
                className="font-display text-[32px] leading-tight text-primary sm:text-5xl md:text-[48px] text-center"
              >
                Our Impressive Airlines Partners
              </h1>

              <p className="text-sm leading-relaxed text-primary/90 sm:text-base px-8 font-normal text-center">
                Discover the impact we've made in the travel industry through happy customers,
                successful bookings, and global reach.
              </p>
            </div>
          </AnimateSection>
        </div>

        <AnimateSection duration={1.3} delay={0.5}>
          <BrandLogoSlider logos={airlinesPartners} />
        </AnimateSection>
      </section>

      <section className="w-full py-8">
        <div className="w-full flex justify-center items-center">
          <AnimateSection duration={1.3}>
            <div className="max-w-4xl space-y-4 sm:space-y-4 px-6">
              <h1
                id="aurevia-hero-title"
                className="font-display text-[2rem] leading-tight text-primary sm:text-5xl md:text-[48px] text-center"
              >
                Our Impressive Travel Partners
              </h1>

              <p className="text-sm leading-relaxed text-primary/90 sm:text-base px-8 font-normal text-center">
                Discover the impact we've made in the travel industry through happy customers,
                successful bookings, and global reach.
              </p>
            </div>
          </AnimateSection>
        </div>

        <AnimateSection duration={1.3} delay={0.5}>
          <BrandLogoSlider logos={travelPartners} />
        </AnimateSection>
      </section>

      <FaqSection />

      <TestimonialSlider />

      <section>
        <div className="w-full py-12 px-6 md:px-16 lg:px-24">

          {/* Top Content */}
          <AnimateSection duration={0.9}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

              <div className="max-w-2xl">

                <h2 className="text-[28px] sm:text-4xl md:text-5xl font-display text-primary sm:mb-4 leading-tight">
                  Handpicked Stays,
                  Unmatched Comfort!
                </h2>
              </div>

              <div className="">
                <p className="text-primary text-sm sm:text-base leading-relaxed">
                  Discover premium destinations and curated
                  experiences designed to redefine luxury travel.
                </p>
              </div>
            </div>
          </AnimateSection>

          <AnimateSection duration={1.6}>
            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

              <div className="relative overflow-hidden group">
                {/* Image */}
                <img
                  src={Handpicked1}
                  alt="Hotel Service"
                  className="w-full h-[400px] sm:h-[450px] lg:h-[517px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                  <NavLink to="/destination">
                    <button className="w-full bg-[#D9D9D9] backdrop-blur-sm text-[#1f3b2f] py-3 sm:py-3 text-sm sm:text-base tracking-wide hover:bg-white transition duration-300">
                      View More Destinations
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                {/* Image */}
                <img
                  src={Handpicked2}
                  alt="Hotel Service"
                  className="w-full h-[400px] sm:h-[450px] lg:h-[517px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                  <NavLink to="/destination">
                    <button className="w-full bg-[#D9D9D9] backdrop-blur-sm text-[#1f3b2f] py-3 sm:py-3 text-sm sm:text-base tracking-wide hover:bg-white transition duration-300">
                      View More Destinations
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                {/* Image */}
                <img
                  src={Handpicked3}
                  alt="Hotel Service"
                  className="w-full h-[400px] sm:h-[450px] lg:h-[517px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">

                  <NavLink to="/destination">
                    <button className="w-full bg-[#D9D9D9] backdrop-blur-sm text-[#1f3b2f] py-3 sm:py-3 text-sm sm:text-base tracking-wide hover:bg-white transition duration-300">
                      View More Destinations
                    </button>
                  </NavLink>
                </div>
              </div>



            </div>
          </AnimateSection>
        </div>
      </section>

    </>
  )
}

