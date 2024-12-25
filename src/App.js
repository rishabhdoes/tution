import Home from "./Home";
import Notes from "./Notes";
import Video from "./Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tests from "./Tests";
import Solutions from "./Solutions";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
