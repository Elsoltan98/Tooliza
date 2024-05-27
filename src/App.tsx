import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./screens/Blog";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
