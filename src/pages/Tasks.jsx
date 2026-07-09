import React, { useMemo, useState } from 'react';
import { tasks, users, businesses, departments } from '../data/seed';
import { getVisibleTasks } from '../lib/permissions';
import { useAuth } from '../context/AuthContext';

export default function TasksPage({ title='Tasks' }) {
  const { currentUser } = useAuth();
  const [status,setStatus] = useState('All');
  const visible = getVisibleTasks(currentUser, tasks);
  const rows = useMemo(()=> visible.filter(t => status==='All' || t.status===status), [visible,status]);
  return <section className="page"><div className="pageHead"><div><h1>{title}</h1><p className="muted">{currentUser.role} view: sirf allowed tasks yaha render hote hain.</p></div><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Ready</option><option>In Progress</option><option>Review</option><option>Revision</option><option>Completed</option></select></div>
    <div className="card overflow"><table><thead><tr><th>Task No</th><th>Task</th><th>Business</th><th>Department</th><th>Assignees</th><th>Status</th><th>Priority</th><th>Due</th><th>Progress</th></tr></thead><tbody>{rows.map(t => <tr key={t.id}><td><b>{t.number}</b></td><td>{t.title}<small>SOP attached · {t.checklist.length} checklist</small></td><td>{businesses.find(b=>b.id===t.businessId)?.name}</td><td>{departments.find(d=>d.id===t.departmentId)?.name}</td><td>{t.assigneeIds.map(id=>users.find(u=>u.id===id)?.name).join(', ')}</td><td><span className={'pill '+t.status.replaceAll(' ','')}>{t.status}</span></td><td>{t.priority}</td><td>{t.dueDate}</td><td><div className="bar"><i style={{width:t.progress+'%'}}></i></div></td></tr>)}</tbody></table></div>
  </section>
}
