import { useState } from 'react';
import DashboardLayout from './pages/dashboard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashboardLayout />
      {/* <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div> */}
    </>
  );
}

export default App;
