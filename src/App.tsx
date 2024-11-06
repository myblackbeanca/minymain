import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comedians from "./pages/Comedians";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comedians" element={<Comedians />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;