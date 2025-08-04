"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  { image: "/images/docrive-about-1.jpg", alt: "Slide 1" },
  { image: "/images/docrive-about-2.jpg", alt: "Slide 2" },
];

const AUTOPLAY_DELAY = 5000; // in ms

const WhoWeAreSlider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const restartProgress = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = `width ${AUTOPLAY_DELAY}ms linear`;
      progressRef.current.style.width = "100%";
    }
  };

  useEffect(() => {
    restartProgress();

    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        restartProgress();
      });

      swiper.on("autoplay", () => {
        restartProgress();
      });
    }

    return () => {
      if (swiper) {
        swiper.off("slideChange");
        swiper.off("autoplay");
      }
    };
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade"
        loop
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}

        {/* Arrows */}
        <div
          ref={prevRef}
          className="swiper-prev absolute top-1/2 left-0 z-30 transform -translate-y-1/2 cursor-pointer bg-white p-2 hover:bg-secondary group transition"
        >
          <AiOutlineLeft className="text-black group-hover:text-white w-5 h-5" />
        </div>
        <div
          ref={nextRef}
          className="swiper-next absolute top-1/2 right-0 z-30 transform -translate-y-1/2 cursor-pointer bg-white p-2 hover:bg-secondary group transition"
        >
          <AiOutlineRight className="text-black group-hover:text-white w-5 h-5" />
        </div>
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div
          ref={progressRef}
          className="bg-secondary h-full w-0"
          style={{ transition: `width ${AUTOPLAY_DELAY}ms linear` }}
        />
      </div>
    </div>
  );
};

export default WhoWeAreSlider;
