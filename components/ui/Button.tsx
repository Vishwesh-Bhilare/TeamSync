import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    loading?: boolean;
}

export function Button({
    variant = "primary",
    loading,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
        disabled={loading || props.disabled}
        className={cn(
            "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50",
            variant === "primary" &&
            "bg-primary text-white hover:bg-secondary",
            variant === "secondary" &&
            "bg-secondary text-white hover:opacity-90",
            variant === "ghost" &&
            "bg-transparent text-primary hover:bg-primary/10",
            className
        )}
        {...props}
        >
        {loading ? "Loading..." : children}
        </button>
    );
}
