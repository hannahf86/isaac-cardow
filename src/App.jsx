// COMPONENTS
import Nav from "./Components/Nav";

// SCENES
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Calendar from "./Scenes/Calendar";
import Contact from "./Scenes/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <News />
      <Calendar />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
