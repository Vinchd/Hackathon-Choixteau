import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-primary h-screen flex justify-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
        <ToastContainer transition={Flip} />
      </div>
    </Router>
  );
}

export default App;
