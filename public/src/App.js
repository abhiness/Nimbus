import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catering from "./pages/Catering";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
