import React from "react";
import Button from "./Button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  points,
}) => {
  return (
    <div className="relative group overflow-hidden bg-white border-b-4 border-secondary rounded-md">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

      {/* Main content */}
      <div className="relative z-10 p-6 transition-colors duration-500 group-hover:text-white">
        <div className="text-4xl bg-secondary text-white w-fit p-4 rounded-full mb-4 transition group-hover:bg-white group-hover:text-secondary">
          {icon}
        </div>
        <h4 className="text-xl font-semibold mb-2 text-black group-hover:text-white transition">
          {title}
        </h4>
        <p className="text-gray-600 mb-4 group-hover:text-gray-200 transition">
          {description}
        </p>

        <ul className="text-sm text-black group-hover:text-white mb-4 space-y-2 transition">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-1">
              <IoCheckmarkCircleOutline className="text-secondary group-hover:text-white mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Button text="Learn more" link="/" docriveClass="mt-4" />
      </div>
    </div>
  );
};

export default ServiceCard;
