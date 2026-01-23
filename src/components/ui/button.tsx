import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25",
        success: "bg-success text-success-foreground hover:bg-success/90 hover:shadow-lg hover:shadow-success/25",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 hover:shadow-lg hover:shadow-warning/25",
        outline: "border-2 border-border bg-background hover:bg-muted hover:border-primary/50 hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 px-8 py-6 text-base font-bold tracking-wide",
        heroOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-bold tracking-wide transition-all duration-300",
        premium: "bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x text-white hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8",
        xl: "h-14 rounded-2xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
