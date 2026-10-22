import { cx, focusRing } from "../../lib/cx"
import { Icon } from "../ui/Icon"

export function Sidebar({
  contactCount,
  collapsed,
  onToggle,
}: {
  contactCount: number
  collapsed: boolean
  onToggle: () => void
}) {
  return (
    <aside
      className={cx(
        "sticky top-0 z-10 flex h-screen flex-col border-r border-white/80 bg-white/58 px-[15px] pt-6 pb-5 shadow-[14px_0_40px_rgba(68,64,103,0.035)] backdrop-blur-[22px] max-[1180px]:px-3 max-[650px]:hidden",
        collapsed && "items-center px-2.5",
      )}
    >
      <div
        className={cx(
          "flex items-center gap-[11px] px-[9px] pt-px pb-[23px] text-lg font-bold tracking-[-0.04em]",
          collapsed && "px-0",
        )}
      >
        <span className="relative grid size-7 place-items-center overflow-hidden rounded-[9px] bg-primary shadow-[0_6px_14px_rgba(129,115,235,0.24)]">
          <span className="absolute h-[17px] w-[11px] rounded-full border-2 border-white -rotate-[32deg]" />
          <span className="absolute left-[7px] h-[17px] w-[11px] rounded-full border-2 border-white opacity-65 rotate-[32deg]" />
        </span>
        {!collapsed && <span>ALPHA</span>}
      </div>

      <button
        aria-label={collapsed ? "Alpha Workspace" : undefined}
        className={cx(
          "flex w-full items-center gap-2.5 rounded-xl border border-[rgba(65,61,95,0.1)] bg-white/72 p-2.5 text-left shadow-[0_5px_14px_rgba(73,67,105,0.04)] transition duration-[160ms] hover:-translate-y-px hover:border-primary/30",
          focusRing,
          collapsed && "w-[43px] justify-center p-[5px]",
        )}
        type="button"
      >
        <span className="grid size-[33px] shrink-0 place-items-center rounded-[9px] bg-primary-soft text-[13px] font-bold text-primary-dark">
          A
        </span>
        {!collapsed && (
          <>
            <span className="flex min-w-0 flex-1 flex-col">
              <small className="mb-px text-[10px] text-muted">Workspace</small>
              <strong className="truncate text-xs font-semibold">Alpha Workspace</strong>
            </span>
            <Icon className="rotate-90 text-faint" name="chevron" size={15} />
          </>
        )}
      </button>

      <nav aria-label="Primary navigation" className="mt-[27px] w-full">
        {!collapsed && (
          <p className="mx-2.5 mb-[9px] text-[10px] font-bold tracking-[0.1em] text-faint uppercase">
            Workspace
          </p>
        )}
        <button
          aria-current="page"
          aria-label={collapsed ? `Contacts, ${contactCount}` : undefined}
          className={cx(
            "my-[3px] flex w-full items-center gap-[11px] rounded-[11px] border-0 bg-gradient-to-r from-[rgba(232,228,253,0.88)] to-[rgba(241,239,255,0.7)] px-[11px] py-2.5 text-left text-[13px] font-semibold text-[#5d50c1]",
            focusRing,
            collapsed && "justify-center p-[11px]",
          )}
          type="button"
        >
          <Icon name="people" />
          {!collapsed && (
            <>
              <span>Contacts</span>
              <span className="ml-auto rounded-full bg-white/65 px-[7px] py-0.5 text-[10px] text-primary-dark">
                {contactCount}
              </span>
            </>
          )}
        </button>
      </nav>

      <button
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={cx(
          "mt-auto inline-flex size-9 items-center justify-center rounded-[11px] border-0 bg-gradient-to-br from-[rgba(232,228,253,0.95)] to-[rgba(241,239,255,0.72)] text-[#5d50c1] transition duration-150 hover:from-[#e4defc] hover:to-[#ece8ff]",
          focusRing,
        )}
        onClick={onToggle}
        type="button"
      >
        <Icon name={collapsed ? "sidebarOpen" : "sidebarClose"} size={18} strokeWidth={1.75} />
      </button>
    </aside>
  )
}
