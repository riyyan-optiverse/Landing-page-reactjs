import React, { Component } from "react";
import Navbar from "../navbar/navbar-content";
import DropDown from "../Drop-down/dropDownContent";
import CardContent from "./cardContent";
import InputFields from "../input-fields/inputField";
import FormButton from "../button/formButton";
import ListingDisclaimer from "./postingDisclaimer";
import Footer from "../footer/footerContent";

class Card extends Component {
  render() {
    return (
      <div className="bg-white w-11/12 h-auto max-w-6xl mx-auto  shadow-xl ">
        <Navbar />
        <CardContent />
        <hr className="border-t border-gray-300 mt-10 mb-6" />
        <div className="px-16">
          <p className="font-semibold text-2xl">Enter your post detail</p>
          <DropDown />
          <p className="font-semibold text-2xl mt-5">
            Enter your personal detail
          </p>
          <InputFields />
          <div className="mt-4">
            <FormButton />
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-3 mb-2" />
        <div className="px-16">
          <ListingDisclaimer />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Card;
