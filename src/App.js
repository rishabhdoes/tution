import Home from "./Home";
import Notes from "./Notes";
import Video from "./Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tests from "./Tests";
import Solutions from "./Solutions";
import Gallery from "./Gallery";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/test" element={<Tests />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
