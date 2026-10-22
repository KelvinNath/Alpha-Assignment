import type { Contact } from "../../features/contacts/types"
import { Icon } from "../ui/Icon"
import { ContactRow } from "./ContactRow"

const headerCell =
  "h-11 border-b border-[rgba(65,61,95,0.1)] bg-[rgba(248,248,252,0.92)] px-[13px] text-left text-[9px] font-bold tracking-[0.055em] text-[#8d8da0] uppercase"

export function ContactTable({
  contacts,
  onSelect,
}: {
  contacts: Contact[]
  onSelect: (contact: Contact) => void
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/94 bg-white/90 shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1030px] border-collapse">
          <thead>
            <tr>
              <th className={`${headerCell} pl-[19px]`}>Name</th>
              <th className={headerCell}>Email</th>
              <th className={headerCell}>Company</th>
              <th className={headerCell}>Role</th>
              <th className={headerCell}>Owner</th>
              <th className={headerCell}>Labels</th>
              <th className={`${headerCell} pr-[19px]`}>Stage</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactRow
                contact={contact}
                key={contact.id}
                onSelect={onSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
      {!contacts.length && (
        <div className="flex flex-col items-center px-5 py-16 text-center">
          <span className="grid size-11 place-items-center rounded-[14px] bg-primary-soft text-primary">
            <Icon name="search" size={22} />
          </span>
          <strong className="mt-[13px] text-[13px]">No matching contacts</strong>
          <p className="mt-[5px] text-[11px] text-muted">
            Try another search or clear your stage filter.
          </p>
        </div>
      )}
    </div>
  )
}
