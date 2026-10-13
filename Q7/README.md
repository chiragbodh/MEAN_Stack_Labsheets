# Q7 — Blocking vs. Non-blocking Code

Run `node Q7_blocking_nonblocking.js` from this folder.

The program creates sample.txt if needed and starts a server on port 3000. Open http://localhost:3000/slow, then immediately open http://localhost:3000/fast in a second tab. The slow route deliberately blocks the event loop for about five seconds. Capture all three file-reading results and both browser routes. Stop with Ctrl+C.
