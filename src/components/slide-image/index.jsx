"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "../../assets/icons/arrow.svg";
import { motion } from "framer-motion";
import SmartImage from "../image";

import Img1 from "../../assets/images/window-master-1.jpg";
import Img2 from "../../assets/images/window-master-2.jpg";
import Img3 from "../../assets/images/window-master-3.jpg";

const slides = [
  {
    id: 1,
    image: Img1,
    subtitle: "Выбери свой цвет!",
    title: "Рольставни",

    price: "Выгодная цена: от 900 000 / кв.м ",
    button: "Закажите сейчас",
  },
  {
    id: 2,
    image: Img2,
    subtitle: "Гарантия до 5 лет!!",
    title: "Пластиковые окна",

    price: "Выгодная цена: от 870 000 / кв.м ",
    button: "Закажите сейчас",
  },
  {
    id: 3,
    image: Img3,
    subtitle: "Прочная конструкция!",
    title: "Алюминиевые двери",

    price: "Выгодная цена: от 120 000 / кв.м ",
    button: "Закажите сейчас",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-white px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-center space-y-4"
                >
                  <p className="text-lg font-light tracking-wide uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg">{slide.desc}</p>
                  <p className="text-xl font-semibold text-[#007AFF]">
                    {slide.price}
                  </p>
                  <button className="mt-4 cursor-pointer px-6 py-3 bg-[#007AFF] hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all active:scale-95 scale-100">
                    {slide.button}
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full">
        <SmartImage
          src={Arrow}
          alt={"arrow-left"}
          width={"20px"}
          height={"20px"}
          className="-rotate-90"
        />
      </button>
      <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full">
        <SmartImage
          src={Arrow}
          alt={"arrow-right"}
          width={"20px"}
          height={"20px"}
          className="rotate-90"
        />
      </button>
    </div>
  );
}
