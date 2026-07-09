import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/Tasks';
import { Businesses, Departments, Employees, Attendance, TaskLibrary, Reports, Calendar, Settings, Generator } from './pages/AdminTables';
import './styles/app.css';

function AppShell(){
  const { currentUser } = useAuth();
  const [page,setPage] = useState('Dashboard');
  if(!currentUser) return <Login/>;
  const view = {
    Dashboard:<Dashboard/>,
    Businesses:<Businesses/>,
    Departments:<Departments/>,
    Employees:<Employees/>,
    'Task Library':<TaskLibrary/>,
    Tasks:<TasksPage title="All Tasks"/>,
    'My Tasks':<TasksPage title="My Tasks"/>,
    'Team Tasks':<TasksPage title="Team Tasks"/>,
    'Task Generator':<Generator/>,
    Attendance:<Attendance/>,
    Calendar:<Calendar/>,
    Reports:<Reports/>,
    Settings:<Settings/>
  }[page] || <Dashboard/>;
  return <Layout page={page} setPage={setPage}>{view}</Layout>;
}

createRoot(document.getElementById('root')).render(<AuthProvider><AppShell/></AuthProvider>);
