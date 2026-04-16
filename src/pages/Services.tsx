import servicesBanner from '../assets/services-page-images/services-banner.jpg'
import servicesImage from "../assets/services-page-images/services-image.jpg"
import AnimateSection from '../components/AnimateSection'
import AureviaStandard from '../components/AureviaStandard'
import ExploreOurDestinations from '../components/ExploreOurDestinations'

const Services = () => {
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
                            `url(${servicesBanner})`
                    }}
                />

                <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

                <AnimateSection>
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px] md:px-10 lg:px-16">
                        <h1
                            id="aurevia-hero-title"
                            className="font-display text-5xl leading-tight text-secondary sm:text-5xl md:text-[120px]"
                        >
                            Services
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
                                Where Luxury Travel Meets Exclusive Membership
                            </h1>

                            <p className="text-primary text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                At Club Aurevia, we redefine the way you experience travel. Through our exclusive membership programs, you gain access to a curated collection of luxury hotels, premium destinations, and unforgettable experiences. Our mission is to deliver comfort, elegance, and exceptional hospitality — all under one trusted platform.
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
                                src={servicesImage}
                                alt="Experience"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </AnimateSection>

                </div>
            </section>

            <section>
                <div className="w-full py-12 px-6 md:px-16 lg:px-24">

                    {/* Top Content */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                        <AnimateSection>
                            <div className="max-w-2xl">
                                <h2 className="text-[32px] sm:text-4xl md:text-5xl font-display text-primary leading-tight">
                                    Elevated Travel Memberships
                                </h2>
                            </div>
                        </AnimateSection>

                        <AnimateSection delay={0.3}>
                            <div className="">
                                <p className="text-primary text-sm sm:text-base leading-relaxed xl:pl-40">
                                    At Club Aurevia, we redefine luxury travel by offering exclusive membership plans that unlock premium hotel stays, curated destinations, and exceptional hospitality experiences around the world.
                                </p>
                            </div>
                        </AnimateSection>
                    </div>

                    <AnimateSection delay={0.6}>
                        {/* Images Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                <div>
                                    {/* Heading */}
                                    <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                        Luxury Hotel & Resort <br /> Memberships
                                    </h2>

                                    {/* Divider */}
                                    <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                    {/* Description */}
                                    <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                        We provide exclusive access to 4-Star and 5-Star Hotels & Luxury
                                        Resorts across India and international destinations.
                                    </p>

                                    {/* Bullet Points */}
                                    <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                            Premium stays at curated properties
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                            Verified luxury hospitality partners
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                            Priority booking assistance
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                            Assured comfort and quality standards
                                        </li>
                                    </ul>
                                </div>

                                <div className='w-full'>
                                    {/* Button */}
                                    <button
                                        className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                    >
                                        Step Into Luxury
                                    </button>
                                </div>
                            </div>
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                {/* Heading */}
                                <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                    Family Membership <br /> Plans
                                </h2>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                {/* Description */}
                                <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                    Designed for families who love to travel together.
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Spacious premium accommodations
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Child-friendly and family-oriented resorts
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Affordable annual holiday planning
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Safe and comfortable stays
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                >
                                    Step Into Luxury
                                </button>
                            </div>
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                {/* Heading */}
                                <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                    Solo Travel Membership
                                </h2>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                {/* Description */}
                                <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                    For independent explorers and business travelers.
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Handpicked luxury properties
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Flexible booking support
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Exclusive member pricing
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Comfortable and secure stays
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                >
                                    Step Into Luxury
                                </button>
                            </div>
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                {/* Heading */}
                                <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                    Couples & Honeymoon <br /> Packages
                                </h2>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                {/* Description */}
                                <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                    Celebrate love with romantic luxury experiences.
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Romantic 4 & 5-star destinations
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Special honeymoon arrangements
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Resort upgrades (subject to availability)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Privacy, elegance & premium comfort
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                >
                                    Step Into Luxury
                                </button>
                            </div>
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                {/* Heading */}
                                <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                    Flights & Cab Services
                                </h2>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                {/* Description */}
                                <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                    We provide best price guaranteed assistance on flights and cab services exclusively for our club members.
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Competitive flight pricing
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Reliable airport transfers
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Premium cab services
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        End-to-end travel coordination
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                >
                                    Step Into Luxury
                                </button>
                            </div>
                            <div
                                className="w-full max-w-[420px] bg-primary text-white p-5 sm:p-10 border border-gray-300 h-[550px] flex flex-col justify-between items-start"
                            >
                                {/* Heading */}
                                <h2 className="text-[28px] sm:text-[32px] leading-[42px] font-display tracking-tighter">
                                    Hospitality Assistance <br /> & Travel Support
                                </h2>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-400 my-6 opacity-40"></div>

                                {/* Description */}
                                <p className="text-[16px] font-light leading-[26px] text-gray-200 mb-6">
                                    Our professional hospitality team ensures smooth planning and execution.
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 text-[14px] font-light text-gray-200 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Dedicated booking assistance
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Travel consultation
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Transparent policies
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-[6px] w-2 h-2 bg-gray-300 rounded-full"></span>
                                        Customer-first approach
                                    </li>
                                </ul>

                                {/* Button */}
                                <button
                                    className="w-full py-3 sm:py-4 bg-[#3E5F5A] text-white text-[14px] tracking-wide hover:bg-[#4a6f69] transition duration-300"
                                >
                                    Step Into Luxury
                                </button>
                            </div>
                        </div>
                    </AnimateSection>
                </div>
            </section>

            <ExploreOurDestinations />

            <AureviaStandard />
        </div>
    )
}

export default Services