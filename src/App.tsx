import "../src/styles/index.css";
import Footer from "./components/layout/footer";
import Nav from "./components/layout/nav";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
