import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Students from './components/Students'
import Gallery from './components/Gallery'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdmissionPage from './components/Admission'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Students />
      <Gallery />
      <Activities />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App