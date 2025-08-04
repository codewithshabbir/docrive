"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    image: "/images/docrive-hero-img-1.jpg",
    label: "Complete care",
    title: "Providing medical care in our community",
    description:
      "Our experienced team offers personalized treatment with a focus on patient comfort.",
    buttonText: "Discover More",
    buttonLink: "/",
  },
  {
    image: "/images/docrive-hero-img-2.jpg",
    label: "Trusted healthcare",
    title: "Quality medical care you deserve",
    description:
      "Visit our clinic for reliable, friendly, and comprehensive medical support.",
    buttonText: "Discover More",
    buttonLink: "/",
  },
];

const AUTOPLAY_DELAY = 5000;

const HeroSlider = () => {
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
    <section className="relative">
      <Swiper
        modules={[EffectFade, Navigation, A11y, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: AUTOPLAY_DELAY }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
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
        grabCursor
        className="w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
              {/* Text Overlay */}
              <div className="absolute w-2/4 px-20 gap-3 text-left inset-0 z-20 flex flex-col items-start justify-center text-white">
                <Label text={slide.label} docriveClass="bg-white/30" />
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-secondary">
                    {slide.title.split(" ")[0]}{" "}
                  </span>
                  {slide.title.split(" ").slice(1).join(" ")}
                </h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
                <Button
                  docriveClass="mt-4"
                  link={slide.buttonLink}
                  text={slide.buttonText}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
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

      <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div
          ref={progressRef}
          className="bg-secondary h-full w-0"
          style={{ transition: `width ${AUTOPLAY_DELAY}ms linear` }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;
