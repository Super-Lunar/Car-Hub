"use client";

import { ButtonProps } from "@/types/types";
import Image from "next/image";

const CustomButton = ({
  title,
  addStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={false || isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${addStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
