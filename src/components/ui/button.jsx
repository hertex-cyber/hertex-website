import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"; // A quick hack since we don't have Radix Slot installed
  // We'll just render its children directly if asChild is true, but since we are replacing Link,
  // Actually standard Shadcn uses @radix-ui/react-slot.
  // Since we don't have it, let's just make it a normal button or pass the classes to the child if asChild is used.
  if (asChild && React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      ...props,
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800": !variant || variant === "default",
          "border border-zinc-700 bg-transparent shadow-sm hover:bg-zinc-800 hover:text-zinc-50": variant === "outline",
          "h-9 px-4 py-2": !size || size === "default",
          "h-8 rounded-md px-3 text-xs": size === "sm",
          "h-10 rounded-md px-8": size === "lg",
        },
        className,
        props.children.props.className
      )
    });
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800": !variant || variant === "default",
          "border border-zinc-700 bg-transparent shadow-sm hover:bg-zinc-800 hover:text-zinc-50": variant === "outline",
          "h-9 px-4 py-2": !size || size === "default",
          "h-8 rounded-md px-3 text-xs": size === "sm",
          "h-10 rounded-md px-8": size === "lg",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
