import { cx, focusRing } from "../../lib/cx"
import type { View } from "../../features/contacts/types"
import { Icon } from "./Icon"

export function ViewSwitch({
  view,
  onChange,
}: {
  view: View
  onChange: (view: View) => void
}) {
  const item =
    "flex min-h-8 items-center gap-[7px] rounded-lg border-0 bg-transparent px-3 text-[11px] font-medium text-muted"
  return (
    <div
      aria-label="View selection"
      className="flex rounded-[11px] border border-[rgba(82,77,114,0.06)] bg-[rgba(231,230,240,0.62)] p-[3px]"
      role="group"
    >
      <button
        aria-pressed={view === "table"}
        className={cx(
          item,
          focusRing,
          view === "table" &&
            "bg-white/94 font-semibold text-[#5b4eb8] shadow-[0_3px_10px_rgba(67,62,98,0.08)]",
        )}
        onClick={() => onChange("table")}
        type="button"
      >
        <Icon name="table" size={16} />
        Table
      </button>
      <button
        aria-pressed={view === "board"}
        className={cx(
          item,
          focusRing,
          view === "board" &&
            "bg-white/94 font-semibold text-[#5b4eb8] shadow-[0_3px_10px_rgba(67,62,98,0.08)]",
        )}
        onClick={() => onChange("board")}
        type="button"
      >
        <Icon name="board" size={16} />
        Board
      </button>
    </div>
  )
}
