import type { ReactNode } from "react"
import { cx } from "../../lib/cx"
import type { Stage } from "../../features/contacts/types"

const tones = {
  blue: "bg-blue-soft text-[#52719c]",
  peach: "bg-peach-soft text-[#9a674d]",
  violet: "bg-primary-soft text-[#6759c3]",
}

export function Badge({
  children,
  tone = "violet",
}: {
  children: ReactNode
  tone?: keyof typeof tones
}) {
  return (
    <span
      className={cx(
        "inline-flex w-max min-h-[21px] items-center rounded-full px-2 text-[9px] font-semibold whitespace-nowrap",
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}

const stageTones: Record<Stage, string> = {
  Lead: "bg-primary-soft text-[#6a5dc2]",
  Prospect: "bg-blue-soft text-[#5075a8]",
  Qualified: "bg-mint-soft text-[#478267]",
  Customer: "bg-peach-soft text-[#9c694f]",
}

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span
      className={cx(
        "inline-flex min-h-6 items-center gap-1.5 rounded-full px-[9px] text-[9px] font-semibold",
        stageTones[stage],
      )}
    >
      <span className="size-[5px] rounded-full bg-current" />
      {stage}
    </span>
  )
}

export const stageSelectTone: Record<Stage, string> = {
  Lead: "text-[#6a5dc2]",
  Prospect: "text-[#5075a8]",
  Qualified: "text-[#478267]",
  Customer: "text-[#9c694f]",
}
