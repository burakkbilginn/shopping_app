import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";

const AppWrapper = () => {
  return (
      <App />
  )
}

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        {(

        // <Home />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/productpage" element={<Product />} />
          </Routes>
        )}
      </Router>
    </div>

    // <News/>
  );
};

export default AppWrapper;