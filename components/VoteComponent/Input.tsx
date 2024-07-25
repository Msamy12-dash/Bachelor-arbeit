/* eslint-disable prettier/prettier */
"use client";
import React from "react";

export default React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, children, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`w-full rounded-lg border border-gray-200 placeholder-blue-400 p-2 px-4 ${className}`}
      type="text"
      {...props}
    >
      {children}
    </input>
  );
});
