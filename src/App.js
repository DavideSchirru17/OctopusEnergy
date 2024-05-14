import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import EnergyUsage from "./PageRoute/EnergyUsage/EnergyUsage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./PageRoute/HomePage/HomePage";
import Leaderboard from "./PageRoute/LeaderBoard/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        {/* <Header /> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
