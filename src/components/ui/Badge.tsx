interface BadgeProps {
  label: string;
  variant?: "hot" | "new" | "category" | "pill";
  className?: string;
}

export function Badge({ label, variant = "category", className = "" }: BadgeProps) {
  const base = "inline-flex items-center rounded-full text-xs font-semibold px-2.5 py-0.5";

  const variants: Record<string, string> = {
    hot: "bg-amber text-white",
    new: "bg-teal text-white",
    category: "bg-primary-light text-accent",
    pill: "bg-primary-light text-accent border border-primary/20",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </span>
  );
}
