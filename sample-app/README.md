# mewpilot-tasks

Team Mewpilot's scrappy little task-tracker CLI. No dependencies, no
frameworks — just enough Node.js to keep the team moving fast (and to give
Copilot CLI something real to work with).

## Commands
```
node src/index.js add "task text"
node src/index.js list
node src/index.js complete <id>
node src/index.js remove <id>
node src/index.js test        # see test/tasks.test.js
```

## Known issue (on purpose!)
There's a bug in how task ids are generated — see `test/tasks.test.js` for a
failing test that reproduces it. You'll meet this bug again in `lab-03-example-scenarios`.

This app is the shared codebase for every lab in `copilot-cli-lab/`. Don't
"fix" it before you're told to — future labs depend on it being in its
current, slightly broken state!
