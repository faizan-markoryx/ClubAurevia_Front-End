import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiChevronRight } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 selection:bg-primary/20 selection:text-primary">
      {/* Top Banner / Header */}
      <section className="bg-gradient-to-b from-[#16302C] via-[#1a3833] to-[#16302C] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DBA800]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1
            id="aurevia-hero-title"
            className="font-display text-3xl leading-tight text-secondary sm:text-5xl pt-8"
          >
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Club Aurevia Private Limited
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Last Updated: 29 October 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 md:p-12 space-y-10 text-sm sm:text-base leading-relaxed text-gray-700">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">1.</span> Introduction
            </h2>
            <p>
              Club Aurevia Private Limited (<strong className="text-gray-900">“Club Aurevia”, “we”, “our” or “us”</strong>) respects your privacy and is committed to protecting the personal information you share with us through our website, membership services and customer support channels.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store and share your information when you visit our website, enquire about our services, purchase a holiday membership or make a booking request.
            </p>
            <p className="font-medium text-gray-900">
              By using our website or services, you acknowledge that you have read this policy.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">2.</span> Information We Collect
            </h2>
            <p>Depending on how you interact with us, we may collect the following information:</p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                <span><strong className="text-gray-900">Personal Information:</strong> Name, date of birth where required, contact number, email address and residential address.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                <span><strong className="text-gray-900">Membership Information:</strong> Member ID, membership plan, membership validity, payment status and applicable membership benefits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                <span><strong className="text-gray-900">Booking Information:</strong> Preferred destination, travel dates, number of guests, accommodation preferences and special requests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                <span><strong className="text-gray-900">Payment Information:</strong> Transaction references, payment status and billing details. Payment card or banking credentials are handled by the relevant payment service provider where applicable.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                <span><strong className="text-gray-900">Technical Information:</strong> IP address, browser type, device information, website usage data and cookie-related information, where applicable.</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 italic mt-1">
              Please provide accurate information when making enquiries or booking requests.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">3.</span> How We Use Your Information
            </h2>
            <p>We may use your information to:</p>
            <ul className="space-y-2 pl-2">
              {[
                "Process membership applications and maintain member records.",
                "Respond to enquiries and provide customer support.",
                "Check hotel and resort availability and coordinate holiday bookings.",
                "Process payments, issue receipts and maintain transaction records.",
                "Communicate booking confirmations, updates and important membership information.",
                "Personalise our services and improve our website and customer experience.",
                "Send promotional communications where permitted by law and, where required, with your consent.",
                "Prevent fraud, protect our business and comply with applicable legal obligations."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">4.</span> Sharing of Information
            </h2>
            <p className="font-medium text-gray-900">We do not sell your personal information to third parties.</p>
            <p>Where necessary, we may share relevant information with:</p>
            <ul className="space-y-2 pl-2">
              {[
                "Hotels, resorts and accommodation partners to process your booking.",
                "Payment gateways and financial service providers to process transactions.",
                "Technology, website hosting, communication and customer support service providers.",
                "Professional advisers, regulators, law enforcement authorities or other parties where legally required."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 italic mt-1">
              We aim to share only the information reasonably necessary for the relevant purpose.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">5.</span> Cookies and Website Analytics
            </h2>
            <p>
              Our website may use cookies or similar technologies to maintain website functionality, understand visitor activity and improve performance.
            </p>
            <p>
              You can manage cookies through your browser settings. Disabling certain cookies may affect some website features.
            </p>
            <p>Where consent is required, we will seek it in accordance with applicable law.</p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">6.</span> Data Security and Retention
            </h2>
            <p>
              We use reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, alteration or disclosure.
            </p>
            <p>
              Information is retained for as long as reasonably necessary to provide services, maintain membership and transaction records, resolve disputes and meet applicable legal or regulatory requirements.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 italic">
              No online system can be guaranteed to be completely secure.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">7.</span> Your Privacy Rights
            </h2>
            <p>
              Subject to applicable law, you may request access to, correction of or deletion of your personal information, withdraw consent where processing relies on consent, or raise a concern regarding how your information is handled.
            </p>
            <p>
              Some information may need to be retained to meet legal obligations or resolve outstanding matters.
            </p>
            <p>To make a privacy-related request, contact us using the details below.</p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 8 & 9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                8. Third-Party Websites
              </h2>
              <p className="text-xs sm:text-sm">
                Our website may contain links to third-party websites or services. Their privacy practices are governed by their own policies, and we encourage you to review those policies before sharing information.
              </p>
            </section>

            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                9. Children's Privacy
              </h2>
              <p className="text-xs sm:text-sm">
                Our membership and booking services are intended to be managed by adults. Where information about children is required for a booking, it should be provided by a parent or lawful guardian, subject to applicable law.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">10.</span> Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy to reflect changes in our services, business practices or legal requirements. The revised version will be published on our website with an updated date.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 11 - Contact Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">11.</span> Contact Us
            </h2>
            <p className="text-sm">For questions, privacy requests or concerns, contact:</p>

            <div className="bg-[#16302C]/5 rounded-xl p-5 border border-[#16302C]/10 space-y-3">
              <p className="font-bold text-[#16302C] text-base">Club Aurevia Private Limited</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <a href="mailto:info@clubaurevia.com" className="flex items-center gap-2 text-gray-700 hover:text-[#16302C] transition-colors">
                  <FiMail className="text-[#DBA800] shrink-0" /> info@clubaurevia.com
                </a>
                <a href="tel:+918141112028" className="flex items-center gap-2 text-gray-700 hover:text-[#16302C] transition-colors">
                  <FiPhone className="text-[#DBA800] shrink-0" /> +91 81411 12028
                </a>
                <a href="https://www.clubaurevia.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#16302C] transition-colors">
                  <FiGlobe className="text-[#DBA800] shrink-0" /> www.clubaurevia.com
                </a>
                <div className="flex items-start gap-2 text-gray-700 sm:col-span-2">
                  <FiMapPin className="text-[#DBA800] shrink-0 mt-0.5" />
                  <span>
                    B-11th Floor / 1107, Titanium Business Park, Nr. Makarba Railway Crossing, B/h Divya Bhaskar Press Sarkhej Road Ahmedabad Gujarat 380007
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Card (Exact reference match with Primary Brand Colors) */}
          <div className="pt-4">
            <div className="bg-primary text-white rounded-xl shadow-md p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-transform duration-200 hover:shadow-lg[cite: 23]">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
                  Have Questions About Our Privacy Policy?
                </h3>
                <p className="text-xs sm:text-sm text-gray-200">
                  Contact us for clarification and updates
                </p>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-black/85 transition-all shadow-sm shrink-0"
              >
                <span>Contact Us</span>
                <FiChevronRight className="w-4 h-4 text-[#DBA800]" />
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;