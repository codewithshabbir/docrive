import { ButtonProps } from "@/types/ButtonProps";
import React from "react";
import Link from "next/link";

const Button: React.FC<ButtonProps> = ({ text, link, docriveClass }) => {
  const hasBgSecondary = docriveClass?.split(" ").includes("bg-secondary");
  const hasBgPrimary = docriveClass?.split(" ").includes("bg-primary");

  const baseClasses =
    "docrive-button relative px-5 py-3 cursor-pointer text-white font-semibold overflow-hidden group/button";
  const bgClass = hasBgSecondary ? "bg-secondary" : "bg-primary";
  const hoverBgClass =
    hasBgSecondary || hasBgPrimary ? "bg-white" : "bg-secondary";

  const content = (
    <button className={`${baseClasses} ${bgClass} ${docriveClass ?? ""}`}>
      <span
        className={`absolute inset-0 ${hoverBgClass} docrive-clip transition-all duration-200`}
      ></span>
      <span className="text-container relative z-10 block overflow-hidden">
        <span
          className={`text ${
            hasBgSecondary
              ? "group-hover/button:text-primary"
              : hasBgPrimary
              ? "group-hover/button:text-primary"
              : ""
          } inline-block`}
        >
          {text}
        </span>
      </span>
    </button>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};

export default Button;