
import FeatureImage from "../assets/home-page-images/Feature-Image.jpg";
import AnimateSection from "./AnimateSection";

const FeatureSection = ({
  title = "Curated Journeys.",
  subtitle = "Exceptional Stays.",
  description = "Club Aurevia connects you to a curated collection of luxury hotels, exclusive destinations, and premium travel experiences around the world. Every journey is thoughtfully designed to deliver comfort, elegance, and personalized service.",
  imageSrc = FeatureImage, // Replace with your image
  width = "100%",
  height = "458px"
}) => {
  return (
    <AnimateSection duration={1}>
      <section className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[600px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-primary text-[32px] md:text-5xl lg:text-[40px] font-display leading-tight">
              {title} <br />
              <span className="font-normal">{subtitle}</span>
            </h1>

            <p className="text-primary text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>
          </div>

          {/* --- RIGHT SIDE: IMAGE WITH FIGMA GRADIENT --- */}
          <div
            className="relative order-1 lg:order-2 mx-auto lg:ml-auto overflow-hidden"
            style={{ width: width, height: height }}
          >
            <img
              src={imageSrc}
              alt="Experience"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
            />

            {/* Figma "Rectangle 7" Gradient Logic: 180 deg, Black to Transparent */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" /> */}

            {/* Bottom White "Sad" (Subtle Glow/Fade Effect) */}
            {/* <div className="absolute -bottom-1 left-0 w-full h-[30px] bg-white/10 blur-xl pointer-events-none" /> */}

          </div>

        </div>
      </section>
    </AnimateSection>
  );
};

export default FeatureSection;