# Q13 — Application boot and production build

The startup chain is index.html → src/main.jsx → createRoot → StrictMode → App.
The page title is `Q13. Application Boot and Production Build` and main.jsx
prints a startup message. StrictMode checks component behavior in development.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Stop the development server before the build commands, or use a second terminal.
Open the URL printed by preview. Capture index.html, main.jsx, the dist folder,
the production build command, the running page and its browser console.
