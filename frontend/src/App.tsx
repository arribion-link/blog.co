
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/partials/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Navbar from './components/partials/Navbar'
import Blogs from './pages/Blogs'
import Services from './pages/Services'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
