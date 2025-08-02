import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import WhoWeAreSlider from "@/components/ui/WhoWeAreSlider";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-24">
      {/* Left Side - Slider */}
      <div className="w-full md:w-1/2">
        <WhoWeAreSlider />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-2">
        <Label
          text="Who We Are"
          docriveClass="bg-secondary/10 text-secondary w-fit"
        />
        <h3 className="text-2xl md:text-4xl font-bold leading-tight w-5/6">
          <span className="text-secondary">Experienced</span> medical
          professionals dedicated to your health
        </h3>
        <p className="mt-4">
          We are a generalist clinic offering compassionate, accessible, and
          comprehensive healthcare for all ages.
        </p>
        <Button text="About the Clinic" link="/" docriveClass="mt-6" />
      </div>
    </section>
  );
};

export default WhoWeAre;
