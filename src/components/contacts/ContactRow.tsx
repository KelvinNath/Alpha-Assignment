import type { Contact } from "../../features/contacts/types"
import { cx, focusRing } from "../../lib/cx"
import { Avatar } from "../ui/Avatar"
import { Badge, StageBadge } from "../ui/Badge"

export function ContactRow({
  contact,
  onSelect,
}: {
  contact: Contact
  onSelect: (contact: Contact) => void
}) {
  return (
    <tr
      className={cx(
        "cursor-pointer transition duration-150 hover:bg-[rgba(245,243,255,0.58)] hover:shadow-[inset_3px_0_var(--color-primary)] focus-visible:relative focus-visible:z-[1] last:[&>td]:border-b-0",
        focusRing,
      )}
      onClick={() => onSelect(contact)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onSelect(contact)
        }
      }}
      tabIndex={0}
    >
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] pl-[19px] text-[10px] whitespace-nowrap text-[#626277]">
        <div className="flex items-center gap-[9px]">
          <Avatar name={contact.name} size="small" variant={contact.avatar} />
          <strong className="text-[11px] font-semibold text-ink">{contact.name}</strong>
        </div>
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] text-[10px] whitespace-nowrap text-[#73738a]">
        {contact.email || <em className="text-[#adaebc] not-italic">Not provided</em>}
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] text-[10px] whitespace-nowrap text-[#626277]">
        {contact.company || <em className="text-[#adaebc] not-italic">Not provided</em>}
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] text-[10px] whitespace-nowrap text-[#626277]">
        {contact.role || <em className="text-[#adaebc] not-italic">Not provided</em>}
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] text-[10px] whitespace-nowrap text-[#626277]">
        {contact.owner ? (
          <span className="flex items-center gap-1.5">
            <Avatar
              name={contact.owner}
              size="tiny"
              variant={contact.owner.length}
            />
            {contact.owner}
          </span>
        ) : (
          <em className="text-[#adaebc] not-italic">Unassigned</em>
        )}
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] text-[10px] whitespace-nowrap text-[#626277]">
        <div className="flex items-center gap-[5px]">
          {contact.labels.length ? (
            contact.labels.map((label, index) => (
              <Badge key={label} tone={index % 2 ? "peach" : "blue"}>
                {label}
              </Badge>
            ))
          ) : (
            <em className="text-[#adaebc] not-italic">None</em>
          )}
        </div>
      </td>
      <td className="h-[62px] border-b border-[rgba(78,73,105,0.07)] px-[13px] pr-[19px] text-[10px] whitespace-nowrap text-[#626277]">
        <StageBadge stage={contact.stage} />
      </td>
    </tr>
  )
}
