import aboutBanner from '../assets/about-page-images/about-us-banner.jpg'
import ourVisionImage from '../assets/about-page-images/our-vision.jpg'
import ourExperienceImage from '../assets/about-page-images/our-experience.png'
import ourCommitmentImage from '../assets/about-page-images/our-commitment.png'

import aboutUsImage1 from '../assets/about-page-images/about-us-image1.jpg'
import aboutUsImage2 from '../assets/about-page-images/about-us-image2.jpg'
import aboutUsImage3 from '../assets/about-page-images/about-us-image3.jpg'
import TestimonialSlider from '../components/TestimonialSlider'

import AureviaStandard from '../components/AureviaStandard'
import ExploreOurDestinations from '../components/ExploreOurDestinations'
import AnimateSection from '../components/AnimateSection'

const AboutUs = () => {
    return (
        <>
            <section
                className="relative overflow-hidden bg-neutral-900 text-secondary h-[450px] sm:h-[765px]"
                aria-labelledby="aurevia-hero-title"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${aboutBanner})`
                    }}
                />

                <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

                <AnimateSection>
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px] md:px-10 lg:px-16">
                        <h1
                            id="aurevia-hero-title"
                            className="font-display text-5xl leading-tight text-secondary sm:text-5xl md:text-[120px]"
                        >
                            About us
                        </h1>
                    </div>
                </AnimateSection>
            </section>


            <section className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[600px] py-12 lg:py-0">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <AnimateSection duration={1.6}>
                        {/* --- LEFT SIDE: TEXT CONTENT --- */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                            <h1 className="text-primary text-[32px] md:text-5xl lg:text-[40px] font-display leading-tight">
                                Our Vision
                            </h1>

                            <p className="text-primary text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                At Club Aurevia, our vision is to redefine modern luxury hospitality through refined experiences, timeless elegance, and exceptional service. We aspire to create a distinguished standard where comfort, care, and sophistication come together seamlessly, setting a benchmark in premium lifestyle and hospitality experiences.
                            </p>
                        </div>
                    </AnimateSection>

                    <AnimateSection duration={1.6} delay={0.6}>
                        {/* --- RIGHT SIDE: IMAGE WITH FIGMA GRADIENT --- */}
                        <div
                            className="relative order-1 lg:order-2 mx-auto lg:ml-auto overflow-hidden"
                            style={{ width: "100%", height: "458px" }}
                        >
                            <img
                                src={ourVisionImage}
                                alt="Experience"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </AnimateSection>

                </div>
            </section>


            <section className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[600px] py-12 lg:py-0">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <AnimateSection duration={1.6} delay={0.6}>
                        {/* --- LEFT SIDE: TEXT CONTENT --- */}
                        <div
                            className="relative order-2 lg:order-1 mx-auto lg:ml-auto overflow-hidden"
                            style={{ width: "100%", height: "458px" }}
                        >
                            <img
                                src={ourExperienceImage}
                                alt="Experience"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </AnimateSection>

                    <AnimateSection duration={1.6}>
                        {/* --- RIGHT SIDE: IMAGE WITH FIGMA GRADIENT --- */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left order-1 lg:order-2">
                            <h1 className="text-primary text-[32px] md:text-5xl lg:text-[40px] font-display leading-tight">
                                Our Experience
                            </h1>

                            <p className="text-primary text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Club Aurevia curates thoughtfully designed stays, exclusive destinations, and elevated services tailored for discerning travelers. Every detail — from ambiance to personalized attention — is crafted to ensure a seamless blend of comfort and contemporary luxury. We believe true luxury lies in experience, not excess.
                            </p>
                        </div>
                    </AnimateSection>

                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 py-12 lg:py-0">

                <AnimateSection duration={1.6} delay={0.6}>
                    <div className="overflow-hidden">
                        <img
                            src={aboutUsImage1}
                            alt="Hotel Service"
                            className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                </AnimateSection>

                <AnimateSection duration={1.6} delay={0.9}>
                    <div className="overflow-hidden">
                        <img
                            src={aboutUsImage2}
                            alt="Reception"
                            className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                </AnimateSection>

                <AnimateSection duration={1.6} delay={1.2}>
                    <div className="overflow-hidden">
                        <img
                            src={aboutUsImage3}
                            alt="Front Desk"
                            className="w-full h-[517px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                </AnimateSection>

            </div>

            <section className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[600px] py-12 lg:py-0">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <AnimateSection duration={1.6}>
                        {/* --- LEFT SIDE: TEXT CONTENT --- */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                            <h1 className="text-primary text-[32px] md:text-5xl lg:text-[40px] font-display leading-tight">
                                Our Commitment
                            </h1>

                            <p className="text-primary text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                We are committed to delivering excellence through integrity, quality, and genuine hospitality. With a focus on long-term relationships and unforgettable memories, Club Aurevia promises an experience defined by trust, refinement, and The Aurevia Standard.
                            </p>
                        </div>
                    </AnimateSection>

                    <AnimateSection duration={1.6} delay={0.6}>
                        {/* --- RIGHT SIDE: IMAGE WITH FIGMA GRADIENT --- */}
                        <div
                            className="relative order-1 lg:order-2 mx-auto lg:ml-auto overflow-hidden"
                            style={{ width: "100%", height: "458px" }}
                        >
                            <img
                                src={ourCommitmentImage}
                                alt="Experience"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </AnimateSection>

                </div>
            </section>

            <ExploreOurDestinations />

            <AureviaStandard />

            <TestimonialSlider />
        </>
    )
}

export default AboutUs