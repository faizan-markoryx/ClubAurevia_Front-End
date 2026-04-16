import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import AnimateSection from "./AnimateSection";

const MilestonesSection = () => {
    return (
        <section className="bg-primary text-white py-16 md:py-24">
            <div className="w-full px-6 md:px-16 lg:px-24">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    <AnimateSection duration={1.3}>
                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="font-display text-[32px] sm:text-4xl md:text-5xl mb-4">
                                Our Impressive Milestones
                            </h2>

                            <div className="w-full h-[1px] bg-white/50 mb-6"></div>

                            <p className="text-white/80 mb-8 max-w-md text-sm sm:text-base font-thin">
                                From quick answers to in-depth guidance, we’re committed
                                to making sure you feel confident. From quick answers to
                                in depth guidance, we’re committed to.
                            </p>

                            <NavLink to="/contact-us">
                                <button className="bg-white text-[#123b33] px-8 py-3 text-sm tracking-wide hover:bg-gray-200 transition duration-300">
                                    Book Now
                                </button>
                            </NavLink>
                        </div>
                    </AnimateSection>

                    <AnimateSection duration={1.3} delay={0.6}>
                        {/* RIGHT COUNTERS */}
                        <div className="grid grid-cols-2 gap-10 text-center lg:text-left">

                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-thin">
                                        <Counter end={2500} suffix="+" />
                                    </h3>
                                    <p className="text-white/80 mt-2 text-sm">
                                        Delighted Clients
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-start items-center">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-thin">
                                            <Counter end={9} suffix="+" />
                                        </h3>
                                        <p className="text-white/80 mt-2 text-sm">
                                            Years Experience
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-thin">
                                        <Counter end={5} suffix="Star" />
                                    </h3>
                                    <p className="text-white/80 mt-2 text-sm">
                                        Excellence Standard
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-start items-center">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-thin">
                                            <Counter end={500} suffix="+" />
                                        </h3>
                                        <p className="text-white/80 mt-2 text-sm">
                                            Destinations Served
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </AnimateSection>

                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;