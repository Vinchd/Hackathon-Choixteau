import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import CastleDetails from "./pages/CastleDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-tertiary h-screen flex flex-col justify-between items-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/castledetails" element={<CastleDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
