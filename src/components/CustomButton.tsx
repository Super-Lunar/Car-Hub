"use client";

import { ButtonProps } from "@/types/types";

const CustomButton = ({ title, addStyles, handleClick, btnType }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${addStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
