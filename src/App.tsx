import Header from './components/common/Header'
import Footer from './components/common/Footer'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About' 
import Events from './pages/programs'
import Impact from './pages/Impact'
// import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Events />} />
        <Route path="/impact" element={<Impact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </div>
  )
}

export default App