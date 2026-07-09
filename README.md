# Hridhiyam Business OS v1.0

Production-ready starter architecture for a custom Business Operating System.

## Included
- React + Vite app
- Role based login demo
- Founder/Admin full access
- Manager department scope
- Team Lead team scope
- Employee own-task scope
- Multiple businesses, departments, employees
- Task Library admin-only module
- Tasks with assignees, watchers, SOP, checklist, progress
- Attendance, Calendar, Reports, Settings starter pages
- Dark mode
- Responsive UI
- Firebase-ready structure and Firestore security rules

## Local Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## GitHub Pages Deploy
This repo URL is expected:
`https://USERNAME.github.io/Hridhyam-Task-Manager/`

`vite.config.js` already has:
```js
base: '/Hridhyam-Task-Manager/'
```

Run:
```bash
npm run build
```
Upload the **inside content of `dist` folder** to the GitHub repository root.

## Production Next Steps
1. Add Firebase project config in `src/lib/firebase.js`.
2. Replace demo login with Firebase Auth email/password.
3. Store users, tasks, taskLibrary, attendance in Firestore.
4. Deploy `firestore.rules`.
5. Add Firebase Storage for attachments and file version history.
6. Add Cloud Functions for due-date reminders, recurring task generation, and backups.

## Version
1.0.0
