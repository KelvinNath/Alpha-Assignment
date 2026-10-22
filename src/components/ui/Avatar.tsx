import { cx } from "../../lib/cx"
import { initials } from "../../features/contacts/utils/contacts"

const tones = [
  "bg-gradient-to-br from-[#ded9ff] to-[#f1efff] text-[#6155bd]",
  "bg-gradient-to-br from-[#cfe2ff] to-[#eaf3ff] text-[#476a9f]",
  "bg-gradient-to-br from-[#cceede] to-[#effbf5] text-[#39775a]",
  "bg-gradient-to-br from-[#ffe0ce] to-[#fff2ea] text-[#9b6143]",
  "bg-gradient-to-br from-[#ebd6ec] to-[#f7eefa] text-[#805e85]",
]

const sizes = {
  tiny: "size-[21px] text-[6px]",
  small: "size-[29px] text-[8px]",
  medium: "size-10 text-[10px]",
  large: "size-[66px] text-base shadow-[0_8px_20px_rgba(73,69,112,0.12)]",
}

export function Avatar({
  name,
  variant,
  size = "medium",
  className,
}: {
  name: string
  variant: number
  size?: keyof typeof sizes
  className?: string
}) {
  const tone =
    variant === 1 || variant === 6
      ? tones[0]
      : variant === 2 || variant === 7
        ? tones[1]
        : variant === 3 || variant === 8
          ? tones[2]
          : variant === 4 || variant === 9
            ? tones[3]
            : tones[4]
  return (
    <span
      className={cx(
        "inline-grid shrink-0 place-items-center overflow-hidden rounded-full font-bold tracking-[-0.02em]",
        sizes[size],
        tone,
        className,
      )}
    >
      {initials(name)}
    </span>
  )
}
