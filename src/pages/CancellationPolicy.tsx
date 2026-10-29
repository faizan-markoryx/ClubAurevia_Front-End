import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiChevronRight } from "react-icons/fi";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 font-sans selection:bg-primary/20 selection:text-primary">
      {/* Top Banner / Header */}
      <section className="bg-gradient-to-b from-[#16302C] via-[#1a3833] to-[#16302C] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DBA800]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1
            id="aurevia-hero-title"
            className="font-display text-3xl leading-tight text-secondary sm:text-5xl pt-8"
          >
            Cancellation Policy
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
              This Cancellation Policy explains the procedure and conditions for cancelling holiday bookings made through Club Aurevia and clarifies the distinction between cancelling a booking and cancelling a membership.
            </p>
            <p className="font-medium text-gray-900">
              Members should review this policy along with their membership agreement and the terms provided by the relevant hotel, resort or travel supplier.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">2.</span> Cancellation of Hotel or Resort Bookings
            </h2>
            <p>
              Members who need to cancel a confirmed holiday booking should contact the Club Aurevia reservations team as soon as possible.
            </p>
            <div className="bg-[#F9F9F8] p-4 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-900">
                Where the applicable membership terms permit cancellation, the request should be submitted at least <span className="text-primary font-bold">72 hours</span> before the scheduled check-in time.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              The cancellation deadline and consequences may differ depending on the property, rate conditions, destination or specific booking confirmation. The applicable conditions communicated for the booking will be used to assess the request, subject to applicable law.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                3. Late Cancellations and No-Shows
              </h2>
              <p className="text-xs sm:text-sm">
                If a member cancels after the permitted cancellation deadline or does not arrive for a confirmed booking, the reservation may be treated as used in accordance with the applicable membership and property terms.
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Where the membership agreement provides for a deduction of membership nights, the relevant nights may be deducted. Any supplier-imposed charges will be handled according to the booking conditions.
              </p>
            </section>

            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                4. Changes to Travel Dates or Guest Details
              </h2>
              <p className="text-xs sm:text-sm">
                Requests to change travel dates, guest names, occupancy or other booking details are subject to availability and the relevant property's rules.
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                A requested change is not confirmed until Club Aurevia or the applicable service provider communicates confirmation. Changes may involve additional charges or may not be permitted under certain booking conditions.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">5.</span> Membership Cancellation
            </h2>
            <p className="font-semibold text-gray-900">
              Cancellation of an individual hotel booking does not automatically cancel the membership.
            </p>
            <p>
              Membership termination, withdrawal or cancellation requests are governed by the membership agreement and applicable law. Members should contact Club Aurevia in writing to submit such a request.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Where the membership agreement states that the membership fee is non-refundable, the fee will be treated in accordance with that term, subject to any rights or remedies available under applicable law.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 6 & 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                6. Cancellation by a Hotel or Service Provider
              </h2>
              <p className="text-xs sm:text-sm">
                A hotel, resort or travel supplier may cancel or modify a reservation due to operational issues, safety concerns, overbooking or other circumstances.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                If this happens, Club Aurevia will endeavour to communicate the available options and assist with an alternative arrangement where reasonably possible. Alternative accommodation or other arrangements remain subject to availability and the applicable terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                7. Events Beyond Reasonable Control
              </h2>
              <p className="text-xs sm:text-sm">
                Unexpected events such as natural disasters, severe weather, government restrictions, public emergencies or major transport disruptions may affect travel arrangements.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                In such cases, members should contact our team promptly. Available changes, cancellations or refunds will be assessed according to the booking terms, supplier conditions and applicable law.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">8.</span> How to Submit a Cancellation Request
            </h2>
            <p>
              Please contact our reservations team using the registered contact details and provide:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                "Member's full name and membership ID.",
                "Booking confirmation number, if applicable.",
                "Property name and destination.",
                "Scheduled check-in date.",
                "Reason for cancellation or requested change."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 italic mt-1">
              Please retain written acknowledgement of your request. A cancellation request should not be considered confirmed until its status has been communicated by the relevant team or supplier.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">9.</span> Refunds Following Cancellation
            </h2>
            <p>
              Cancellation and refund are separate matters. Cancelling a booking does not automatically establish eligibility for a refund.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Any refund will be assessed under the <Link to="/refund-policy" className="text-primary font-semibold underline underline-offset-2">Refund Policy</Link>, the applicable membership agreement and the hotel or supplier's booking conditions, subject to applicable law.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 10 - Contact Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">10.</span> Contact Us
            </h2>
            <p className="text-sm">For booking cancellations and changes:</p>
            
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

          {/* Bottom Card */}
          <div className="pt-4">
            <div className="bg-primary text-white rounded-xl shadow-md p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-transform duration-200 hover:shadow-lg">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
                  Have Questions About Our Cancellation Policy?
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

export default CancellationPolicy;