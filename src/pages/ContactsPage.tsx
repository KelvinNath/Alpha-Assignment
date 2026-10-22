import { stages, type Stage } from "../features/contacts/types"
import { useContacts } from "../features/contacts/hooks/useContacts"
import { cx, focusRing } from "../lib/cx"
import { AppLayout } from "../components/layout/AppLayout"
import { Header } from "../components/layout/Header"
import { ContactBoard } from "../components/contacts/ContactBoard"
import { ContactDetailsPanel } from "../components/contacts/ContactDetailsPanel"
import { ContactTable } from "../components/contacts/ContactTable"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { Icon } from "../components/ui/Icon"
import { ViewSwitch } from "../components/ui/ViewSwitch"

export function ContactsPage() {
  const {
    contacts,
    visibleContacts,
    view,
    setView,
    selected,
    search,
    setSearch,
    searchRef,
    stageFilter,
    setStageFilter,
    ascending,
    toggleSort,
    openContact,
    closePanel,
    saveContact,
    addContact,
  } = useContacts()

  return (
    <AppLayout contactCount={contacts.length}>
      <Header
        onAdd={addContact}
        onSearch={setSearch}
        search={search}
        searchRef={searchRef}
      />
      <section className="px-[34px] pt-[18px] pb-8 max-[1180px]:px-6 max-[650px]:px-3.5 max-[650px]:pt-[15px] max-[650px]:pb-6">
        <div className="mb-[15px] flex min-h-[42px] items-center gap-2.5 max-[650px]:flex-wrap">
          <ViewSwitch onChange={setView} view={view} />
          <span className="pl-[5px] text-[10px] text-faint max-[650px]:order-2">
            <strong className="font-semibold text-muted">{visibleContacts.length}</strong>{" "}
            contacts
          </span>
          <div className="flex-1 max-[650px]:min-w-[20%]" />
          <label
            className={cx(
              "relative flex min-h-9 items-center gap-[7px] rounded-[11px] border border-[rgba(65,61,95,0.1)] bg-white/76 px-2.5 text-[11px] font-semibold text-muted hover:bg-white hover:text-ink",
              stageFilter !== "All" && "bg-white text-ink",
            )}
          >
            <Icon name="filter" size={16} />
            <span>Filter</span>
            <select
              aria-label="Filter by stage"
              className={cx("absolute inset-0 w-full opacity-0", focusRing)}
              onChange={(event) =>
                setStageFilter(event.target.value as Stage | "All")
              }
              value={stageFilter}
            >
              <option value="All">All stages</option>
              {stages.map((stage) => (
                <option key={stage}>{stage}</option>
              ))}
            </select>
            {stageFilter !== "All" && <Badge tone="violet">1</Badge>}
          </label>
          <Button className="min-h-9 px-[11px]" icon="sort" onClick={toggleSort}>
            Name {ascending ? "A–Z" : "Z–A"}
          </Button>
        </div>

        {view === "table" ? (
          <ContactTable contacts={visibleContacts} onSelect={openContact} />
        ) : (
          <ContactBoard contacts={visibleContacts} onSelect={openContact} />
        )}
      </section>

      {selected && (
        <ContactDetailsPanel
          contact={selected}
          onClose={closePanel}
          onSave={saveContact}
        />
      )}
    </AppLayout>
  )
}
