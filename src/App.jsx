import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
