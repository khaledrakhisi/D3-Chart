import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import AuthProvider from "./context/user-context";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";

import "./scss/App.scss";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/settings" element={<LandingPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
