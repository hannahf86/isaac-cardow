// COMPONENTS
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// SCENES
import Home from "./Scenes/Home";
import About from "./Scenes/About";
import NewsGrid from "./Scenes/NewsGrid";
import Contact from "./Scenes/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <NewsGrid />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
