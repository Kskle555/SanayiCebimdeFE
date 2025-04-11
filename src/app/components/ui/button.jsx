// components/ui/button.js
import React from "react";

export const Button = ({ children, variant = "default", size = "md" }) => {
  const baseClasses = "px-4 py-2 rounded-md focus:outline-none";
  const variantClasses = variant === "ghost" ? "text-gray-900" : "bg-blue-600 text-white";
  const sizeClasses = size === "lg" ? "text-lg" : "text-sm";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
      {children}
    </button>
  );
};
