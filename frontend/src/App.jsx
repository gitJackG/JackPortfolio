import './App.css'
import Hero from './pages/Hero/Hero'
import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar/Navbar'
import Tech from './pages/Tech/Tech'
import Work from './pages/Work/Work'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import CV from './pages/CV/CV'
import Contact from './pages/Contact/Contact'
function App() {
  return (
    <ReactLenis root>
      <div className="app">
        <main>
          <Hero />
          <Work />
          <Education />
          <Projects />
          <Tech />
          <CV />
          <Contact />
        </main>
        <Navbar />
      </div>
    </ReactLenis>
  )
}

export default App
