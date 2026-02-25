import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-30 w-full rounded-lg glass px-4 py-3 text-sm transition-all",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10",
        "placeholder:text-foreground/40 resize-none",
        className
      )}
      {...props}
    />
  )
}
