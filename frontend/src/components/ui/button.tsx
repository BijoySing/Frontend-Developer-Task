import * as React from "react";
 import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600",
  {
    variants: {},
    defaultVariants: {},
  }
);

function Button({
  className,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const Comp = "button";
  return <Comp className={cn(buttonVariants({ className }))} {...props} />;
}

export { Button, buttonVariants };
