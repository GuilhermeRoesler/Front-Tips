import './App.css';
import { useBlurLoad } from './hooks/useBlurLoad';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import LoginPage from './pages/LoginPage'

function App() {
  useBlurLoad()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
