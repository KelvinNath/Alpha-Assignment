import type { RefObject } from "react"
import { cx, focusRing } from "../../lib/cx"
import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"

export function Header({
  search,
  onSearch,
  searchRef,
  onAdd,
}: {
  search: string
  onSearch: (value: string) => void
  searchRef: RefObject<HTMLInputElement | null>
  onAdd: () => void
}) {
  return (
    <header className="relative z-[2] border-b border-[rgba(87,82,120,0.07)] bg-[rgba(247,247,252,0.58)] px-[34px] pt-6 pb-5 backdrop-blur-[18px] max-[1180px]:px-6 max-[650px]:p-5">
      <div className="mb-[21px] flex items-center gap-[7px] text-[11px] text-faint max-[650px]:mb-[17px]">
        <span>Workspace</span>
        <Icon name="chevron" size={13} />
        <strong className="font-semibold text-muted">Contacts</strong>
      </div>

      <div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[18px]">
        <div>
          <span className="hidden">Relationship hub</span>
          <h1 className="m-0 text-[31px] leading-[1.05] font-semibold tracking-[-0.045em] max-[650px]:text-[27px]">
            Contacts
          </h1>
          <p className="mt-2 text-[13px] text-muted">
            Manage your relationships, all in one place.
          </p>
        </div>
        <div className="flex items-center gap-3 max-[900px]:w-full max-[650px]:flex-wrap">
          <label
            className={cx(
              "flex h-10 w-[196px] items-center gap-2 rounded-[11px] border border-[rgba(65,61,95,0.1)] bg-white/82 px-2.5 text-faint transition duration-[160ms] focus-within:border-primary/46 focus-within:shadow-[0_0_0_3px_rgba(129,115,235,0.1)] max-[1180px]:w-[166px] max-[900px]:flex-1 max-[650px]:min-w-[calc(100%-128px)]",
            )}
          >
            <Icon name="search" size={17} />
            <input
              aria-label="Search contacts"
              className={cx(
                "min-w-0 flex-1 border-0 bg-transparent text-[11px] text-ink outline-none placeholder:text-faint",
                focusRing,
              )}
              onChange={(event) => onSearch(event.target.value)}
              placeholder="Search contacts..."
              ref={searchRef}
              value={search}
            />
            <kbd className="rounded-[5px] border border-[rgba(65,61,95,0.1)] bg-surface px-[5px] py-0.5 font-sans text-[8px] text-faint">
              ⌘ K
            </kbd>
          </label>
          <Button
            className="max-[650px]:px-3"
            icon="plus"
            onClick={onAdd}
            variant="primary"
          >
            Add contact
          </Button>
        </div>
      </div>
    </header>
  )
}
