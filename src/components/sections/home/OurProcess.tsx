import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    title: "Appointment",
    description: "Easily schedule your visit with us.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "Discuss your health concerns with experts.",
  },
  {
    step: "03",
    title: "Evaluation",
    description: "In-depth tests to your condition.",
  },
  {
    step: "04",
    title: "Treatment plan",
    description: "Tailored care plan designed for you.",
  },
];

const OurProcess = () => {
  return (
    <section className="px-6 md:px-20 py-24">
      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Label
            text="Our Process"
            docriveClass="bg-secondary/10 text-secondary w-fit"
          />
          <h3 className="text-2xl md:text-4xl font-bold leading-tight mt-2">
            <span className="text-secondary">Steps</span> to better health
          </h3>
          <p className="mt-4">
            Our care process is simple, clear, and focused on providing efficient, personalized support every step forward.
          </p>
        </div>
        <div className="flex md:justify-end">
          <Button text="Book an appointment" link="/" docriveClass="mt-6" />
        </div>
      </div>

      {/* Process Steps */}
      <div className="flex justify-between items-center bg-secondary px-6 md:px-10 py-10 gap-6 mt-12">
        {processSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div>
              <div className="bg-primary w-12 h-12 flex justify-center items-center text-white font-bold rounded-md mx-auto md:mx-0">
                {step.step}
              </div>
              <h3 className="text-white text-lg font-bold pt-4 py-2">{step.title}</h3>
              <p className="text-white">
                {step.description}
              </p>
            </div>
            {/* Arrow (only between items) */}
            {index !== processSteps.length - 1 && (
              <div className="flex items-center justify-center">
                <FaLongArrowAltRight className="text-white text-2xl" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;