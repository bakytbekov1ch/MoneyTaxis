import React from "react";
import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Input from "./shared/input/Input";
import Success from "./shared/success/Success";
import Motion from "./shared/motion/Motion";

function App() {
  return (
    <div className="container app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/input" element={<Input />} />
          <Route path="/success" element={<Success />} />
          <Route path="/motion" element={<Motion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
