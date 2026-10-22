import { useEffect, useMemo, useRef, useState } from "react"
import { initialContacts } from "../data/contacts"
import type { Contact, Stage, View } from "../types"
import { filterAndSortContacts } from "../utils/contacts"

export function useContacts() {
  const searchRef = useRef<HTMLInputElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const [contacts, setContacts] = useState(initialContacts)
  const [view, setView] = useState<View>("table")
  const [selected, setSelected] = useState<Contact | null>(null)
  const [search, setSearch] = useState("")
  const [stageFilter, setStageFilter] = useState<Stage | "All">("All")
  const [ascending, setAscending] = useState(true)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const visibleContacts = useMemo(
    () => filterAndSortContacts(contacts, search, stageFilter, ascending),
    [ascending, contacts, search, stageFilter],
  )

  const rememberFocus = () => {
    returnFocus.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
  }

  const closePanel = () => {
    setSelected(null)
    const target = returnFocus.current
    requestAnimationFrame(() => target?.focus())
  }

  const openContact = (contact: Contact) => {
    rememberFocus()
    setSelected(contact)
  }

  const saveContact = (updated: Contact) => {
    setContacts((current) => {
      const exists = current.some((contact) => contact.id === updated.id)
      return exists
        ? current.map((contact) => (contact.id === updated.id ? updated : contact))
        : [updated, ...current]
    })
    closePanel()
  }

  const addContact = () => {
    rememberFocus()
    setSelected({
      id: Date.now(),
      name: "",
      email: "",
      company: "",
      role: "",
      owner: "Maya Chen",
      labels: [],
      stage: "Lead",
      notes: "",
      avatar: (contacts.length % 10) + 1,
    })
  }

  return {
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
    toggleSort: () => setAscending((current) => !current),
    openContact,
    closePanel,
    saveContact,
    addContact,
  }
}
