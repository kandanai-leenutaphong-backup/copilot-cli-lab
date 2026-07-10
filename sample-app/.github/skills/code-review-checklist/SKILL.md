---
name: code-review-checklist
description: Review any small Node.js application for concrete correctness, input validation, error handling, and test gaps. Use when asked to review code or a change.
license: MIT
---

# Code Review Checklist

Review the requested code using this short checklist:

1. Identify concrete correctness bugs and user-visible failures.
2. Check that user-controlled input is validated before it changes state.
3. Check error responses are clear and do not claim success after a failure.
4. Identify the smallest missing regression test for each finding.

Report only actionable findings. Do not spend space on formatting preferences.
