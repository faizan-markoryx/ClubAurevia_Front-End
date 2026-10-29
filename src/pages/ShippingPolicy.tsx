import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiChevronRight } from "react-icons/fi";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 font-sans selection:bg-primary/20 selection:text-primary">
      {/* Top Banner / Header */}
      <section className="bg-gradient-to-b from-[#16302C] via-[#1a3833] to-[#16302C] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DBA800]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1
            id="aurevia-hero-title"
            className="font-display text-3xl leading-tight text-secondary sm:text-5xl pt-8"
          >
            Shipping & Delivery Policy
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
              <span className="text-[#DBA800]">1.</span> About This Policy
            </h2>
            <p>
              Club Aurevia provides holiday membership, hospitality and travel-related services. Our primary services are delivered digitally or through booking coordination rather than through the shipment of physical products.
            </p>
            <p>
              This policy explains the delivery of membership-related documents and any physical materials that may be provided as part of a membership.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">2.</span> Digital Delivery
            </h2>
            <p>
              Membership confirmations, booking details, invoices, receipts and other relevant documents may be sent to the registered email address or another communication channel agreed with the member.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Members are responsible for providing a correct email address and contact number and for checking their inbox, spam or junk folder.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">3.</span> Physical Documents or Membership Kits
            </h2>
            <p>
              If a physical membership kit, printed document or other item is included in the purchased plan, the delivery method and applicable conditions will be communicated to the member.
            </p>
            <p>
              Delivery may be arranged through an appropriate courier or postal service, where available.
            </p>
            <p className="bg-[#F9F9F8] p-3.5 rounded-lg border border-gray-100 text-xs sm:text-sm font-medium text-gray-900">
              Physical delivery is applicable only where such an item forms part of the member's entitlement or has been separately agreed.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                4. Delivery Address & Contact Details
              </h2>
              <p className="text-xs sm:text-sm">
                Members should ensure that their delivery address and contact details are accurate and complete.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                If an address or contact detail changes after dispatch, please notify our support team as soon as possible. Changes may not be possible once an item has been handed over to the courier.
              </p>
            </section>

            <section className="space-y-2 bg-[#F9F9F8] p-5 rounded-xl border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                5. Delivery Timelines
              </h2>
              <p className="text-xs sm:text-sm">
                Any estimated delivery timeline will be communicated where applicable. Actual delivery may vary due to courier operations, location, weather, public holidays or other circumstances outside our reasonable control.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                A delivery estimate is not a guarantee of delivery on a particular date unless expressly confirmed.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6 & 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                6. Delayed, Lost or Damaged Deliveries
              </h2>
              <p className="text-xs sm:text-sm">
                If a physical item is delayed, appears lost or arrives damaged, contact our support team and provide the relevant details.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                We will review the matter and, where appropriate, coordinate with the delivery provider to identify the available resolution.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#16302C]">
                7. Shipping Charges
              </h2>
              <p className="text-xs sm:text-sm">
                Any applicable shipping or courier charges will be communicated to the customer before the relevant order or delivery is confirmed.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                No shipping charge will apply to a physical item unless it is applicable to the particular transaction and has been appropriately disclosed.
              </p>
            </section>
          </div>

          <hr className="border-gray-100" />

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">8.</span> Incorrect or Undeliverable Addresses
            </h2>
            <p>
              Club Aurevia cannot guarantee successful delivery where the address provided is incomplete, inaccurate or inaccessible.
            </p>
            <p>
              If an item is returned or cannot be delivered, our team may contact the member to confirm the next steps. Additional delivery charges, if applicable, will be communicated before arranging a new dispatch.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 9 - Contact Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#16302C] flex items-center gap-2">
              <span className="text-[#DBA800]">9.</span> Contact Us
            </h2>
            <p className="text-sm">For document delivery or shipping enquiries:</p>
            
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
                  Have Questions About Our Delivery Policy?
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

export default ShippingPolicy;