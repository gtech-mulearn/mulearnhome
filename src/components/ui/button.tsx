import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-mulearn text-mulearn-whitish border border-mulearn hover:opacity-95 rounded-full font-sans",
        destructive:
          "bg-destructive text-mulearn-whitish hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue hover:bg-linear-to-r hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish font-bold cursor-pointer   transition-all duration-300",
        secondary:
          "bg-mulearn-greyish text-mulearn-blackish hover:bg-mulearn-blackish/30 border border-mulearn-greyish transition-all duration-300 font-bold cursor-pointer",
        ghost:
          "text-transparent bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text hover:bg-[var(--mulearn-trusty-blue)]/10 transition-all font-bold cursor-pointer duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        blue: "bg-mulearn-trusty-blue text-mulearn-whitish rounded-full text-base hover:bg-mulearn-duke-purple active:bg-mulearn-trusty-blue transition-all duration-300 font-bold cursor-pointer  rounded-full cursor-pointer",
        inverted:
          "bg-mulearn-whitish text-mulearn-trusty-blue hover:bg-mulearn-whitish/90 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 font-bold cursor-pointer ",
        mulearn:
          "bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish hover:from-[var(--mulearn-trusty-blue)] hover:to-[var(--mulearn-duke-purple)] shadow-lg hover:shadow-xl font-bold cursor-pointer   transition-all duration-300 rounded-full cursor-pointer",
        purple:
          "bg-mulearn-duke-purple text-mulearn-whitish hover:bg-[var(--mulearn-duke-purple)] shadow-lg hover:shadow-xl transition-all duration-300 font-bold cursor-pointer ",
        trusty:
          "bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish hover:from-[var(--mulearn-trusty-blue)] hover:to-[var(--mulearn-duke-purple)] shadow-lg hover:shadow-2xl  transition-all duration-300 font-bold cursor-pointer ",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
