// COMPONENTS
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// SCENES
import Home from "./Scenes/Home";
import About from "./Scenes/About";
import NewsGrid from "./Scenes/NewsGrid";
import Contact from "./Scenes/Contact";
import Music from "./Scenes/Music";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Music />
      <About />
      <NewsGrid />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
