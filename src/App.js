import "./App.css";
import HeroUnit from "./Components/HeroUnit";
import Navbar from "./Components/Navbar";
import WelcomeNote from "./Components/WelcomeNote";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <HeroUnit />
      <div className="container">
        <WelcomeNote />
        <Projects />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
