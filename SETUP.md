# Setup and run instructions

## Software

Use Node.js 24 LTS, npm, VS Code, and a browser. For MongoDB practicals,
install MongoDB Community Server, mongosh, MongoDB Compass and Postman Desktop.
Use each vendor's official download page:

- https://nodejs.org/en/download
- https://code.visualstudio.com/download
- https://www.mongodb.com/try/download/community
- https://www.mongodb.com/try/download/shell
- https://www.mongodb.com/try/download/compass
- https://www.postman.com/downloads/

The Angular examples use Angular 20.3, TypeScript 5.9 and NgModules so the
AppModule, feature-module and *ngIf/*ngFor tasks match the supplied lab sheet.
Version compatibility: https://v20.angular.dev/reference/versions
Q17's test configuration follows
https://v20.angular.dev/guide/testing/unit-tests.

## Download

Clone this repository or use GitHub Code → Download ZIP and extract it.
Open the extracted root folder in VS Code. Each Q folder is an independent
practical; there is no root npm install command.

## Node and React

Read Q1–Q7 READMEs for node commands. Q2's npm project is in Q2/node-lab.
For each React practical Q8–Q13: open its folder, run npm install, then
npm run dev. npm run build creates dist; npm run preview serves that build.

## Angular

Open one Q14–Q41 folder, run npm install, then npm start.
The default URL is http://localhost:4200. Stop one server before opening the
next. npm run build compiles that question. Q17 also includes npm test.
The global CLI installation and ng new demonstration are explained in Q14.
Do not run ng new inside a completed Q folder.

## MongoDB

Start the MongoDB service on your own machine. Q42 explains setup.
Q43 is a GUI practical with a sample input JSON file and step-by-step actions.
Q44–Q47 run in mongosh with --file; each has a separate tagged sample dataset.
Q48–Q50 use npm install and npm start. Their separate lab databases avoid
mixing the driver/API exercises with the shell datasets.
Q50's Postman collection covers all five routes and selected error cases.

## Screenshot process

For every question, keep its number and source filename visible in VS Code,
capture the code, run it, and capture the actual terminal/browser output.
Save images in Qn/screenshots/. Use several images for longer programs.
Windows: Win+Shift+S. Do not submit README text or sample data as execution proof.

## Common issues

- npm/ng/mongosh not recognized: reopen the terminal after installation and
  confirm the installer's PATH option.
- PowerShell blocks npm.ps1: use npm.cmd/ng.cmd or a Command Prompt terminal.
- Port in use: stop the earlier lab server or choose another documented port.
- MongoDB connection refused: start the local MongoDB service before the script.
- Public API requests fail: check internet access and DevTools Network. Q36–Q39
  use https://jsonplaceholder.typicode.com/; Q41 uses https://fakestoreapi.com/.
  JSONPlaceholder accepts simulated writes but does not persist them.
- Angular browser tests in Q17 use the documented experimental Vitest builder;
  this is a teaching workspace, and the repository pins its direct dependencies.
