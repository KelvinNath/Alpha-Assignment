import type { ButtonHTMLAttributes } from "react"
import { cx, focusRing } from "../../lib/cx"
import { Icon, type IconName } from "./Icon"

const variants = {
  primary:
    "border-0 bg-primary text-white shadow-[0_8px_18px_rgba(129,115,235,0.22)] hover:enabled:-translate-y-px hover:enabled:bg-primary-dark hover:enabled:shadow-[0_10px_22px_rgba(129,115,235,0.3)] disabled:cursor-not-allowed disabled:opacity-[0.55]",
  secondary:
    "border border-[rgba(65,61,95,0.1)] bg-white/76 text-muted hover:bg-white hover:text-ink",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconName
  variant?: keyof typeof variants
}

export function Button({
  children,
  className,
  icon,
  type = "button",
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-[11px] px-3.5 text-[11px] font-semibold transition duration-150",
        focusRing,
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}

export function IconButton({
  label,
  icon,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon: IconName
}) {
  return (
    <button
      aria-label={label}
      className={cx(
        "inline-flex size-8 items-center justify-center rounded-[9px] border-0 bg-transparent p-0 text-muted transition duration-150 hover:bg-[rgba(238,234,253,0.7)] hover:text-ink",
        focusRing,
        className,
      )}
      type="button"
      {...props}
    >
      <Icon name={icon} />
    </button>
  )
}
