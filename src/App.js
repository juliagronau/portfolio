import "./App.css";
import HeroUnit from "./Components/HeroUnit";
import Navbar from "./Components/Navbar";
import WelcomeNote from "./Components/WelcomeNote";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroUnit />
      <WelcomeNote />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
