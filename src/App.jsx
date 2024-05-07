// COMPONENTS
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// SCENES
import Home from "./Scenes/Home";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Contact from "./Scenes/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
