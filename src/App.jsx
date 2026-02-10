import React, { Component } from "react";
import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { PropertyListing } from "./components/propertyListing";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/property-listing" element={<PropertyListing/>} />
        <Route path="/cards" element={<Card />} />
      </Routes>
    );
  }
}
export default App;
