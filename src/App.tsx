import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full w-full">
      <Navbar />
      <div className="flex flex-1 justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
