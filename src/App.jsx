import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from './components/login';
function App() {


  return (
    <>
    <div>
      <h1>Hello this is my first reactJs app</h1>
    </div>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<login/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App