import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiChevronRight } from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 selection:bg-primary/20 selection:text-primary">
      {/* Top Banner / Header */}
      <section className="bg-gradient-to-b from-[#16302C] via-[#1a3833] to-[#16302C] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DBA800]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1
            id="aurevia-hero-title"
            className="font-display text-3xl leading-tight text-secondary sm:text-5xl pt-8"
          >
            Terms & Conditions
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
              <span className="text-[#DBA800]">1.</span> Introduction and Acceptance
            </h2>
            <p>
              These Terms & Conditions govern access to the Club Aurevia website, holiday membership services and related booking assistance.
            </p>
            <p>
              By purchasing a membership, submitting a booking request or using our services, you agree to these terms and the membership-specific details communicated to you at the time of purchase.
            </p>
            <p className="font-medium text-gray-900">
              If any provision in your signed membership agreement differs from these general website terms, the applicable agreement and mandatory law will govern to the extent of the inconsistency.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">2.</span> Membership Eligibility and Registration
            </h2>
            <ul className="space-y-2.5 pl-2">
              {[
                "Membership applications must be submitted with accurate and complete information.",
                "The applicant must be legally capable of entering into a binding agreement.",
                "Identity or address verification may be requested where reasonably necessary.",
                "Membership benefits become available subject to the applicable plan, completion of required formalities and receipt of the required payment.",
                "Membership credentials and member information should be kept secure."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">3.</span> Membership Benefits and Validity
            </h2>
            <p>
              Membership benefits, duration, holiday nights, room occupancy, meal plans and other entitlements are determined by the membership plan purchased by the member.
            </p>
            <p>
              The member should refer to their membership confirmation or agreement for the exact benefits applicable to their plan.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 bg-[#F9F9F8] p-3.5 rounded-lg border border-gray-100">
              <strong className="text-gray-900">Please Note:</strong> Unless specifically included in the purchased plan, membership does not automatically include flights, transfers, sightseeing, visa services, travel insurance, additional meals or other third-party services.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">4.</span> Hotel and Resort Availability
            </h2>
            <ul className="space-y-2.5 pl-2">
              {[
                "All bookings are subject to availability at the selected property.",
                "A booking request is not a confirmed reservation until written confirmation is issued.",
                "Availability may vary according to destination, dates, occupancy, season and property-specific restrictions.",
                "If a requested property is unavailable, Club Aurevia may offer an alternative property of a comparable category, subject to availability and the member's applicable plan.",
                "Property listings, facilities and amenities may change from time to time."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">5.</span> Booking Procedure
            </h2>
            <p>
              Members should submit their preferred destination, travel dates, number of guests and other required details to the reservations team.
            </p>
            <p>
              Members are advised to request bookings at least <strong className="text-gray-900">7–10 days in advance</strong>. During festivals and peak travel periods, requests should be submitted at least <strong className="text-gray-900">45 days in advance</strong>.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Advance notice does not guarantee availability or confirmation.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">6.</span> Membership Usage Rules
            </h2>
            <p>The following conditions apply where they form part of the member's purchased plan:</p>
            <ul className="space-y-2.5 pl-2">
              {[
                "A minimum interval of 90 days must be maintained between consecutive holidays.",
                "Membership nights may be split across different destinations or combined for a longer stay only where permitted by the membership plan and confirmed by Club Aurevia.",
                "Membership nights may be gifted to eligible family members, friends or relatives where permitted by the plan and after any required approval.",
                "Regular membership nights and complimentary nights cannot be used together during the same holiday where this restriction applies to the member's plan.",
                "Members must comply with the room occupancy limits and age rules of the selected property.",
                "Extra guests, additional rooms, extra beds, meals, taxes or other property charges may incur additional costs."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">7.</span> Payments and Taxes
            </h2>
            <p>
              Membership fees and other applicable charges must be paid through the payment methods communicated by Club Aurevia.
            </p>
            <p>
              Members should retain their payment confirmation or receipt. Any applicable taxes, extra-person charges, property fees or third-party charges will be communicated where applicable.
            </p>
            <p>
              A membership becomes active in accordance with the payment and activation conditions of the purchased plan.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">8.</span> Cancellation, Refunds and Changes
            </h2>
            <p>
              Membership cancellation, booking cancellation, rescheduling and refund requests are governed by the separate <strong className="text-gray-900">Cancellation Policy</strong> and <strong className="text-gray-900">Refund Policy</strong> published on our website, along with the applicable membership agreement and mandatory law.
            </p>
            <p className="font-medium text-gray-900">
              Members should review these policies before purchasing a membership or confirming a booking.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">9.</span> Member Responsibilities
            </h2>
            <p>Members agree to:</p>
            <ul className="space-y-2 pl-2">
              {[
                "Provide accurate information during registration and booking.",
                "Use membership benefits in accordance with their plan.",
                "Follow hotel rules, safety requirements and check-in procedures.",
                "Respect the property, staff and other guests.",
                "Pay applicable charges that are not included in the membership.",
                "Avoid fraudulent, unlawful or abusive use of our services."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 10 & 11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                10. Third-Party Services
              </h2>
              <p className="text-xs sm:text-sm">
                Hotels, resorts, transport operators and other travel suppliers may be independently responsible for delivering their respective services. Their property rules, facilities, schedules and service conditions may apply in addition to these terms. Club Aurevia will provide reasonable booking assistance within the scope of its services.
              </p>
            </section>

            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                11. Events Beyond Our Control
              </h2>
              <p className="text-xs sm:text-sm">
                Circumstances such as natural disasters, severe weather, government restrictions, public emergencies, transport disruptions or other events beyond reasonable control may affect travel plans or service delivery. We will endeavour to communicate material changes and assist with available alternatives.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 12, 13 & 14 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#16302C]">
                12. Intellectual Property
              </h2>
              <p className="text-xs sm:text-sm">
                Website text, branding, graphics, photographs and other content belonging to Club Aurevia may not be reproduced, distributed or commercially used without prior written permission.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#16302C]">
                13. Amendments
              </h2>
              <p className="text-xs sm:text-sm">
                Club Aurevia may update these website terms when necessary. Updated terms will be published on the website with a revised date. Changes to an existing membership will remain subject to the member's agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#16302C]">
                14. Governing Law & Disputes
              </h2>
              <p className="text-xs sm:text-sm">
                These terms are governed by the laws of India. Any dispute will be addressed through applicable consumer grievance mechanisms and competent courts in accordance with applicable law.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 15 - Contact Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">15.</span> Contact Information
            </h2>
            
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

          {/* Bottom Card (Exact reference match) */}
          <div className="pt-4">
            <div className="bg-primary text-white rounded-xl shadow-md p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-transform duration-200 hover:shadow-lg[cite: 23]">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
                  Have Questions About Our Terms & Conditions?
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

export default TermsAndConditions;