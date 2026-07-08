#!/usr/bin/env node
// Team Mewpilot's task tracker - a scrappy CLI built under deadline pressure.
// Commands: add <text> | list | complete <id> | remove <id>
const { loadTasks, saveTasks } = require('./store');

function add(text) {
  const tasks = loadTasks();
  // NOTE: id is just "array length + 1" - works fine until someone removes a task!
  const id = tasks.length + 1;
  tasks.push({ id, text, done: false });
  saveTasks(tasks);
  console.log(`Added task #${id}: ${text}`);
}

function list() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No tasks yet. Add one with: add "<task text>"');
    return;
  }
  tasks.forEach((t) => {
    const box = t.done ? '[x]' : '[ ]';
    console.log(`${box} #${t.id} ${t.text}`);
  });
}

function complete(id) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) {
    console.log(`No task with id ${id}`);
    return;
  }
  task.done = true;
  saveTasks(tasks);
  console.log(`Completed task #${id}`);
}

function remove(id) {
  const tasks = loadTasks();
  const next = tasks.filter((t) => t.id !== Number(id));
  saveTasks(next);
  console.log(`Removed task #${id}`);
}

function main() {
  const [, , cmd, ...rest] = process.argv;
  switch (cmd) {
    case 'add':
      add(rest.join(' '));
      break;
    case 'list':
      list();
      break;
    case 'complete':
      complete(rest[0]);
      break;
    case 'remove':
      remove(rest[0]);
      break;
    default:
      console.log('Usage: mewpilot-tasks <add|list|complete|remove> [args]');
  }
}

main();
