import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiChevronRight } from "react-icons/fi";

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 font-sans selection:bg-primary/20 selection:text-primary">
      {/* Top Banner / Header */}
      <section className="bg-gradient-to-b from-[#16302C] via-[#1a3833] to-[#16302C] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DBA800]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1
            id="aurevia-hero-title"
            className="font-display text-3xl leading-tight text-secondary sm:text-5xl pt-8"
          >
            Refund Policy
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
              <span className="text-[#DBA800]">1.</span> Overview
            </h2>
            <p>
              Club Aurevia aims to communicate membership fees, booking charges and applicable conditions clearly before a customer completes a purchase.
            </p>
            <p>
              This Refund Policy explains how refund requests relating to membership payments and other services are handled. It should be read together with the member's signed agreement, booking confirmation and applicable law.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">2.</span> Holiday Membership Fees
            </h2>
            <p>
              Membership fees are treated in accordance with the terms disclosed in the applicable membership agreement.
            </p>
            <div className="bg-[#F9F9F8] p-4 rounded-xl border border-gray-100 space-y-2">
              <p>
                Where the membership agreement clearly states that the membership fee is <strong className="text-gray-900">non-refundable</strong>, the fee will generally not be refunded merely because a member changes their mind, chooses not to use the membership or does not make bookings.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                Nothing in this policy excludes any refund, remedy or right that cannot lawfully be excluded under applicable law.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">3.</span> Booking and Third-Party Charges
            </h2>
            <p>
              Charges paid for hotels, resorts, transportation or other third-party services may be subject to the relevant supplier's refund and cancellation conditions.
            </p>
            <p>
              Where a refund is available, the amount and processing time may depend on the supplier, payment provider, booking conditions and any permitted deductions.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                4. Duplicate or Incorrect Payments
              </h2>
              <p className="text-xs sm:text-sm">
                If you believe that you have been charged more than once for the same transaction or that a payment was processed incorrectly, contact our support team with the relevant payment details.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                We will review the transaction and, where an error is verified, arrange an appropriate correction or refund in accordance with applicable law and payment-provider procedures.
              </p>
            </section>

            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                5. Booking Not Confirmed
              </h2>
              <p className="text-xs sm:text-sm">
                Submitting a booking request does not guarantee a reservation.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                If a separate payment has been collected for a booking that is not confirmed, the resolution will depend on the payment purpose, applicable booking terms and circumstances. Where a refund is due, it will be handled in accordance with the applicable terms and law.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">6.</span> How to Request a Refund
            </h2>
            <p>
              Please email{" "}
              <a href="mailto:info@clubaurevia.com" className="text-primary font-semibold underline underline-offset-2">
                info@clubaurevia.com
              </a>{" "}
              with the following details:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                "Full name of the member or customer.",
                "Membership ID, if applicable.",
                "Registered email address and contact number.",
                "Payment date and amount.",
                "Transaction reference or payment receipt.",
                "A brief explanation of the request."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBA800] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Our team may request additional information reasonably necessary to verify the transaction.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 7 & 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                7. Review and Processing
              </h2>
              <p className="text-xs sm:text-sm">
                Each request will be reviewed based on the membership agreement, transaction records, applicable supplier terms and relevant legal requirements.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Where a refund is approved, the processing time may vary depending on the original payment method and the bank or payment provider. We will communicate the outcome and any available processing details.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                8. Refunds to Original Payment Method
              </h2>
              <p className="text-xs sm:text-sm">
                Where practical and permitted by the payment provider, approved refunds will be returned to the original payment method.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Additional verification may be required to protect against unauthorised transactions.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 9 - Contact Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">9.</span> Contact Us
            </h2>
            <p className="text-sm">For refund-related enquiries:</p>
            
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
                  Have Questions About Our Refund Policy?
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

export default RefundPolicy;