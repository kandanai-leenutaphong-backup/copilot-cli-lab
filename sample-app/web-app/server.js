// Team Mewpilot Mission Control — a tiny, dependency-free web UI on top of
// the same store.js the CLI uses, so the CLI and the browser stay in sync.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { loadTasks, saveTasks } = require('../src/store');

const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = process.env.PORT || 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
};

function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function serveStatic(req, res) {
  const reqPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(PUBLIC_DIR, reqPath);
  // Guard against escaping the public/ directory.
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => (raw += chunk));
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const [urlPath] = req.url.split('?');

  // --- API routes ---
  if (urlPath === '/api/tasks' && req.method === 'GET') {
    return sendJson(res, 200, loadTasks());
  }

  if (urlPath === '/api/tasks' && req.method === 'POST') {
    const { text } = await readBody(req).catch(() => ({}));
    if (!text || !text.trim()) {
      return sendJson(res, 400, { error: 'Task text is required' });
    }
    const tasks = loadTasks();
    // NOTE: same id-generation logic (and same known bug!) as src/index.js -
    // this is intentional, see lab-03-cost-saving-workflow.
    const id = tasks.length + 1;
    tasks.push({ id, text: text.trim(), done: false });
    saveTasks(tasks);
    return sendJson(res, 201, { id, text: text.trim(), done: false });
  }

  const completeMatch = urlPath.match(/^\/api\/tasks\/(\d+)\/complete$/);
  if (completeMatch && req.method === 'POST') {
    const id = Number(completeMatch[1]);
    const tasks = loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (!task) return sendJson(res, 404, { error: `No task with id ${id}` });
    task.done = true;
    saveTasks(tasks);
    return sendJson(res, 200, task);
  }

  const removeMatch = urlPath.match(/^\/api\/tasks\/(\d+)$/);
  if (removeMatch && req.method === 'DELETE') {
    const id = Number(removeMatch[1]);
    const tasks = loadTasks().filter((t) => t.id !== id);
    saveTasks(tasks);
    return sendJson(res, 200, { removed: id });
  }

  // --- Static files (the UI) ---
  if (req.method === 'GET') {
    return serveStatic(req, res);
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Team Mewpilot Mission Control running at http://localhost:${PORT}`);
});
