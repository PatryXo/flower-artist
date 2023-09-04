import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/aktualnosci" element={<Home />} />
          <Route path="/o-nas" element={<Home />} />
          <Route path="*" element={<Navigate to="" replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
