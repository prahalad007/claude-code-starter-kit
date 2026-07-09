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
English — it can read the files, make edits, and show you the diff before anything
is saved.

## Hands-on practice tasks

The page works, but it's missing a few things on purpose. Try asking Claude Code
to tackle these one at a time:

1. **Finish the pricing section.** Build 3 tiers (Free, Pro, Team) with pricing,
   feature lists, and a "Get started" button. Highlight the Pro plan as recommended.
2. **Make the mobile nav menu work.** The hamburger button exists but doesn't do
   anything yet — wire it up to show/hide the nav links on small screens.
3. **Validate the signup form.** Reject empty input and invalid email addresses,
   and show a clear success/error message.
4. **Add a dark/light theme toggle.** The page is dark-mode only right now.
5. **Deploy it.** Add a GitHub Actions workflow that publishes this site to
   GitHub Pages on every push to `main`.

Each task is self-contained, so you can try them in any order — a good way to
practice describing a feature, reviewing what Claude Code changes, and iterating.

## Tips for working with Claude Code

- Be specific about what "done" looks like (e.g. "the pricing cards should be
  responsive down to 375px wide").
- Ask it to explain a change before accepting it if you're not sure what it did.
- Small, incremental asks are easier to review than "redesign the whole page."
- Use `git diff` (or let Claude Code show you the diff) before committing.

## License

Free to use for learning and teaching purposes.
