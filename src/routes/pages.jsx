import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Contacto from "../components/contacto";

const Pages = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default Pages;
