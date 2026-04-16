import memberBanner from "../assets/membership-page-images/membership-banner.jpg"
import PricingCards from "../components/PricingCards"
import membershipImage from "../assets/membership-page-images/membership-image.jpg"
import FaqSection from "../components/FaqSection"
import AureviaStandard from "../components/AureviaStandard"
import ExploreOurDestinations from "../components/ExploreOurDestinations"
import AnimateSection from "../components/AnimateSection"

const Membership = () => {
    return (
        <div>
            <section
                className="relative overflow-hidden bg-neutral-900 text-secondary h-[450px] sm:h-[765px]"
                aria-labelledby="aurevia-hero-title"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${memberBanner})`
                    }}
                />

                <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

                <AnimateSection>
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px] md:px-10 lg:px-16">
                        <h1
                            id="aurevia-hero-title"
                            className="font-display text-5xl leading-tight text-secondary sm:text-5xl md:text-[120px]"
                        >
                            Membership
                        </h1>
                    </div>
                </AnimateSection>
            </section>

            <section className="w-full px-6 md:px-12 lg:px-24 py-12">
                <div className="w-full flex justify-center items-center">
                    <AnimateSection delay={0.3}>
                        <div className="max-w-2xl space-y-4 sm:space-y-4 pb-12 px-6">
                            <h1
                                id="aurevia-hero-title"
                                className="font-display text-[32px] leading-tight text-primary sm:text-5xl md:text-[48px] text-center"
                            >
                                Choose Your Membership
                            </h1>

                            <p className="text-sm leading-relaxed text-primary/90 sm:text-sm px-2 sm:px-8 font-normal text-center">
                                Select a membership plan designed to give you access to premium hotel stays, curated destinations, and exclusive travel privileges.
                            </p>
                        </div>
                    </AnimateSection>
                </div>

                <AnimateSection delay={0.6}>
                    <PricingCards />
                </AnimateSection>
            </section>

            <section>
                <div className="max-w-7xl mx-auto pb-12 px-6 md:px-16 lg:px-8">

                    {/* Top Content */}
                    <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                        <AnimateSection>
                            <div className="w-full">
                                <h2 className="w-full text-[32px] sm:text-4xl md:text-5xl font-display text-primary mb-4 leading-tight">
                                    Exclusive Travel Memberships
                                </h2>
                            </div>
                        </AnimateSection>

                        <AnimateSection delay={0.6}>
                            <div className="">
                                <p className="text-primary text-sm sm:text-base leading-relaxed lg:w-[500px]">
                                    Discover the advantages of being a Club Aurevia member. Our travel memberships provide exclusive access to premium stays, curated destinations, and luxury hospitality experiences around the world.
                                </p>
                            </div>
                        </AnimateSection>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mt-10">

                        <AnimateSection>
                            <div className="overflow-hidden">
                                <img
                                    src={membershipImage}
                                    alt="Hotel Service"
                                    className="w-full h-[560px] object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                        </AnimateSection>
                    </div>
                </div>
            </section>

            <FaqSection />

            <ExploreOurDestinations />

            <AureviaStandard />
        </div>
    )
}

export default Membership