import Payments from "./pages/Payments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payments' element={<Payments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
