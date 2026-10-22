export const stages = ["Lead", "Prospect", "Qualified", "Customer"] as const

export type Stage = (typeof stages)[number]
export type View = "table" | "board"

export type Contact = {
  id: number
  name: string
  email: string
  company: string
  role: string
  owner: string
  labels: string[]
  stage: Stage
  notes: string
  avatar: number
}
