import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import DestinationCard from "./DestinationCard";

import FamilyTripImage from "../assets/home-page-images/Family-Trip-Image.png"
// import FamilyVacationImage from "../assets/home-page-images/Family-Vacation-Image.png"
import HoneymoonHotelImage from "../assets/home-page-images/Honeymoon-Hotel-Image.png"
import SoloTravelsHotelImage from "../assets/home-page-images/Solo-Travels-Hotel-Image.png"
import BusinessTripImage from "../assets/home-page-images/Business-Trip-Image.jpg"
import GroupVacationImage from "../assets/home-page-images/Group-Vacation-Image.jpg"
import "swiper/css";
import AnimateSection from "./AnimateSection";

const DestinationSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView="auto"
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide style={{ width: "400px" }}>
        <AnimateSection duration={2}>
          <DestinationCard imageSrc={FamilyTripImage} text="Family Vacation" />
        </AnimateSection>
      </SwiperSlide>

      <SwiperSlide style={{ width: "400px" }}>
        <AnimateSection duration={2}>
          <DestinationCard imageSrc={BusinessTripImage} text="Business Trip" />
        </AnimateSection>
      </SwiperSlide>

      <SwiperSlide style={{ width: "400px" }}>
        <AnimateSection duration={2}>
          <DestinationCard imageSrc={HoneymoonHotelImage} text="Honeymoon" />
        </AnimateSection>
      </SwiperSlide>

      <SwiperSlide style={{ width: "400px" }}>
        <AnimateSection duration={2}>
          <DestinationCard imageSrc={SoloTravelsHotelImage} text="Solo Travels" />
        </AnimateSection>
      </SwiperSlide>

      <SwiperSlide style={{ width: "400px" }}>
        <AnimateSection duration={2}>
          <DestinationCard imageSrc={GroupVacationImage} text="Group Vacation" />
        </AnimateSection>
      </SwiperSlide>
    </Swiper>
  );
};

export default DestinationSlider;