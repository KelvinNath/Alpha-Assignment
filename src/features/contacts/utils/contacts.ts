import type { Contact, Stage } from "../types"

export function filterAndSortContacts(
  contacts: Contact[],
  search: string,
  stageFilter: Stage | "All",
  ascending: boolean,
) {
  const query = search.trim().toLowerCase()
  return contacts
    .filter((contact) => stageFilter === "All" || contact.stage === stageFilter)
    .filter(
      (contact) =>
        !query ||
        [contact.name, contact.email, contact.company, contact.role, contact.owner]
          .join(" ")
          .toLowerCase()
          .includes(query),
    )
    .sort((a, b) =>
      ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    )
}

export function initials(name: string) {
  return (
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "NC"
  )
}

export function sameContact(a: Contact, b: Contact) {
  return JSON.stringify(a) === JSON.stringify(b)
}
