import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg glass px-4 py-2 text-sm transition-all",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10",
        "placeholder:text-foreground/40",
        className
      )}
      {...props}
    />
  )
}
