import { useState } from "react";

import OceanViewRoom from "../assets/home-page-images/Ocean-view-room.png"
import ExecutiveRoom from "../assets/home-page-images/Executive-room.png"
import SuperDeluxeRoom from "../assets/home-page-images/Super-deluxe-room.png"
import TwinwithBalconyViewRoom from "../assets/home-page-images/Twin-with-balcony-view-room.png"
import PenthouseViewRoom from "../assets/home-page-images/Penthouse-view-room.png"
import { NavLink } from "react-router-dom";
import AnimateSection from "./AnimateSection";

const rooms = [
  {
    id: 1,
    title: "Ocean view room",
    image: OceanViewRoom,
  },
  {
    id: 2,
    title: "Executive room",
    image: ExecutiveRoom,
  },
  {
    id: 3,
    title: "Super deluxe room",
    image: SuperDeluxeRoom,
  },
  {
    id: 4,
    title: "Twin with balcony view room",
    image: TwinwithBalconyViewRoom,
  },
  {
    id: 5,
    title: "Penthouse view room",
    image: PenthouseViewRoom,
  },
];

const RoomSelector = () => {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const [imageKey, setImageKey] = useState(0);

  const handleRoomChange = (room: any) => {
    setActiveRoom(room);
    setImageKey((prev) => prev + 1);
  };

  return (
    <section className="bg-[#f4f4f4] py-12 md:py-20 overflow-hidden">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <AnimateSection duration={1}>
            {/* LEFT SIDE */}
            <div>
              {rooms.map((room) => (
                <div key={room.id} className="mb-8 sm:px-6">
                  {/* TITLE */}
                  <h2
                    onClick={() => handleRoomChange(room)}
                    className={`cursor-pointer font-display transition-all duration-500 ease-in-out
                    ${activeRoom.id === room.id
                        ? "text-primary scale-105"
                        : "text-gray-500 hover:text-primary"
                      }
                    text-[26px] sm:text-3xl md:text-4xl lg:text-5xl`}
                  >
                    {room.title}
                  </h2>

                  {/* MOBILE + TABLET VIEW */}
                  {activeRoom.id === room.id && (
                    <div className="lg:hidden mt-4 space-y-4 animate-fadeIn flex flex-col justify-end items-end">

                      <img
                        key={imageKey}
                        src={room.image}
                        alt={room.title}
                        className="w-full h-[240px] sm:h-[300px] object-cover transition-all duration-500"
                      />

                      <div className="w-full lg:hidden flex items-end gap-6 mt-4 animate-slideFade">
                        <div className="h-[1px] w-full border border-gray-400 bg-gray-400 transition-all duration-500"></div>

                        <NavLink to="/contact-us">
                          <button className="bg-primary text-white px-10 py-2 text-sm tracking-wide hover:bg-[#162a21] transition-all duration-300 hover:scale-105">
                            Book
                          </button>
                        </NavLink>
                      </div>

                    </div>
                  )}

                  {/* DESKTOP LINE + BUTTON */}
                  {activeRoom.id === room.id && (
                    <div className="hidden lg:flex items-end gap-6 mt-4 animate-slideFade">
                      <div className="h-[1px] w-full bg-gray-400 transition-all duration-500"></div>

                      <button className="bg-primary text-white px-12 py-2 text-sm tracking-wide hover:bg-[#162a21] transition-all duration-300 hover:scale-105">
                        Book
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimateSection>

          {/* RIGHT SIDE IMAGE (DESKTOP ONLY) */}
          <AnimateSection duration={2} delay={0.5}>
          <div className="relative hidden lg:block">
            <img
              key={imageKey}
              src={activeRoom.image}
              alt={activeRoom.title}
              className="w-full h-[431px] object-cover transition-all duration-700 ease-in-out animate-imageFade"
            />

            {/* <div className="absolute bottom-4 left-4 text-white text-sm px-4 py-2 bg-black/40 backdrop-blur-sm">
              Lorem Ipsum is simply dummy text of the printing
            </div> */}
          </div>
          </AnimateSection>

        </div>
      </div>
    </section>
  );
};

export default RoomSelector;