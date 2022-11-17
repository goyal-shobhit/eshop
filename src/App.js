import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
