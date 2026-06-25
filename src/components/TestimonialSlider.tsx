import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimateSection from "./AnimateSection";
// import { FaChevronRight } from "react-icons/fa";


// const testimonials = [
//   { id: 1, title: "A peaceful escape that truly felt like paradise!", desc: "Our trip experience with Club Aurevia was excellent. The hotel bookings were smooth, the properties were premium, and the team guided us perfectly throughout the journey.", name: "Ramesh Sharma" },
//   { id: 2, title: "An unforgettable experience beyond expectations!", desc: "Everything was very well managed from start to finish. The stay was comfortable, the support team was responsive, and our vacation felt truly relaxing and luxurious.", name: "Priya Verma" },
//   { id: 3, title: "Luxury and comfort combined perfectly!", desc: "We had an amazing family vacation through Club Aurevia. The hotels were beautiful, check-in was hassle-free, and the travel assistance was very helpful.", name: "Amit Patel" },
//   { id: 4, title: "Absolutely loved every moment!", desc: "The entire booking process was seamless and professional. The team suggested great destinations and guided us properly at every step of the trip.", name: "Neha Kapoor" },
//   { id: 5, title: "Highly recommended for everyone!", desc: "One of the best travel experiences we’ve had. The hotel locations were excellent, the service was smooth, and the overall planning was done perfectly.", name: "Rohit Mehta" },
//   { id: 6, title: "Outstanding customer support!", desc: "Club Aurevia made our honeymoon truly memorable. From luxury stays to personalized support, everything exceeded our expectations.", name: "Sneha Joshi" },
//   { id: 7, title: "Truly world class services!", desc: "Their hospitality and customer support were impressive. The bookings were confirmed on time, and the hotels provided a very comfortable experience.", name: "Vikram Singh" },
//   { id: 8, title: "Fantastic travel planning!", desc: "We really enjoyed our vacation experience with Club Aurevia. The team was cooperative, the hotels were premium, and the complete journey was stress-free and enjoyable.", name: "Anjali Desai" },
// ];


const testimonials = [
  { id: 1, title: "A smooth and premium travel experience!", desc: "Our trip experience with Club Aurevia was excellent. The hotel bookings were smooth, the properties were premium, and the team guided us perfectly throughout the journey.", name: "Ramesh Sharma" },
  
  { id: 2, title: "A perfectly managed relaxing vacation!", desc: "Everything was very well managed from start to finish. The stay was comfortable, the support team was responsive, and our vacation felt truly relaxing and luxurious.", name: "Priya Verma" },
  
  { id: 3, title: "A perfect family vacation experience!", desc: "We had an amazing family vacation through Club Aurevia. The hotels were beautiful, check-in was hassle-free, and the travel assistance was very helpful.", name: "Amit Patel" },
  
  { id: 4, title: "Seamless booking and expert guidance!", desc: "The entire booking process was seamless and professional. The team suggested great destinations and guided us properly at every step of the trip.", name: "Neha Kapoor" },
  
  { id: 5, title: "One of the best travel experiences!", desc: "One of the best travel experiences we’ve had. The hotel locations were excellent, the service was smooth, and the overall planning was done perfectly.", name: "Rohit Mehta" },
  
  { id: 6, title: "A truly memorable honeymoon experience!", desc: "Club Aurevia made our honeymoon truly memorable. From luxury stays to personalized support, everything exceeded our expectations.", name: "Sneha Joshi" },
  
  { id: 7, title: "Impressive service and hospitality!", desc: "Their hospitality and customer support were impressive. The bookings were confirmed on time, and the hotels provided a very comfortable experience.", name: "Vikram Singh" },
  
  { id: 8, title: "A stress-free and enjoyable vacation!", desc: "We really enjoyed our vacation experience with Club Aurevia. The team was cooperative, the hotels were premium, and the complete journey was stress-free and enjoyable.", name: "Anjali Desai" },
];

export default function TestimonialSlider() {

  const [index, setIndex] = useState(2);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 👇 2 clones both sides
  const slides = [
    testimonials[testimonials.length - 2],
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
    testimonials[1],
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // infinite reset logic
  useEffect(() => {

    if (index === slides.length - 2) {
      setTimeout(() => {
        setTransition(false);
        setIndex(2);
      }, 700);
    }

    if (index === 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 3);
      }, 700);
    }

  }, [index]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <section className="w-full py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto overflow-hidden">

        {/* Slider Track */}
        <div
          className={`flex ${transition ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
          style={{
            transform: `translateX(-${index * (isMobile ? 100 : 33.3333)}%)`,
          }}
        >
          {slides.map((item, i) => {

            const isActive = i - 1 === index;

            return (
              <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <AnimateSection duration={0.9} delay={!isActive && 0.4}>
                  <div
                    className={`text-center transition-all duration-700 ${isActive
                      ? "opacity-100 scale-100"
                      : "md:opacity-30 md:scale-90 opacity-100 scale-100"
                      }`}
                  >

                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
                      CLIENT REVIEW
                    </p>

                    <h2 className="text-xl md:text-3xl font-display text-gray-800 leading-snug">
                      “{item.title}”
                    </h2>

                    <div className="flex justify-center my-4 text-yellow-400 text-lg">
                      ★★★★★
                    </div>

                    <p className="text-gray-600 text-sm md:text-base max-w-sm mx-auto">
                      {item.desc}
                    </p>

                    <p className="mt-4 text-gray-700 font-medium">
                      {item.name}
                    </p>

                  </div>
                </AnimateSection>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-[#D9D9D9] hover:bg-gray-300 flex items-center justify-center">
            <FaChevronLeft className="text-primary" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-[#D9D9D9] hover:bg-gray-300 flex items-center justify-center">
            <FaChevronRight className="text-primary" />
          </button>
        </div>

      </div>
    </section>
  );
}