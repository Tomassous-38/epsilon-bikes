<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-03-01 (2)
- Fixed failed replace_in_file on `src/sections/ProductTypesSection/components/ProductTypeCard.tsx`
- Applied image circle size increase (h-28/w-28 → h-36/w-36 md), border-stone-300, overflow-hidden, hover scale
- Applied hover:bg-zinc-200 transition to mobile link button

## 2026-03-01
- Replaced restricted Gotham font (3 @font-face blocks w/ @FONTWARNING) with Montserrat via Google Fonts import
- Updated `tailwind.css`: removed all @font-face/@FONTWARNING blocks, added Google Fonts @import
- Updated `tailwind.config.js`: swapped font stack for `gotham` key from Gotham → Montserrat
- All `font-gotham` Tailwind classes in components continue to work unchanged
</changelog>
