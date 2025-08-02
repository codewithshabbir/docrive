import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";
import {
  LuStethoscope,
  LuSyringe,
  LuHeart,
  LuTestTube,
  LuScissors,
  LuUser,
} from "react-icons/lu";

const services = [
  {
    icon: <LuStethoscope />,
    title: "General checkups",
    description:
      "Routine health assessments for prevention and early diagnosis.",
    points: [
      "Blood pressure checks",
      "Cholesterol screening",
      "Weight management",
    ],
  },
  {
    icon: <LuSyringe />,
    title: "Pediatric care",
    description:
      "Medical services tailored for infants, children, and adolescents.",
    points: ["Growth tracking", "Nutrition guidance", "Parental support"],
  },
  {
    icon: <LuHeart />,
    title: "Women's health",
    description:
      "Care for women's health needs, from routine exams to support.",
    points: ["Family planning", "Hormonal testing", "Breast exams"],
  },
  {
    icon: <LuUser />,
    title: "Men’s health",
    description:
      "Preventative and diagnostic care for men’s unique health needs.",
    points: ["Heart screening", "Stress management", "Fitness advice"],
  },
  {
    icon: <LuTestTube />,
    title: "Diagnostic testing",
    description: "Fast, accurate results for informed medical decisions.",
    points: ["Full blood tests", "Imaging referrals", "Allergy tests"],
  },
  {
    icon: <LuScissors />,
    title: "Minor procedures",
    description: "On-site treatments that don’t require hospital visits.",
    points: ["Wound care", "Skin biopsies", "Wart removal"],
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-primary px-6 md:px-20 py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Label
            text="What We Do"
            docriveClass="bg-secondary/10 text-secondary w-fit"
          />
          <h3 className="text-2xl md:text-4xl font-bold leading-tight text-white mt-2">
            <span className="text-secondary">General</span> health services
          </h3>
          <p className="text-white mt-4">
            We offer a complete range of medical services designed to support
            your health, from routine checkups to specialized treatments.
          </p>
        </div>
        <div className="flex md:justify-end">
          <Button
            text="About the Clinic"
            link="/"
            docriveClass="mt-6 bg-secondary"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 pt-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            points={service.points}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
