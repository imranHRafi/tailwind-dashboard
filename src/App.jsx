import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payments from "./pages/Payments";
import Listing from "./pages/Listing";
import Statistics from "./pages/Statistics";
import Home from "./pages/Home";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Settings from "./pages/Settings";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <div className=' flex bg-zinc-50 lg:container'>
        <Sidebar />
        <div className='ml-[88px] flex flex-1 flex-col'>
          <Navbar />
          <main className='ml-2 h-screen'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/listing' element={<Listing />} />
              <Route path='/statistics' element={<Statistics />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/*' element={<Notfound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
