import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import "./App.css";
import { HeroSection } from "./components/sections/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/about" element={<About />} />
          <Route path="/allocation" element={<Allocation />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </main>
    </Router>
  );
}

// Placeholder components - replace these with your actual components
const Home = () => (
  <>
    <HeroSection />
    {/* We'll add other sections here */}
  </>
);
const HowToBuy = () => <h1>How to Buy Page</h1>;
const About = () => <h1>About Page</h1>;
const Allocation = () => <h1>Allocation Page</h1>;
const FAQs = () => <h1>FAQs Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Buy = () => <h1>Buy Page</h1>;

export default App;
