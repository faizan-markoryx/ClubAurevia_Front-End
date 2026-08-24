// import { useEffect, useRef, useState } from "react";
// // Image Imports (Aap inhe apne actual assets se replace kar lena)
// import journeyBanner from "../assets/journey-page/journey-banner.png";
// // import step1Img from "../assets/journey-page/step-1.jpg";
// import step1Img from "../assets/journey-page/step-2.png";
// import step2Img from "../assets/journey-page/step-2.png";
// import step3Img from "../assets/journey-page/step-3.png";
// import step4Img from "../assets/journey-page/step-4.png";
// import step5Img from "../assets/journey-page/step-5.png";
// import step6Img from "../assets/journey-page/step-6.png";
// import ctaImage from "../assets/journey-page/cta-family.png";

// // Agar aapke paas AnimateSection component hai toh use import karein
// import AnimateSection from "../components/AnimateSection";

// const journeySteps = [
//   {
//     title: "Submit Your Travel Request",
//     description: "Login to your member portal and fill out the Trip Inquiry Form.",
//     list: ["Destination Preference", "Travel Dates", "Number of Guests", "Special Requirements"],
//     note: "Your holiday request is instantly received by our booking team.",
//     image: step1Img,
//     imageLeft: true,
//   },
//   {
//     title: "Our Team Reviews Availability",
//     description: "Our holiday experts connect with partner hotels and resorts to check availability based on your travel preferences.",
//     list: ["Destination Matching", "Date Availability Check", "Hotel Confirmation"],
//     image: step2Img,
//     imageLeft: false,
//   },
//   {
//     title: "Receive Hotel Options",
//     description: "We share available hotel and resort options that match your requested destination and travel dates.",
//     list: ["Multiple Hotel Choices", "Resort Details & Amenities", "Stay Options for Families & Couples"],
//     image: step3Img,
//     imageLeft: true,
//   },
//   {
//     title: "Select Your Preferred Stay",
//     description: "Choose the hotel or resort that best suits your holiday plans.\n\nOnce approved by you, our team proceeds with the booking process.",
//     image: step4Img,
//     imageLeft: false,
//   },
//   {
//     title: "Get Your Booking Confirmation",
//     description: "After confirmation from the hotel, we provide:",
//     list: ["Booking Voucher", "Hotel Confirmation Details", "Check-in Instructions", "Support Contact Information"],
//     image: step5Img,
//     imageLeft: true,
//   },
//   {
//     title: "Pack Your Bags & Enjoy",
//     description: "Check in, relax, and create unforgettable memories with your loved ones.\n\nOur support team remains available throughout your holiday.",
//     image: step6Img,
//     imageLeft: false,
//   },
// ];

// const BookingJourney = () => {
//   const [progress, setProgress] = useState(0);
//   const [activeStep, setActiveStep] = useState(0);

//   const containerRef = useRef(null);
//   const stepRefs = useRef([]);

//   // Scroll Tracking Logic for Line Fill and Active Circle
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       // Calculate how much we have scrolled past the middle of the screen
//       const triggerPoint = window.innerHeight / 2;
//       const scrollDistance = triggerPoint - rect.top;

//       // Calculate percentage for the line (0 to 100)
//       const percentage = (scrollDistance / rect.height) * 100;
//       setProgress(Math.min(100, Math.max(0, percentage)));

//       // Determine which step is currently active
//       let current = 0;
//       stepRefs.current.forEach((step, index) => {
//         if (step) {
//           const stepRect = step.getBoundingClientRect();
//           if (stepRect.top < triggerPoint + 50) {
//             current = index;
//           }
//         }
//       });
//       setActiveStep(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check on load

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll to specific section on circle click
//   const scrollToStep = (index) => {
//     if (stepRefs.current[index]) {
//       const yOffset = -window.innerHeight / 3; // Offset so it sits nicely in middle
//       const element = stepRefs.current[index];
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-[#FDFDFD] w-full">
//       {/* --- HERO SECTION --- */}
//       <section
//         className="relative overflow-hidden bg-neutral-900 text-secondary h-[400px] sm:h-[600px]"
//         aria-labelledby="journey-hero-title"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${journeyBanner})` }}
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="relative flex flex-col items-center justify-center px-4 h-full text-center">
//           <AnimateSection>
//             <h1
//               id="journey-hero-title"
//               className="font-display text-5xl leading-tight text-white sm:text-7xl md:text-[90px]"
//             >
//               Your Booking
//               <br />
//               Journey
//             </h1>
//           </AnimateSection>
//         </div>
//       </section>

//       {/* --- TIMELINE SECTION --- */}
//       <section className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-20 relative">
//         <div ref={containerRef} className="relative">

//           {/* Background Grey Line */}
//           <div className="absolute left-[20px] md:left-[40px] top-[50px] bottom-[50px] w-[2px] bg-gray-300"></div>

//           {/* Active Green Fill Line */}
//           <div
//             className="absolute left-[20px] md:left-[40px] top-[50px] w-[2px] bg-primary transition-all duration-300 ease-out"
//             style={{ height: `calc(${progress}% - 100px)` }}
//           ></div>

//           {/* Mapping Steps */}
//           {journeySteps.map((step, index) => (
//             <div
//               key={index}
//               ref={(el) => (stepRefs.current[index] = el)}
//               className="relative flex w-full mb-20 lg:mb-32 last:mb-0 items-center"
//             >
//               {/* Timeline Number Circle */}
//               <button
//                 onClick={() => scrollToStep(index)}
//                 className={`absolute left-[20px] md:left-[40px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-medium z-10 transition-all duration-500 cursor-pointer ${
//                   activeStep >= index
//                     ? "bg-primary text-white shadow-lg scale-110"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 {index + 1}
//               </button>

//               {/* Step Content */}
//               <div className="ml-[60px] md:ml-[100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//                 <AnimateSection duration={1.2} delay={0.2} className={step.imageLeft ? "order-2 lg:order-1" : "order-2"}>
//                   <div className="overflow-hidden rounded-xl shadow-lg">
//                     <img
//                       src={step.image}
//                       alt={step.title}
//                       className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 </AnimateSection>

//                 <AnimateSection duration={1.2} delay={0.4} className={step.imageLeft ? "order-1 lg:order-2" : "order-1"}>
//                   <div className="flex flex-col space-y-4">
//                     <h2 className="text-primary text-[28px] md:text-4xl lg:text-[42px] font-display leading-tight">
//                       {step.title}
//                     </h2>

//                     <p className="text-primary/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
//                       {step.description}
//                     </p>

//                     {step.list && (
//                       <ul className="space-y-2 mt-2">
//                         {step.list.map((item, i) => (
//                           <li key={i} className="flex items-start text-sm md:text-base text-primary/80">
//                             <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                     {step.note && (
//                       <p className="text-primary text-sm font-medium mt-4 italic">
//                         {step.note}
//                       </p>
//                     )}
//                   </div>
//                 </AnimateSection>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section className="w-full bg-primary mt-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 pt-16 pb-0 md:h-[400px]">

//         <div className="flex flex-col space-y-6 text-center md:text-left z-10 max-w-lg mb-10 md:mb-0">
//           <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
//             Ready for your<br />next holiday?
//           </h2>
//           <p className="text-white/80 text-sm md:text-base">
//             Submit your travel request today and<br />let us handle the rest.
//           </p>
//           <div>
//             <button className="bg-white text-primary px-8 py-3 font-medium text-sm hover:bg-secondary transition-colors duration-300">
//               SUBMIT TRAVEL REQUEST
//             </button>
//           </div>
//         </div>

//         {/* CTA Image (Flush to the bottom right) */}
//         <div className="relative md:absolute md:bottom-0 md:right-10 lg:right-32 w-full md:w-[45%] flex justify-center md:justify-end">
//           <img
//             src={ctaImage}
//             alt="Happy Family"
//             className="w-[80%] md:w-[100%] max-w-[500px] object-contain align-bottom"
//           />
//         </div>
//       </section>

//     </div>
//   );
// };

// export default BookingJourney;


import React from 'react'

import { useEffect, useRef, useState } from "react";

import journeyBanner from "../assets/journey-page/journey-banner.png";
// import step1Img from "../assets/journey-page/step-1.jpg";
import step1Img from "../assets/journey-page/step-2.png";
import step2Img from "../assets/journey-page/step-2.png";
import step3Img from "../assets/journey-page/step-3.png";
import step4Img from "../assets/journey-page/step-4.png";
import step5Img from "../assets/journey-page/step-5.png";
import step6Img from "../assets/journey-page/step-6.png";
import ctaImage from "../assets/journey-page/cta-family.png";

// Agar aapke paas AnimateSection component hai toh use import karein
import AnimateSection from "../components/AnimateSection";
import FaqSection from './FaqSection';

const journeySteps = [
  {
    title: "Submit Your Travel Request",
    description: "Login to your member portal and fill out the Trip Inquiry Form.",
    list: ["Destination Preference", "Travel Dates", "Number of Guests", "Special Requirements"],
    note: "Your holiday request is instantly received by our booking team.",
    image: step1Img,
    imageLeft: true,
  },
  {
    title: "Our Team Reviews Availability",
    description: "Our holiday experts connect with partner hotels and resorts to check availability based on your travel preferences.",
    list: ["Destination Matching", "Date Availability Check", "Hotel Confirmation"],
    image: step2Img,
    imageLeft: false,
  },
  {
    title: "Receive Hotel Options",
    description: "We share available hotel and resort options that match your requested destination and travel dates.",
    list: ["Multiple Hotel Choices", "Resort Details & Amenities", "Stay Options for Families & Couples"],
    image: step3Img,
    imageLeft: true,
  },
  {
    title: "Select Your Preferred Stay",
    description: "Choose the hotel or resort that best suits your holiday plans.\n\nOnce approved by you, our team proceeds with the booking process.",
    image: step4Img,
    imageLeft: false,
  },
  {
    title: "Get Your Booking Confirmation",
    description: "After confirmation from the hotel, we provide:",
    list: ["Booking Voucher", "Hotel Confirmation Details", "Check-in Instructions", "Support Contact Information"],
    image: step5Img,
    imageLeft: true,
  },
  {
    title: "Pack Your Bags & Enjoy",
    description: "Check in, relax, and create unforgettable memories with your loved ones.\n\nOur support team remains available throughout your holiday.",
    image: step6Img,
    imageLeft: false,
  },
];

const BookingJourney = () => {

  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  // Scroll Tracking Logic for Line Fill and Active Circle
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Calculate how much we have scrolled past the middle of the screen
      const triggerPoint = window.innerHeight / 2;
      const scrollDistance = triggerPoint - rect.top;

      // Calculate percentage for the line (0 to 100)
      const percentage = (scrollDistance / rect.height) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));

      // Determine which step is currently active
      let current = 0;
      stepRefs.current.forEach((step, index) => {
        if (step) {
          const stepRect = step.getBoundingClientRect();
          if (stepRect.top < triggerPoint + 50) {
            current = index;
          }
        }
      });
      setActiveStep(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to specific section on circle click
  const scrollToStep = (index) => {
    if (stepRefs.current[index]) {
      const yOffset = -window.innerHeight / 3; // Offset so it sits nicely in middle
      const element = stepRefs.current[index];
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FDFDFD] w-full">
      {/* --- HERO SECTION --- */}
      {/* <section
        className="relative overflow-hidden bg-neutral-900 text-secondary h-[400px] sm:h-[600px]"
        aria-labelledby="journey-hero-title"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${journeyBanner})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex flex-col items-center justify-center px-4 h-full text-center">
          <AnimateSection>
            <h1
              id="journey-hero-title"
              className="font-display text-5xl leading-tight text-white sm:text-7xl md:text-[90px]"
            >
              Your Booking
              <br />
              Journey
            </h1>
          </AnimateSection>
        </div>
      </section> */}


      <section
        className="relative overflow-hidden bg-neutral-900 text-secondary h-[450px] sm:h-[765px]"
        aria-labelledby="aurevia-hero-title"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${journeyBanner})`
          }}
        />

        <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

        <AnimateSection>
          <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px] md:px-10 lg:px-16">
            <h1
              id="journey-hero-title"
              className="font-display text-5xl leading-tight text-white sm:text-7xl md:text-[90px]"
            >
              Your Booking
              <br />
              Journey
            </h1>
          </div>
        </AnimateSection>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="w-full  px-4 md:px-10 lg:px-16 py-20 relative">
        <div ref={containerRef} className="relative">

          {/* Background Grey Line */}
          <div className="absolute left-[20px] md:left-[40px] top-[50px] bottom-[50px] w-[2px] bg-gray-300"></div>

          {/* Active Green Fill Line */}
          <div
            className="absolute left-[20px] md:left-[40px] top-[50px] w-[2px] bg-primary transition-all duration-300 ease-out"
            style={{ height: `calc(${progress}% - 100px)` }}
          ></div>

          {/* Mapping Steps */}
          {journeySteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative flex w-full mb-20 lg:mb-32 last:mb-0 items-center"
            >
              {/* Timeline Number Circle */}
              <button
                onClick={() => scrollToStep(index)}
                className={`absolute left-[20px] md:left-[40px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-medium z-10 transition-all duration-500 cursor-pointer ${activeStep >= index
                  ? "bg-primary text-white shadow-lg scale-110"
                  : "bg-gray-300 text-gray-600"
                  }`}
              >
                {index + 1}
              </button>

              {/* Step Content */}
              <div className="ml-[60px] md:ml-[100px] w-full grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 items-center">
                <AnimateSection duration={1.2} delay={0.2} className={step.imageLeft ? "order-2 lg:order-1" : "order-2"}>
                  <div className="overflow-hidden rounded-xl shadow-lg sm:h-[350px] sm:w-[500px] 2xl:w-full 2xl:h-[500px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </AnimateSection>

                <AnimateSection duration={1.2} delay={0.4} className={step.imageLeft ? "order-1 lg:order-2" : "order-1"}>
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-primary text-[28px] md:text-4xl lg:text-[42px] font-display leading-tight">
                      {step.title}
                    </h2>

                    <p className="text-primary text-[16px] md:text-[18px] leading-relaxed font-medium whitespace-pre-line">
                      {step.description}
                    </p>

                    {step.list && (
                      <ul className="space-y-2 mt-2">
                        {step.list.map((item, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base text-primary/80">
                            <span className="mr-2 mt-[9px] block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.note && (
                      <p className="text-primary text-sm font-medium mt-4 italic">
                        {step.note}
                      </p>
                    )}
                  </div>
                </AnimateSection>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full bg-primary mt-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 pt-16 pb-0 md:h-[400px]">

        <div className="flex flex-col space-y-6 text-center md:text-left z-10 max-w-lg mb-10 md:mb-0">
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Ready for your<br />next holiday?
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Submit your travel request today and<br />let us handle the rest.
          </p>
          <div>
            <button className="bg-white text-primary px-8 py-3 font-medium text-sm hover:bg-secondary transition-colors duration-300">
              SUBMIT TRAVEL REQUEST
            </button>
          </div>
        </div>

        {/* CTA Image (Flush to the bottom right) */}
        <div className="relative md:absolute md:bottom-0 md:right-10 lg:right-32 w-full md:w-[45%] flex justify-center md:justify-end">
          <img
            src={ctaImage}
            alt="Happy Family"
            className="w-[80%] md:w-[100%] max-w-[500px] object-contain align-bottom"
          />
        </div>
      </section>

      <div className='bg-[#f4f4f4] py-28'>
        <FaqSection />
      </div>

    </div>
  );
}

export default BookingJourney