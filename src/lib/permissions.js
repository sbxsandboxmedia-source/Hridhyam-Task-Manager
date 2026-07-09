import { departments, users } from '../data/seed';

export function isAdminLike(user) {
  return ['Founder','Admin'].includes(user?.role);
}

export function getVisibleTasks(user, tasks) {
  if (!user) return [];
  if (isAdminLike(user)) return tasks.filter(t => !t.deleted && !t.archived);
  if (user.role === 'Manager') {
    const managedDeptIds = departments.filter(d => d.managerId === user.id).map(d => d.id);
    return tasks.filter(t => !t.deleted && !t.archived && managedDeptIds.includes(t.departmentId));
  }
  if (user.role === 'Team Lead') {
    const teamIds = users.filter(u => u.teamLeadId === user.id).map(u => u.id);
    teamIds.push(user.id);
    return tasks.filter(t => !t.deleted && !t.archived && t.assigneeIds.some(id => teamIds.includes(id)));
  }
  return tasks.filter(t => !t.deleted && !t.archived && t.assigneeIds.includes(user.id));
}

export function getVisibleMenu(user) {
  if (!user) return [];
  const base = ['Dashboard','My Tasks','Attendance','Calendar'];
  if (isAdminLike(user)) return ['Dashboard','Businesses','Departments','Employees','Task Library','Tasks','Task Generator','Attendance','Calendar','Reports','Settings'];
  if (user.role === 'Manager') return ['Dashboard','Team Tasks','Employees','Attendance','Calendar','Reports'];
  if (user.role === 'Team Lead') return ['Dashboard','Team Tasks','Attendance','Calendar'];
  return base;
}
