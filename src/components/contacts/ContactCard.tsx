import type { Contact } from "../../features/contacts/types"
import { focusRing } from "../../lib/cx"
import { Avatar } from "../ui/Avatar"
import { Badge } from "../ui/Badge"
import { Icon } from "../ui/Icon"

export function ContactCard({
  contact,
  onSelect,
}: {
  contact: Contact
  onSelect: (contact: Contact) => void
}) {
  return (
    <button
      className={`group w-full rounded-[15px] border border-white/96 bg-white/90 p-[13px] text-left text-ink shadow-[0_5px_16px_rgba(69,65,101,0.055)] transition duration-[160ms] hover:-translate-y-0.5 hover:border-primary/18 hover:shadow-[0_10px_25px_rgba(69,65,101,0.1)] ${focusRing}`}
      onClick={() => onSelect(contact)}
      type="button"
    >
      <div className="flex items-start justify-between">
        <Avatar name={contact.name} variant={contact.avatar} />
        <span
          aria-hidden="true"
          className="grid size-[26px] place-items-center rounded-lg text-faint group-hover:bg-surface"
        >
          <Icon name="more" size={18} />
        </span>
      </div>
      <div className="mt-[11px]">
        <strong className="block text-xs font-semibold">{contact.name}</strong>
        <p className="mt-[3px] text-[10px] text-muted">
          {contact.company || "Company not provided"}
        </p>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 text-[9px] text-faint">
        <Icon name={contact.role ? "briefcase" : "user"} size={15} />
        <span>{contact.role || contact.owner || "Details not provided"}</span>
      </div>
      <div className="mt-3 flex min-h-[30px] items-center justify-between border-t border-[rgba(78,73,105,0.07)] pt-2.5">
        <div className="flex items-center gap-[5px]">
          {contact.labels.slice(0, 2).map((label, index) => (
            <Badge key={label} tone={index % 2 ? "peach" : "blue"}>
              {label}
            </Badge>
          ))}
          {!contact.labels.length && (
            <span className="text-[9px] text-faint">No labels</span>
          )}
        </div>
        {contact.owner && (
          <Avatar
            name={contact.owner}
            size="small"
            variant={contact.owner.length}
          />
        )}
      </div>
    </button>
  )
}
