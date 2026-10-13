# Verification status

Verification performed on 13 October 2026 in a Linux preparation environment.
This records actual checks; it is not proof that software has been installed
or that screenshots have been taken on the student's computer.

| Scope | Result |
|---|---|
| Q1–Q6 Node programs | Executed successfully; Q3 checked in both module formats |
| Q2 Nodemon | Actual automatic restart observed after saving an edit |
| Q7 HTTP demonstration | Both routes responded; fast request was blocked for about 4.85 seconds while the slow route ran |
| Q8–Q13 React | All 6 production builds passed |
| Q14–Q41 Angular | All 28 production builds passed with strict template checking |
| Q17 ng test | 2 pipe tests passed using the configured Vitest builder |
| Q40 and Q41 | Build outputs include separate lazy-loaded feature chunks |
| Q42 and Q44–Q50 JavaScript | Syntax checks passed |
| Q43 | Three-document sample import JSON validated; Compass GUI actions not performed |
| Q50 API routing/validation | 9 HTTP checks passed with an in-memory database test double |
| MongoDB integration | Not verified: local MongoDB server startup failed with open: Operation not permitted in this environment |
| Public HTTP APIs | Angular code compiled; live browser API behavior still requires network verification |
| Visual behavior and screenshots | Must be checked and captured on the student's computer |

The Q50 test double checks HTTP behavior and input validation; it does not
verify MongoDB persistence, connection handling or actual driver operations.
MongoDB scripts, Compass actions and Postman requests must be run against a
local MongoDB installation before submitting those execution screenshots.

See verification/automated-results.json for recorded command statuses and
Q50 mock HTTP cases. Screenshot requirements are listed per question.

## Unit-wise organization

All 50 question folders now sit inside their corresponding seven unit
folders. Every original question file was compared byte-for-byte after
the move; the program files and question instructions are unchanged.
The earlier command logs retain their original paths. The build results
above were recorded before this folder reorganization.
