// Tiny JSON-file backed store for tasks.
// NOTE for lab participants: this file is intentionally a little rough around
// the edges - it's your practice ground for Copilot CLI skills!
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'tasks.json');

function loadTasks() {
  if (!fs.existsSync(DB_PATH)) {
    return [];
  }
  const raw = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(raw);
}

function saveTasks(tasks) {
  fs.writeFileSync(DB_PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { loadTasks, saveTasks, DB_PATH };
