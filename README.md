# ALPHA — Contact Management Prototype

ALPHA is a single-page contact workspace for reviewing and updating relationships. It presents the same set of contacts as a table or a board, and opens one details panel from either view.

## Overview

The prototype is a frontend take-home for managing a small contact list. A reviewer can search and filter the list, sort it by name, switch between Table and Board, and open a contact to edit it.

Saving writes the edit into the shared list, so both views show the same result. Cancel, the backdrop, and Escape drop the edit. The selected view stays in place when the panel closes. Changes live in memory for the current session and are lost on refresh.

## Features

- Table and Board views over one contact list. Board columns are Lead, Prospect, Qualified, and Customer.
- Search across name, email, company, role, and owner.
- Stage filter and name sorting (A–Z / Z–A). Both apply to the list used by either view.
- A contact details panel opened from a table row or a board card. The same panel is used to add a contact.
- Editable name, email, company, role, owner, stage, labels, and notes. Save commits the draft. Cancel, a backdrop click, and Escape discard it.
- Stage and notes updates appear in both views after save.
- An empty Customer column in the initial data, and a contact (Jon Bell) with no role, owner, labels, or notes.
- A sidebar collapse control that reduces the sidebar to icons, and a responsive layout that hides the sidebar on a narrow window.
- Keyboard support: Enter or Space opens a focused table row, Escape closes the panel, and Command-K or Ctrl-K focuses search. Focus returns to the control that opened the panel.

## Tech Stack

- React 19 and React DOM
- TypeScript 5.7
- Vite 8 with `@vitejs/plugin-react`
- Tailwind CSS 4 with `@tailwindcss/vite`

There is no routing library, state library, test runner, or UI kit. Styling is Tailwind utilities, with design tokens and two panel animations in `src/index.css`.

## Getting Started

Install [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (the range required by the installed Vite release) and npm.

```bash
npm install
npm run dev
```

The dev server prints a local URL. Other scripts in `package.json`:

```bash
npm run build
npm run preview
```

`build` typechecks with `tsc -b`, then writes a production bundle to `dist`. `preview` serves that bundle.

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  pages/
    ContactsPage.tsx
  components/
    layout/       App shell, header, and sidebar
    contacts/     Table, board, cards, details panel, and form
    ui/           Buttons, fields, badges, avatars, icons, view switch
  features/contacts/
    types.ts      Contact, Stage, and View types
    data/         Mock contacts and owner names
    hooks/        Shared contact state
    utils/        Search, filter, and sort
  lib/
    cx.ts         Class name helper and focus-ring class
```

`pages/ContactsPage.tsx` composes the screen. `features/contacts` owns types, mock data, and behaviour. `components` is presentational: layout, contact views, and small controls. `lib` holds shared class helpers.

## Architecture and Design Decisions

One `contacts` array in `useContacts` is the saved list. Search, stage filter, and sort derive `visibleContacts` from it. Table and Board both receive that array, so they cannot drift apart.

The details panel keeps a separate draft, copied from the selected contact when it opens. Typing updates only the draft. Save replaces or appends that contact in the shared array and closes the panel. Closing without saving throws the draft away. A new contact from Add contact is not inserted until it is saved, and Save stays disabled until the name is non-empty.

Components are split by role rather than by a global store. The page reads the hook; the panel owns the draft. That keeps Cancel correct without a second copy of the list.

Tailwind utilities carry layout, colour, type, and breakpoints. `src/index.css` only defines the theme tokens, the font, base element styles, the panel enter animations, and a reduced-motion override. Exact pastel values use theme colours and arbitrary utilities instead of a second component stylesheet.

The trade-off is local and simple: session state is enough for the prototype, and there is no cache or server to keep in sync. The cost is that a refresh restores the mock data.

## Data and Scope

The app starts from ten fictional contacts in `src/features/contacts/data/contacts.ts`. State is React `useState`. There is no API client, database, or `localStorage` persistence. Edits last until the page is reloaded.

## Validation

`npm run build` was run against this project and completed successfully: `tsc -b` passed, and Vite wrote the production bundle.

Manual checks in the running app confirmed Table/Board switching, search, stage filtering, name sorting, opening the panel from both views, Save, Cancel, backdrop close, and Escape. An unsaved edit did not change the other view. After save, a stage change was visible in both views. The initial Customer column was empty, and Jon Bell rendered with missing optional fields. Layout was checked at 1280px, 1100px, 820px, and 600px. There is no automated test suite.
