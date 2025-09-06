import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClassDashboard from '../components/class-dashboard'
import MyVideos from '../components/my-videos'
import Schedule from '../components/schedule'
import Chatbox from '../components/chatbox'

// Placeholder component for Finances
const Finances = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Finances</h1>
    <p>Finances page coming soon...</p>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClassDashboard />} />
        <Route path="/my-videos" element={<MyVideos />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chatbox" element={<Chatbox />} />
        <Route path="/finances" element={<Finances />} />
      </Routes>
    </Router>
  )
}

export default App
