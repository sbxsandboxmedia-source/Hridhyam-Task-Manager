import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { tasks } from '../data/seed';
import { getVisibleTasks } from '../lib/permissions';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const visible = getVisibleTasks(currentUser, tasks);
  const statusData = ['Ready','In Progress','Review','Revision','Completed'].map(s => ({ name:s, value: visible.filter(t => t.status===s).length }));
  const priorityData = ['High','Medium','Low'].map(p => ({ name:p, value: visible.filter(t => t.priority===p).length }));
  return <section className="page">
    <h1>Dashboard</h1><p className="muted">Current login: <b>{currentUser.name}</b> ({currentUser.role}). Data visibility backend rules ke according filter hota hai.</p>
    <div className="stats">
      <Stat label="Visible Tasks" value={visible.length}/><Stat label="Pending" value={visible.filter(t=>t.status!=='Completed').length}/><Stat label="Completed" value={visible.filter(t=>t.status==='Completed').length}/><Stat label="Overdue" value="0"/>
    </div>
    <div className="grid2">
      <div className="card"><h3>Task Status</h3><ResponsiveContainer width="100%" height={260}><BarChart data={statusData}><XAxis dataKey="name"/><YAxis allowDecimals={false}/><Tooltip/><Bar dataKey="value" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></div>
      <div className="card"><h3>Priority Breakdown</h3><ResponsiveContainer width="100%" height={260}><PieChart><Pie data={priorityData} dataKey="value" nameKey="name" outerRadius={90} label>{priorityData.map((_,i)=><Cell key={i}/>)}</Pie></PieChart></ResponsiveContainer></div>
    </div>
  </section>
}
function Stat({label,value}){return <div className="stat"><span>{label}</span><b>{value}</b></div>}
