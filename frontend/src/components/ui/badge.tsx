// src/components/ui/badge.tsx
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}
export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 ${className}`}
      {...props}
    />
  );
}
