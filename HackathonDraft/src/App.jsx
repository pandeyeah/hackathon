import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
      <BrowserRouter>
          <Navbar />
          <HeroSection/>
          {/* Add your footer here */}
        </BrowserRouter>
      
    </div>
  );
}