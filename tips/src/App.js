import './App.css';
import { useBlurLoad } from './hooks/useBlurLoad';
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import DarkmodeSwitch from './pages/DarkmodeSwitch';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Snowfall from './pages/Snowfall';

function App() {
  useBlurLoad()

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/darkmode-switch' element={<DarkmodeSwitch />} />
        <Route path='/form1' element={<Form1 />} />
        <Route path='/form2' element={<Form2 />} />
        <Route path='/snowfall' element={<Snowfall />} />
      </Routes>
    </Layout>
  );
}

export default App;
