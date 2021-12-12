import "./App.css";
import { BrowserRouter as Router, } from "react-router-dom";
import { Routes, Route } from "react-router";

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<SigninPage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
