import "./App.css";
import HeroUnit from "./Components/HeroUnit";
import Navbar from "./Components/Navbar";
import WelcomeNote from "./Components/WelcomeNote";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroUnit />
      <div className="container">
        <WelcomeNote />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
