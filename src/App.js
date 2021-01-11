import { Router } from "@reach/router";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Locations from "./pages/Locations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Locations path="/locations" />
        <WebDesign path="/web-design" />
        <AppDesign path="/app-design" />
        <GraphicDesign path="/graphic-design" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
