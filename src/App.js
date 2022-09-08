import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Teacher from "./components/Teacher";
import Research from "./components/Research";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/research" element={<Research />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
