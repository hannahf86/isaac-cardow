// REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Nav from "./Layouts/Nav";

// SCENES
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Calendar from "./Scenes/Calendar";
import Contact from "./Scenes/Contact";
import NotFound from "./Scenes/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      {/* PAGES */}
      <Route index element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contact" element={<Contact />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
