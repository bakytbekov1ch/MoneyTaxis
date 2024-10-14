import React from "react";
import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Input from "./shared/input/Input";
import Success from "./shared/success/Success";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input" element={<Input />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
