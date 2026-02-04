import React, { Component } from "react";
import Navbar from "./components/navbar/navbar-content";
import DropDown from "./components/dropDown/dropDownContent";
import CardContent from "./components/card/cardContent";

class App extends Component {
  render() {
    return (
      <section>
        <div className="bg-white w-11/12 h-auto mx-auto  shadow-xl ">
          <Navbar/>
         <CardContent/>

          <div className="ml-16 pr-16">
            <p className="font-semibold text-2xl">Enter your post detail</p>
            <DropDown/>
            
          </div>
        </div>
      </section>
    );
  }
}
export default App;
