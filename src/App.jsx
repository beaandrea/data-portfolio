import Navbar from './components/Navbar'
import Hero from './components/Hero'
import "tailwindcss";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App