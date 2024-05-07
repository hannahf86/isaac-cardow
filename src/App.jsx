// REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Layout from "./Layouts/Layout";

// SCENES
import Home from "./Scenes/Home";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Calendar from "./Scenes/Calendar";
import Contact from "./Scenes/Contact";
import NotFound from "./Scenes/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* PAGES */}
      <Route index element={<Home />} />
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
