import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router";
import Preloader from "./animations/Preloader/Preloader";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar/>
                <Home />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
