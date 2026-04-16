import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandLogoSlider = ({logos}:any) => {

    return (
        <div className="w-full py-6 px-10 sm:px-6">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView="auto"
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
            >
                {logos?.map((logo:any, index:any) => (
                    <SwiperSlide key={index} style={{ width: "140px" }}>
                        <div className="flex justify-center items-center">
                            <img
                                src={logo}
                                alt={`Brand Logo ${index}`}
                                className="w-full object-contain h-[150px]"
                                style={{
                                    filter:
                                        "invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(85%) contrast(85%)",
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandLogoSlider;