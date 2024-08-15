import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Mascotas from "../components/mascotas";
import Citas from "../components/citas";
import Historial from "../components/historial";
import Recordatorio from "../components/recordatorio";
import SobreNosotros from "../components/aboutUs";
import Login from "../components/login";
import Register from "../components/register";

const Pages = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/about" element={<SobreNosotros />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/recordatorio" element={<Recordatorio />} />
          <Route path="/about" element={<SobreNosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default Pages;
