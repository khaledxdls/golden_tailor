import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/services" element={<Services />} />{" "}
          <Route path="*" element={<NotFound />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
