import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import EnergyUsage from "./PageRoute/EnergyUsage/EnergyUsage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./PageRoute/HomePage/HomePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Header /> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
