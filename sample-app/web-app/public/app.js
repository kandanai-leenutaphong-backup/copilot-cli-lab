// Team Mewpilot Mission Control — frontend logic. Talks to the tiny API in
// server.js, which reads/writes the same tasks.json the CLI uses.
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const todoCount = document.getElementById('todo-count');
const doneCount = document.getElementById('done-count');
const form = document.getElementById('add-form');
const input = document.getElementById('task-input');

async function fetchTasks() {
  const res = await fetch('/api/tasks');
  const tasks = await res.json();
  render(tasks);
}

function taskRow(task) {
  const li = document.createElement('li');
  li.className = 'task-item' + (task.done ? ' done' : '');

  const text = document.createElement('span');
  text.className = 'task-text';
  text.textContent = `#${task.id} ${task.text}`;
  li.appendChild(text);

  const actions = document.createElement('span');
  actions.className = 'task-actions';

  if (!task.done) {
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓ Ship it';
    completeBtn.onclick = () => completeTask(task.id);
    actions.appendChild(completeBtn);
  }

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✕';
  removeBtn.title = 'Remove';
  removeBtn.onclick = () => removeTask(task.id);
  actions.appendChild(removeBtn);

  li.appendChild(actions);
  return li;
}

function render(tasks) {
  const todo = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  todoList.innerHTML = '';
  doneList.innerHTML = '';

  if (todo.length === 0) {
    todoList.innerHTML = '<li class="empty">Nothing in flight. Add a task above!</li>';
  } else {
    todo.forEach((t) => todoList.appendChild(taskRow(t)));
  }

  if (done.length === 0) {
    doneList.innerHTML = '<li class="empty">Nothing shipped yet.</li>';
  } else {
    done.forEach((t) => doneList.appendChild(taskRow(t)));
  }

  todoCount.textContent = todo.length;
  doneCount.textContent = done.length;
}

async function addTask(text) {
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  fetchTasks();
}

async function completeTask(id) {
  await fetch(`/api/tasks/${id}/complete`, { method: 'POST' });
  fetchTasks();
}

async function removeTask(id) {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  fetchTasks();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addTask(text);
});

fetchTasks();
