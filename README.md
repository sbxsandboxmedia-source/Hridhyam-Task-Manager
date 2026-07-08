# Hridhiyam Business OS

Custom Business Operating System starter code.

## Features included in UI
- Role permission model: Founder, Admin, Manager, Team Lead, Employee, Intern
- Employee can see only assigned/watched tasks
- Team Lead can see team tasks
- Manager can see department tasks
- Task Library admin-only
- Task Generator
- Multiple assignees, watchers, SOP, checklist, comments, files, activity timeline
- Time tracking fields
- Attendance placeholder
- Reports with charts
- Excel/CSV/PDF export
- Dark/light mode
- Mobile responsive layout
- Modular folder-ready architecture

## Run
```bash
npm install
npm run dev
```

## Deploy on GitHub Pages
```bash
npm run build
```
Upload `dist` folder or use GitHub Actions.

## Important backend note
Current code is a frontend prototype with seed data. For production connect Firebase/Supabase and enforce permissions using Firestore Rules or Supabase RLS. Never rely only on UI hiding.

## Recommended database tables/collections
- users
- roles
- permissions
- businesses
- departments
- teams
- task_library
- tasks
- subtasks
- task_assignees
- task_watchers
- task_comments
- task_files
- task_activity_logs
- audit_logs
- attendance
- daily_work_reports
- notifications
- settings
- saved_filters
- backups
