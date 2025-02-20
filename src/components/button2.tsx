"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  iconSrc?: string;
  iconAlt?: string;
  iconPosition?: "left" | "right";
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button2({
  variant = "primary",
  size = "medium",
  iconSrc,
  iconAlt,
  iconPosition = "left",
  tooltip,
  tooltipPosition = "top",
  className,
  children,
  onChange,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <div className="relative inline-block group">
      {tooltip && (
        <span
          className={clsx(
            "absolute whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity pointer-events-none",
            "group-hover:opacity-100 group-hover:scale-100",
            {
              "top-[-30px] left-1/2 transform -translate-x-1/2":
                tooltipPosition === "top",
              "bottom-[-30px] left-1/2 transform -translate-x-1/2":
                tooltipPosition === "bottom",
              "left-[-50px] top-1/2 transform -translate-y-1/2":
                tooltipPosition === "left",
              "right-[-50px] top-1/2 transform -translate-y-1/2":
                tooltipPosition === "right",
            }
          )}
        >
          {tooltip}
        </span>
      )}
      <button
        className={clsx(
          "rounded-full border transition-colors flex items-center justify-center gap-2 text-sm sm:text-base",
          {
            "bg-blue-500 hover:bg-blue-600 text-white": variant === "primary",
            "bg-green-500 hover:bg-green-600 text-white":
              variant === "secondary",
            "bg-red-500 hover:bg-red-600 text-white": variant === "tertiary",
            "h-8 px-3 text-xs": size === "small",
            "h-10 px-4 text-sm": size === "medium",
            "h-12 px-5 text-base": size === "large",
          },
          className
        )}
        onClick={(event) => {
          console.log("Button clicked");
          if (onClick) {
            onClick(event);
          }
        }}
        {...props}
      >
        {iconSrc && iconPosition === "left" && (
          <Image src={iconSrc} alt={iconAlt || "icon"} width={20} height={20} />
        )}
        {children}
        {iconSrc && iconPosition === "right" && (
          <Image src={iconSrc} alt={iconAlt || "icon"} width={20} height={20} />
        )}
      </button>
    </div>
  );
}
