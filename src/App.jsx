import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllProjects from './pages/AllProjects.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  )
}

export default App