import React, { Component } from "react";
import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-listing" element={<Home />} />
        <Route path="/cards" element={<Card />} />
      </Routes>
    );
  }
}
export default App;
