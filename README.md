# GAM Command Reference

This repository is a curated collection of commonly used  
**GAM (Google Admin Manager)** commands for Google Workspace administration.

It is intended as a **practical reference**, not a full replacement for the
official GAM documentation.

The focus is on commands that are actually used in day-to-day admin,
operations, migration, and automation work.

---

## What this repository is for

This repo exists to:

- Quickly look up GAM commands without searching docs
- Act as a personal / team cheat-sheet
- Serve as a knowledge base for Google Workspace admins
- Provide copy-paste ready examples for common tasks

It groups commands by **real operational use cases**, not by GAM syntax alone.

---

## What this repository is NOT

- Not a tutorial for installing GAM  
- Not a full GAM manual  
- Not guaranteed to cover every command or flag  

For official documentation, refer to the GAM project:
https://github.com/GAM-team/GAM

---

## Repository structure

Commands are organized by function:



Each file focuses on a specific area and contains example commands only.

---

## Usage notes

- Commands assume GAM is already installed and authorized
- Replace placeholders such as:
  - `<userEmail>`
  - `<groupEmail>`
  - `<OrgUnitPath>`
- Some commands are **destructive** (delete, wipe, suspend)
- Always test in a non-production environment when possible

---

## Common use cases covered

- User lifecycle management
- Group creation and membership
- Reporting and auditing
- Email aliases and routing
- Mobile and device management
- Custom schemas and directory fields
- Data migration and transfer
- Classroom administration
- Gmail advanced operations
- Bulk actions using CSV files

---

## Disclaimer

This repository is provided as a reference only.

Running GAM commands can directly impact users, data, and security settings.
Always review and understand a command before executing it in production.

---

## License

MIT License.
