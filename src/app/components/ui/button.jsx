// components/ui/button.js
import React from "react";

export const Button = ({ children, variant = "default", size = "md", className = "" }) => {
  const baseClasses = "px-4 py-2 rounded-md focus:outline-none";
  const variantClasses =
    variant === "ghost"
      ? "bg-transparent hover:bg-white/10"
      : "bg-blue-400 text-white btn btn-ghost";
  const sizeClasses = size === "lg" ? "text-lg" : "text-sm";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}>
      {children}
    </button>
  );
};
