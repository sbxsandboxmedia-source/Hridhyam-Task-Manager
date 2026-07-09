import React, { useMemo, useState } from 'react';
import { LogOut, Search, Moon, Sun, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getVisibleMenu } from '../lib/permissions';

const iconMap = { Dashboard:'📊', Businesses:'🏢', Departments:'🧩', Employees:'👥', 'Task Library':'📚', Tasks:'✅', 'My Tasks':'✅', 'Team Tasks':'👥', 'Task Generator':'⚙️', Attendance:'🕒', Calendar:'📅', Reports:'📈', Settings:'🔧' };

export default function Layout({ page, setPage, children }) {
  const { currentUser, logout } = useAuth();
  const [dark, setDark] = useState(false);
  const menu = useMemo(() => getVisibleMenu(currentUser), [currentUser]);
  return <div className={dark ? 'app dark' : 'app'}>
    <aside className="sidebar">
      <div className="brand"><div className="logo">H</div><div><b>HRIDHIYAM OS</b><span>v1.0 Production Starter</span></div></div>
      <nav>{menu.map(m => <button key={m} onClick={() => setPage(m)} className={page===m?'active':''}><span>{iconMap[m]}</span>{m}</button>)}</nav>
      <div className="sideFooter"><ShieldCheck size={16}/> Permission based access</div>
    </aside>
    <main className="main">
      <header className="topbar">
        <div className="search"><Search size={18}/><input placeholder="Global search tasks, employees, tags, SOP..." /></div>
        <button className="mode" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>} {dark?'Light':'Dark'}</button>
        <div className="profile"><div className="avatar">{currentUser.avatar}</div><div><b>{currentUser.name}</b><span>{currentUser.role}</span></div></div>
        <button className="logout" onClick={logout}><LogOut size={17}/> Logout</button>
      </header>
      {children}
    </main>
  </div>
}
