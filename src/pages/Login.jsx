import React from 'react';
import { useAuth } from '../context/AuthContext';
import { users } from '../data/seed';

export default function Login() {
  const { loginAs } = useAuth();
  return <div className="loginPage">
    <section className="loginCard">
      <div className="loginHero">
        <h1>HRIDHIYAM<br/>Business OS</h1>
        <p>Version 1.0 production starter with real RBAC logic, future Firebase/Supabase ready architecture, tasks, attendance, reports and settings modules.</p>
        <div className="chips"><span>Admin full access</span><span>Employee own tasks</span><span>Team Lead team tasks</span><span>Manager department tasks</span></div>
      </div>
      <div className="loginUsers">
        <h2>Login as demo user</h2>
        <p>Production me ye Firebase/Supabase Auth se replace hoga. Demo me password nahi hai.</p>
        <div className="userGrid">{users.map(u => <button key={u.id} onClick={() => loginAs(u.id)}><b>{u.name}</b><span>{u.role}</span><small>{u.email}</small></button>)}</div>
      </div>
    </section>
  </div>
}
