# mewpilot-tasks

Team Mewpilot's scrappy little task-tracker — a CLI **and** a small web app,
sharing the same data. No frameworks, no external dependencies — just enough
Node.js to keep the team moving fast (and to give Copilot CLI something real
to work with).

## CLI
```
node src/index.js add "task text"
node src/index.js list
node src/index.js complete <id>
node src/index.js remove <id>
```

## Web App ("Mission Control")
A tiny dependency-free web UI on top of the same `tasks.json`:
```
node web-app/server.js
# then open http://localhost:4173
```
Add tasks from the browser, then run `node src/index.js list` in a terminal
— same data, two views. Great for a live demo.

## Tests
```
node test/tasks.test.js
```

## Known issue (on purpose!)
There's a bug in how task ids are generated — in **both** the CLI
(`src/index.js`) and the web app (`web-app/server.js`), by design, so the
bug shows up no matter which interface you use. See `test/tasks.test.js` for
a failing test that reproduces it. You'll meet this bug again in
`lab-03-cost-saving-workflow`.

## Project-level Copilot setup
This repo already ships real Copilot CLI configuration — see
`.github/copilot-instructions.md` and `.github/skills/` (`duplicate-task-checker`,
`standup-recap`). Neither skill needs git — both work straight off the app's
own `tasks.json`, which keeps this beginner-friendly. Explored in
`lab-02-local-skills`.

This app is the shared codebase for every lab in `copilot-cli-lab/`. Don't
"fix" the id bug before you're told to — future labs depend on it being in
its current, slightly broken state!
