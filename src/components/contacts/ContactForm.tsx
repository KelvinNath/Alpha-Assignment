import { owners } from "../../features/contacts/data/contacts"
import { stages, type Contact, type Stage } from "../../features/contacts/types"
import { cx } from "../../lib/cx"
import { stageSelectTone } from "../ui/Badge"
import { fieldControl, Field } from "../ui/Field"

const textInput = cx(fieldControl, "h-[38px] px-[11px]")

export function ContactForm({
  draft,
  labelsText,
  onChange,
  onLabelsTextChange,
}: {
  draft: Contact
  labelsText: string
  onChange: <K extends keyof Contact>(key: K, value: Contact[K]) => void
  onLabelsTextChange: (value: string) => void
}) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-[15px] max-[650px]:grid-cols-1">
      <Field icon="user" label="Name">
        <input
          autoFocus
          className={textInput}
          onChange={(event) => onChange("name", event.target.value)}
          placeholder="Full name"
          value={draft.name}
        />
      </Field>
      <Field icon="mail" label="Email">
        <input
          className={textInput}
          onChange={(event) => onChange("email", event.target.value)}
          placeholder="Not provided"
          type="email"
          value={draft.email}
        />
      </Field>
      <Field icon="building" label="Company">
        <input
          className={textInput}
          onChange={(event) => onChange("company", event.target.value)}
          placeholder="Not provided"
          value={draft.company}
        />
      </Field>
      <Field icon="briefcase" label="Role">
        <input
          className={textInput}
          onChange={(event) => onChange("role", event.target.value)}
          placeholder="Not provided"
          value={draft.role}
        />
      </Field>
      <Field icon="user" label="Owner">
        <select
          className={textInput}
          onChange={(event) => onChange("owner", event.target.value)}
          value={draft.owner}
        >
          <option value="">Unassigned</option>
          {owners.map((owner) => (
            <option key={owner}>{owner}</option>
          ))}
        </select>
      </Field>
      <Field icon="layers" label="Stage">
        <select
          className={cx(textInput, "font-semibold", stageSelectTone[draft.stage])}
          onChange={(event) => onChange("stage", event.target.value as Stage)}
          value={draft.stage}
        >
          {stages.map((stage) => (
            <option key={stage}>{stage}</option>
          ))}
        </select>
      </Field>
      <Field icon="tag" label="Labels" wide>
        <input
          className={textInput}
          onChange={(event) => onLabelsTextChange(event.target.value)}
          placeholder="Add labels, separated by commas"
          value={labelsText}
        />
      </Field>
      <Field icon="note" label="Notes" wide>
        <textarea
          className={cx(
            fieldControl,
            "min-h-[104px] resize-y px-[11px] py-[11px] leading-[1.55]",
          )}
          onChange={(event) => onChange("notes", event.target.value)}
          placeholder="Add context, next steps or a thoughtful note..."
          rows={5}
          value={draft.notes}
        />
      </Field>
    </div>
  )
}
