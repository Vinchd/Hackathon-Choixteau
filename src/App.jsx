import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer transition={Flip} />
    </Router>
  );
}

export default App;
