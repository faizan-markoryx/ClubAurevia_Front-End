import contactBanner from "../assets/contact-page-image/contact-us-banner.jpg"
import AnimateSection from "../components/AnimateSection"
import AureviaStandard from "../components/AureviaStandard"
import ExploreOurDestinations from "../components/ExploreOurDestinations"
import emailjs from "emailjs-com"
import { useState } from "react"
import toast from "react-hot-toast"

const ContactUs = () => {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error("All fields are required")
            return
        }

        try {
            setLoading(true)

            await emailjs.send(
                "service_ulpv69s",
                "template_dfsf9on",
                formData,
                "FXesLceClaKzve7AW"
            )

            toast.success("Message sent successfully!")

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong ❌")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>

            {/* HERO SAME */}
            <section className="relative overflow-hidden bg-neutral-900 text-secondary h-[450px] sm:h-[765px]">
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${contactBanner})` }}
                />
                <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

                <AnimateSection>
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px]">
                        <h1 className="font-display text-5xl text-secondary md:text-[120px]">
                            Contact us
                        </h1>
                    </div>
                </AnimateSection>
            </section>

            {/* FORM SECTION */}
            <section className="w-full py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                    <AnimateSection duration={1.3}>
                        {/* LEFT SAME */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display text-primary">
                                Lorem Ipsum is simply <br /> dummy text of the!
                            </h2>

                            <p className="mt-6 text-primary max-w-md font-thin">
                                Connect with us via chat, email, or phone—we’ll respond promptly
                                with options that fit your needs and budget.
                            </p>

                            <div className="mt-10">
                                <h4 className="text-lg font-semibold text-primary">Address</h4>
                                <p className="mt-3 text-primary max-w-sm font-thin">
                                    Lorem Ipsum is simply dummy text...
                                </p>
                            </div>

                            <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-md">
                                <div className="md:border-r-2 md:border-[#E1E1E1]">
                                    <h4 className="text-lg font-semibold text-primary">Phone</h4>
                                    <p className="mt-3 text-primary font-thin">+91 95841 25842</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-primary">Email</h4>
                                    <p className="mt-3 text-primary font-thin">info@clubaureva.com</p>
                                </div>
                            </div>
                        </div>
                    </AnimateSection>

                    {/* FORM */}
                    <AnimateSection duration={1.3} delay={0.3}>
                        <div className="sm:px-4 rounded-xl">

                            <form onSubmit={handleSubmit} className="space-y-6">

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-[#E1E1E1] rounded-lg"
                                />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 bg-[#E1E1E1] rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 bg-[#E1E1E1] rounded-lg"
                                    />
                                </div>

                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 bg-[#E1E1E1] rounded-lg"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:opacity-90 transition"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>

                            </form>
                        </div>
                    </AnimateSection>

                </div>
            </section>

            <ExploreOurDestinations />
            <AureviaStandard />

        </div>
    )
}

export default ContactUs