import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import "./scss/App.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
