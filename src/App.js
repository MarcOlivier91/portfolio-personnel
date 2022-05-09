import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projets from "./components/Projets"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
