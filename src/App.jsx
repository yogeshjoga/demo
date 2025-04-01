import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import H from './components/H';

function App() {

  return (
    <>
    <div>
      <h1>Hello this is my first reactJs app</h1>
    </div>
    <H/>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/h" element = {<H/>}/> 
      </Routes>
    </Router>





    </>
  )
}

export default App


