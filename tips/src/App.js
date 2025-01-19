import './App.css';
import { useBlurLoad } from './hooks/useBlurLoad';
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import DarkmodeSwitch from './pages/DarkmodeSwitch';

function App() {
  useBlurLoad()

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/darkmode-switch' element={<DarkmodeSwitch />} />
        <Route path='/teste-header' />
      </Routes>
    </Layout>
  );
}

export default App;
