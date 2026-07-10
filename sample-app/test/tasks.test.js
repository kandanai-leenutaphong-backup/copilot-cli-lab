// Minimal smoke test for Team Mewpilot's task tracker.
// Lab participants: this test currently FAILS - that's the bug you'll
// hunt down together with Copilot CLI in lab-02 (example scenarios)!
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CLI = path.join(__dirname, '..', 'src', 'index.js');
const DB_PATH = path.join(__dirname, '..', 'tasks.json');

function run(cmd) {
  return execSync(`node ${CLI} ${cmd}`, { encoding: 'utf8' });
}

// Start clean.
if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);

run('add "write the lab README"');
run('add "record demo video"');
run('remove 1');
run('add "ship it"');

const tasks = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
const ids = tasks.map((t) => t.id);

// BUG: after removing task #1 and adding a new one, ids collide because
// new ids are derived from array length instead of a stable counter.
assert.strictEqual(
  new Set(ids).size,
  ids.length,
  `Expected unique task ids but got duplicates: ${JSON.stringify(ids)}`
);

console.log('All tests passed!');
