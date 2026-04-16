import eliteStays from "../assets/membership-page-images/elite-stays.png";
import signatureStays from "../assets/membership-page-images/signature-stays.png";
import EllipseShap from "../assets/membership-page-images/Ellipse-shap.png";

const plans = [
  {
    name: "Elite Stays",
    price: "₹ 1,45,000/-",
    days: "7 Days & 6 Nights (5 Yearly)",
    image: eliteStays,
    // Added specific gradient backgrounds for each badge
    badgeStyle: {
      background: "linear-gradient(90deg, #FFD700 0%, #FDB931 100%)",
      color: "#16302C",
    },
    features: [
      "6 Nights Premium Accommodation",
      "Daily Breakfast",
      "2 Adults and 2 kids or 3 Adults",
      "India + Asia",
      "4 and 5 Star Hotels",
      "AMC Charge - ₹ 6999/-",
    ],
  },
  {
    name: "Signature Escapes",
    price: "₹ 3,50,000/-",
    days: "8 Days & 7 Nights (10 Yearly)",
    image: signatureStays,
    badgeStyle: {
      background: "linear-gradient(90deg, #FAF9F6 0%, #C7C6C4 100%)",
      color: "#16302C",
    },
    features: [
      "7 Nights Premium Accommodation",
      "Daily Breakfast",
      "2 Adults and 2 kids or 3 Adults",
      "India + Asia",
      "4 and 5 Star Hotels",
      "AMC Charge - ₹ 8999/-",
    ],
  },
  {
    name: "Curated Destinations",
    price: "₹ 9,50,000/-",
    days: "8 Days & 7 Nights (20 Yearly)",
    // Assuming you might have a curatedStays image, kept signatureStays to match your code
    image: signatureStays,
    badgeStyle: {
      background: "linear-gradient(160deg, #FEFDE9 0%, #D6B59B 30%, #AE6D4D 60%, #AE6D4D 100%)",
      color: "#16302C",
    },
    features: [
      "7 Nights Premium Accommodation",
      "Daily Breakfast",
      "2 Adults and 2 kids or 3 Adults",
      "India + Asia + Europe",
      "4 and 5 Star Hotels",
      "AMC Charge - ₹ 12,999/-",
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {plans.map((plan, index) => (

          /* OUTER WRAPPER - Creates the 0.82px Gradient Border from Figma */
          <div
            key={index}
            className="w-full overflow-hidden shadow-lg"
            style={{
              // background: "linear-gradient(180deg, #16302C 0%, #FFFFFF 100%)",
              padding: "0.82px",
            }}
          >
            <div
              className="w-full h-full relative"
              style={{
                background: "linear-gradient(180deg, #92AEAA 0%, #16302C 70%, #16302C 100%)",
              }}
            >

              {/* HEADER SECTION */}
              <div className="relative px-6 pt-6 pb-6 min-h-[180px]">

                {/* Overlaying background graphic (blends with the main gradient) */}
                <div
                  className="absolute inset-0 z-0 opacity-50 mix-blend-overlay"
                  style={{
                    backgroundImage: `url(${plan.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                />

                {/* Ellipse Glow (Toned down so it doesn't break the gradient) */}
                <img
                  src={EllipseShap}
                  alt=""
                  className="absolute top-[0px] left-[0px] opacity-60 mix-blend-screen z-0"
                />

                {/* Header Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-end gap-2">
                    <p className="text-[10.5px] text-[#16302C] font-normal tracking-wide w-[180px]">
                      Experience Exclusive privileges
                    </p>

                    <span
                      className="text-[12px] sm:text-[15.6px] font-display px-2 py-1.5 rounded-[4px] shadow-sm whitespace-nowrap font-[400]"
                      style={plan.badgeStyle}
                    >
                      {plan.name}
                    </span>
                  </div>

                  <div className="mt-2 mb-4">
                    <h2 className="text-[36px] text-primary font-[500] tracking-tight">
                      {plan.price}
                    </h2>

                    <div className="h-[1px] bg-[#16302C]/30 mt-1 mb-3"></div>

                    <p className="text-[13px] text-[#16302C] font-light">
                      {plan.days}
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURES SECTION */}
              <div className="px-8 py-10 text-white relative z-10 border border-[#D9D9D933]">
                <ul className="space-y-4 text-[14px] text-gray-200 font-light">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-10 py-3 border border-white/20 text-white text-[14px] bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                  Step Into Luxury
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;