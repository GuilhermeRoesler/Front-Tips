import './App.css'
import { useBlurLoad } from './hooks/useBlurLoad';
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Grid1 from './pages/Grid1';
import Grid2 from './pages/Grid2';
import DarkmodeSwitch from './pages/DarkmodeSwitch';
import Snowfall from './pages/Snowfall';
import Plans from './pages/Plans';
import Tips from './pages/Tips'
import ObsidianStatistics from './components/ObsidianStatistics';

function App() {
  useBlurLoad()

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/form1' element={<Form1 />} />
        <Route path='/form2' element={<Form2 />} />
        <Route path='/grid1' element={<Grid1 />} />
        <Route path='/grid2' element={<Grid2 />} />
        <Route path='/darkmode-switch' element={<DarkmodeSwitch />} />
        <Route path='/snowfall' element={<Snowfall />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/tips' element={<Tips />} />
        <Route path='/obsidian-statistics' element={<ObsidianStatistics />} />
      </Routes>
    </Layout>
  )
}

export default App
