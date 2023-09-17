import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/dashboard';
import TaskList from './components/task/task-list';
import LoginPage from './pages/login';
import SignUPPage from './pages/sign-up';
import Dashboard from './components/dashboard';
import TaskDetailPage from './components/task/task-detail-page';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUPPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
