import type { ReactNode } from "react"
import { cx, focusRing } from "../../lib/cx"
import { Icon, type IconName } from "./Icon"

export const fieldControl = cx(
  "w-full rounded-[10px] border border-[rgba(76,71,108,0.12)] bg-[rgba(250,250,253,0.88)] text-[10px] text-ink transition duration-150 outline-none placeholder:text-[#afb0bd] focus:border-primary/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(129,115,235,0.09)]",
  focusRing,
)

export function Field({
  icon,
  label,
  children,
  wide = false,
}: {
  icon: IconName
  label: string
  children: ReactNode
  wide?: boolean
}) {
  return (
    <label className={cx("flex flex-col gap-[7px]", wide && "col-span-full")}>
      <span className="flex items-center gap-1.5 text-[9px] font-semibold text-muted">
        <Icon className="text-faint" name={icon} size={15} />
        {label}
      </span>
      {children}
    </label>
  )
}
