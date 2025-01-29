import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
      <BrowserRouter>
        <Navbar />
        
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
