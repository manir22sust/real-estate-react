import "./App.css";
import { Featured } from "./components/featured/Featured";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
