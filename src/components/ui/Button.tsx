import { ButtonProps } from "@/types/ButtonProps";
import React from "react";
import Link from "next/link";

const Button: React.FC<ButtonProps> = ({ text, link, docriveClass }) => {
  const hasBgSecondary = docriveClass?.split(" ").includes("bg-secondary");

  const baseClasses =
    "docrive-button relative px-5 py-3 cursor-pointer text-white font-semibold overflow-hidden group";
  const bgClass = hasBgSecondary ? "bg-secondary" : "bg-primary";

  const hoverBgClass = hasBgSecondary ? "bg-white" : "bg-secondary";

  const content = (
    <button className={`${baseClasses} ${bgClass} ${docriveClass ?? ""}`}>
      <span
        className={`absolute inset-0 ${hoverBgClass} docrive-clip transition-all duration-200`}
      ></span>
      <span className="text-container relative z-10 block overflow-hidden">
        <span className={`text ${hasBgSecondary ? 'group-hover:text-black': 'group-hover:text-white'} inline-block`}>{text}</span>
      </span>
    </button>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};

export default Button;