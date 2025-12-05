import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth.tsx'
import Navbar from './components/Navbar.tsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}
