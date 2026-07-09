# Claude Code Starter Kit

A small, intentionally-unfinished product landing page, built for anyone learning to
use the [Claude Code](https://docs.claude.com/en/docs/claude-code) CLI hands-on.

No build tools, no dependencies — just `index.html`, `styles.css`, and `script.js`.
Clone it, open `index.html` in a browser, and start prompting.

## Getting started

```bash
git clone https://github.com/prahalad007/claude-code-starter-kit.git
cd claude-code-starter-kit
claude
```

Once Claude Code is running in this folder, just describe what you want in plain
English — it reads the files, proposes edits, and shows you the diff before anything
is saved.

## The 3-iteration workflow (the actual point of this repo)

Here's the most common mistake people make with AI coding tools: they type one giant
request — "build me a finished landing page" — get back a wall of changes they don't
fully understand, and either accept it blindly or give up. Then they conclude "AI
isn't good enough for real work" when the real problem was the process, not the model.

The fix is the same one working engineers already use, just applied to prompting:

1. **Make it work.** Get the feature functionally correct, however rough. No edge
   cases, no styling. This is one small, reviewable diff.
2. **Make it right.** Handle the edge cases. Validate input. Remove the shortcuts
   from round 1. Another small, reviewable diff.
3. **Make it good.** Polish — UX, responsiveness, accessibility, performance. Final
   reviewable diff.

Each round produces something you can actually verify before moving to the next —
instead of one enormous change you have to trust on faith. This repo's task list is
split into exactly those three rounds.

## Hands-on practice tasks

Work through these one round at a time. Finish round 1 for a task, review the diff,
*then* ask for round 2 — don't skip ahead.

### Iteration 1 — Make it work
- [ ] Build the 3-tier pricing section (Free / Pro / Team): structure and content
      only, doesn't need to look good yet.
- [ ] Make the mobile hamburger menu actually toggle the nav links open and closed.

### Iteration 2 — Make it right
- [ ] Style the pricing cards properly and highlight "Pro" as the recommended plan.
- [ ] Add real client-side validation to the signup form: reject empty input and
      invalid email formats, and show a clear success/error message.
- [ ] Make the nav toggle keyboard-accessible (works with Enter/Space, exposes an
      `aria-expanded` state).

### Iteration 3 — Make it great
- [ ] Add a dark/light theme toggle that remembers the user's choice
      (`localStorage`).
- [ ] Polish responsiveness across breakpoints — check 375px, 768px, and 1024px.
- [ ] Add a GitHub Actions workflow that deploys this site to GitHub Pages on every
      push to `main`.

## Tips for working with Claude Code

- Be specific about what "done" looks like (e.g. "the pricing cards should be
  responsive down to 375px wide") — an AI agent can't verify a goal you haven't
  actually defined.
- Use **Plan Mode** (`Shift+Tab` to cycle modes) for anything that touches multiple
  files — get a plan back before a single line changes.
- Ask it to explain a change before accepting it if you're not sure what it did.
  If you can't explain the diff yourself afterward, you didn't actually learn
  anything from it.
- Put durable, repo-specific instructions in a `CLAUDE.md` file so you're not
  re-explaining conventions every session.
- Small, incremental asks are easier to review than "redesign the whole page" —
  that's the entire idea behind the 3-iteration workflow above.

## License

Free to use for learning and teaching purposes.
