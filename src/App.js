import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*http://localhost:3000/ */}
          <Route path="/20-myreact-portfolio">
            <Route index element={<Navigate to="About" />} />
            {/*http://localhost:3000/About */}
            <Route path="About" element={<About />} />
            {/*http://localhost:3000/Portfolio */}
            <Route path="Portfolio" element={<Portfolio />} />

            {/*http://localhost:3000/Contact */}
            <Route path="Contact" element={<Contact />} />
            {/*http://localhost:3000/Resume */}
            <Route path="Resume" element={<Resume />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
