// components/ui/card.js
import React from "react";

export const Card = ({ children, className = "" }) => {
  return <div className={`bg-white shadow-lg rounded-md ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
