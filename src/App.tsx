import React from "react";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import "./scss/App.scss";

function App() {
  return (
    <section className="app">
      <Header />
      <HomePage />
      <Footer />
    </section>
  );
}

export default App;
