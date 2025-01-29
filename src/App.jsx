// // src/App.jsx

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import UsersList from './pages/UserList';
import './index.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen"> {/* Tailwind for background */}
        <Header /> {/* Common Header */}
        <div className="container mx-auto p-4"> {/* Tailwind for centering content */}
          <Routes>
            <Route path="/" element={<UsersList />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;