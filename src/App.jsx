import { useState, useEffect } from 'react';

// COMPONENTS
import MobileNav from './Components/MobileNav'
import DesktopNav from './Components/DesktopNav'

// SCENES
import Landing from './Scenes/Landing'
import About from './Scenes/About';
import News from './Scenes/News';
import Calendar from './Scenes/Calendar';
import Contact from './Scenes/Contact';
import Footer from './Components/Footer';

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {width <= breakpoint ?
        <MobileNav /> : <DesktopNav />
      }
      <Landing />
      <About />
      <News />
      <Calendar />
      <Contact />
      <Footer />
    </>
  )
}

export default App
