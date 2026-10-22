import { stages, type Contact, type Stage } from "../../features/contacts/types"
import { cx } from "../../lib/cx"
import { Icon } from "../ui/Icon"
import { ContactCard } from "./ContactCard"

const columns: Record<Stage, { surface: string; indicator: string }> = {
  Lead: {
    surface: "bg-[rgba(244,241,254,0.6)]",
    indicator: "border-primary shadow-[0_0_0_3px_rgba(129,115,235,0.1)]",
  },
  Prospect: {
    surface: "bg-[rgba(239,246,255,0.6)]",
    indicator: "border-[#87afea] shadow-[0_0_0_3px_rgba(135,175,234,0.12)]",
  },
  Qualified: {
    surface: "bg-[rgba(239,249,244,0.62)]",
    indicator: "border-[#72bd98] shadow-[0_0_0_3px_rgba(114,189,152,0.12)]",
  },
  Customer: {
    surface: "bg-[rgba(255,245,238,0.6)]",
    indicator: "border-[#e8ae8b] shadow-[0_0_0_3px_rgba(232,174,139,0.12)]",
  },
}

export function ContactBoard({
  contacts,
  onSelect,
}: {
  contacts: Contact[]
  onSelect: (contact: Contact) => void
}) {
  return (
    <div className="grid items-start gap-[13px] overflow-x-auto pb-3 [grid-template-columns:repeat(4,minmax(245px,1fr))]">
      {stages.map((stage) => {
        const stageContacts = contacts.filter((contact) => contact.stage === stage)
        const tone = columns[stage]
        return (
          <section
            aria-label={`${stage} column`}
            className={cx(
              "min-h-[560px] rounded-[18px] border border-white/92 p-2.5",
              tone.surface,
            )}
            key={stage}
          >
            <div className="flex min-h-10 items-center gap-2 pr-[3px] pb-2 pl-1.5">
              <span className={cx("size-2 rounded-full border-2", tone.indicator)} />
              <strong className="text-[11px] font-semibold">{stage}</strong>
              <span className="grid h-5 min-w-5 place-items-center rounded-md bg-white/65 text-[9px] text-muted">
                {stageContacts.length}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {stageContacts.map((contact) => (
                <ContactCard
                  contact={contact}
                  key={contact.id}
                  onSelect={onSelect}
                />
              ))}
              {!stageContacts.length && (
                <div className="my-1 flex flex-col items-center rounded-[15px] border border-dashed border-[rgba(93,87,124,0.15)] bg-white/32 px-[18px] py-[37px] text-center text-muted">
                  <span className="grid size-10 place-items-center rounded-[13px] bg-peach-soft text-[#b18369]">
                    <Icon name="inbox" size={21} />
                  </span>
                  <strong className="mt-3 text-[11px] font-semibold text-ink">
                    No contacts yet
                  </strong>
                  <p className="mt-[5px] max-w-[145px] text-[9px] leading-normal">
                    Move a contact here when they reach this stage.
                  </p>
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
