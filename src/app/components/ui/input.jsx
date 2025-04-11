// components/ui/input.js
import React from "react";

export const Input = ({ placeholder, className = "" }) => {
  return <input className={`border rounded-md p-2 w-full ${className}`} placeholder={placeholder} />;
};
