import { NavLink } from "react-router-dom"
import HomeNewImage1 from "../assets/home-page-images/Home-New-Image-1.png"
import AnimateSection from "./AnimateSection"

const ExploreOurDestinations = () => {
    return (
        <section
            className="relative overflow-hidden bg-neutral-900 text-secondary h-[600px]"
            aria-labelledby="aurevia-hero-title"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${HomeNewImage1})`,
                }}
            />

            <div className="absolute inset-0 bg-black/70 sm:bg-black/70" />

            <AnimateSection duration={1.3}>
                <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[600px] md:px-10 lg:px-16">
                    <div className="w-full xl:w-[777px] space-y-4 sm:space-y-6">

                        <h1
                            id="aurevia-hero-title"
                            className="font-display text-[32px] leading-tight text-secondary sm:text-5xl md:text-[60px]"
                        >
                            Explore Our Destinations
                        </h1>

                        <p className="text-sm leading-relaxed text-secondary/90 sm:text-base px-6 sm:px-12 font-thin">
                            From vibrant global cities to tranquil coastal retreats, explore destinations designed for
                            extraordinary travel experiences.
                        </p>

                        <div className="pt-4 sm:pt-0">
                            <NavLink
                                to="/destination"
                                className="sm:inline-flex items-center justify-center bg-secondary text-primary text-[16px] font-thin px-6 sm:px-8 py-2 sm:py-3 transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Discover More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </AnimateSection>
        </section>
    )
}

export default ExploreOurDestinations