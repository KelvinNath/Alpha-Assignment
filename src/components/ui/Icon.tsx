import type { ReactNode } from "react"
import { cx } from "../../lib/cx"

export type IconName =
  | "people"
  | "chart"
  | "settings"
  | "chevron"
  | "search"
  | "plus"
  | "table"
  | "board"
  | "filter"
  | "sort"
  | "more"
  | "close"
  | "mail"
  | "building"
  | "briefcase"
  | "user"
  | "tag"
  | "layers"
  | "note"
  | "inbox"
  | "check"
  | "arrow"
  | "sidebarClose"
  | "sidebarOpen"

const iconPaths: Record<IconName, ReactNode> = {
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 4 3 5-7" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.56-1.03H3v-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.02A1.7 1.7 0 0 0 10.05 3H14v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.02A1.7 1.7 0 0 0 21 10.05V14h-.09A1.7 1.7 0 0 0 19.4 15Z" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  table: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M9 4v16" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="7" height="16" rx="2" />
      <rect x="14" y="4" width="7" height="10" rx="2" />
    </>
  ),
  filter: <path d="M4 5h16l-6.5 7.4V19l-3 1.5v-8.1L4 5Z" />,
  sort: (
    <>
      <path d="M3 6h14M3 12h10M3 18h6" />
      <path d="m17 15 3 3 3-3M20 18V8" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" />
      <path d="M7 7h2M7 11h2M7 15h2M16 12h1M16 16h1" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  tag: (
    <>
      <path
        d="M20.6 13.1 11 22.7 1.3 13V3.3H11l9.6 9.8Z"
        transform="scale(.9) translate(1.2 0)"
      />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  note: (
    <>
      <path d="M14 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Z" />
      <path d="M14 3v7h7M7 15h10M7 18h7" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 5h16l2 10v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4L4 5Z" />
      <path d="M2 15h5l2 3h6l2-3h5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <path d="m9 18 6-6-6-6" />,
  sidebarClose: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M9 5v14" />
      <path d="M14.5 9.75 12.25 12l2.25 2.25" />
    </>
  ),
  sidebarOpen: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M9 5v14" />
      <path d="M12.25 9.75 14.5 12l-2.25 2.25" />
    </>
  ),
}

export function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
  className,
}: {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={cx("shrink-0 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round]", className)}
      height={size}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
    >
      {iconPaths[name]}
    </svg>
  )
}
