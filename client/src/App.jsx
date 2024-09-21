import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Apple from "./phones/Apple";
import Huawie from "./phones/Huawie";
import Infinix from "./phones/Infinix";
import Motorola from "./phones/Motorola";
import Samsung from "./phones/Samsung";
import Techno from "./phones/Techno";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/phones/apple" element={<Apple />} />
          <Route path="/phones/huawie" element={<Huawie />} />
          <Route path="/phones/infinix" element={<Infinix />} />
          <Route path="/phones/motorola" element={<Motorola />} />
          <Route path="/phones/samsung" element={<Samsung />} />
          <Route path="/phones/techno" element={<Techno />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
