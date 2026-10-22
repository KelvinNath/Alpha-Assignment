import { useEffect, useRef, useState } from "react"
import type { Contact } from "../../features/contacts/types"
import { sameContact } from "../../features/contacts/utils/contacts"
import { focusRing } from "../../lib/cx"
import { Avatar } from "../ui/Avatar"
import { Button, IconButton } from "../ui/Button"
import { Icon } from "../ui/Icon"
import { ContactForm } from "./ContactForm"

export function ContactDetailsPanel({
  contact,
  onClose,
  onSave,
}: {
  contact: Contact
  onClose: () => void
  onSave: (contact: Contact) => void
}) {
  const panelRef = useRef<HTMLElement>(null)
  const [draft, setDraft] = useState(contact)
  const isDirty = !sameContact(draft, contact)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>("button, input, select, textarea"),
      ).filter((node) => !node.hasAttribute("disabled"))
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    panel.addEventListener("keydown", onKeyDown)
    return () => panel.removeEventListener("keydown", onKeyDown)
  }, [])

  const update = <K extends keyof Contact>(key: K, value: Contact[K]) => {
    setDraft((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close details panel"
        className={`absolute inset-0 h-full w-full border-0 bg-[rgba(45,43,66,0.13)] p-0 backdrop-blur-[2px] animate-fade-in ${focusRing}`}
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <aside
        aria-labelledby="contact-details-title"
        aria-modal="true"
        className="absolute top-2.5 right-2.5 bottom-2.5 flex w-[min(440px,calc(100vw-20px))] flex-col overflow-auto rounded-[22px] border border-white/95 bg-white/90 px-[22px] pt-[17px] pb-[19px] shadow-panel backdrop-blur-[28px] animate-panel-in max-[650px]:inset-1.5 max-[650px]:w-[calc(100vw-12px)] max-[650px]:px-[18px] max-[650px]:pt-4 max-[650px]:pb-[18px]"
        ref={panelRef}
        role="dialog"
      >
        <div className="flex items-center justify-between">
          <div aria-live="polite" className="flex min-h-7 items-center gap-1.5 text-[9px] text-faint">
            {isDirty ? (
              <>
                <span className="size-1.5 rounded-full bg-[#e6a47e] shadow-[0_0_0_3px_rgba(230,164,126,0.14)]" />
                Unsaved changes
              </>
            ) : (
              <>
                <Icon name="check" size={14} />
                All changes saved
              </>
            )}
          </div>
          <IconButton icon="close" label="Close details panel" onClick={onClose} />
        </div>

        <div className="mt-[17px] flex items-center gap-4">
          <Avatar name={draft.name} size="large" variant={draft.avatar} />
          <div className="min-w-0">
            <span className="text-[9px] font-bold tracking-[0.08em] text-primary uppercase">
              Contact details
            </span>
            <h2
              className="my-1 truncate text-[22px] font-semibold tracking-[-0.04em]"
              id="contact-details-title"
            >
              {draft.name || "New contact"}
            </h2>
            <p className="text-[10px] text-muted">
              {draft.role || "Role not provided"}
              {draft.company ? ` at ${draft.company}` : ""}
            </p>
          </div>
        </div>

        <div className="mt-[22px] mb-[19px] h-px bg-[rgba(65,61,95,0.1)]" />

        <ContactForm draft={draft} onChange={update} />

        <div className="mt-auto flex justify-end gap-[9px] pt-[23px]">
          <Button className="min-h-[42px] px-4" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="min-h-[42px] min-w-[134px] px-4"
            disabled={!draft.name.trim()}
            icon="check"
            onClick={() => onSave(draft)}
            variant="primary"
          >
            Save changes
          </Button>
        </div>
      </aside>
    </div>
  )
}
