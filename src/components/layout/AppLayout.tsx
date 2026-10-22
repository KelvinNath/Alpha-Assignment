import { useState, type ReactNode } from "react"
import { cx } from "../../lib/cx"
import { Sidebar } from "./Sidebar"

export function AppLayout({
  contactCount,
  children,
}: {
  contactCount: number
  children: ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cx(
        "relative isolate grid min-h-screen overflow-hidden max-[650px]:block",
        collapsed
          ? "grid-cols-[78px_minmax(0,1fr)]"
          : "grid-cols-[238px_minmax(0,1fr)] max-[1180px]:grid-cols-[202px_minmax(0,1fr)]",
      )}
    >
      <div className="pointer-events-none fixed -top-[220px] right-[6%] -z-[2] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(190,183,255,0.42),transparent_68%)] opacity-[0.68] blur-[12px]" />
      <div className="pointer-events-none fixed bottom-[-260px] left-[28%] -z-[2] size-[640px] rounded-full bg-[radial-gradient(circle,rgba(176,218,255,0.36),transparent_66%)] opacity-[0.68] blur-[12px]" />
      <Sidebar
        collapsed={collapsed}
        contactCount={contactCount}
        onToggle={() => setCollapsed((current) => !current)}
      />
      <main className="h-screen min-w-0 overflow-auto">{children}</main>
    </div>
  )
}
