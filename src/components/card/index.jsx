import React, { Component } from "react";
import Navbar from "../navbar/navbar-content";
import DropDown from "../Drop-down/dropDownContent";
import CardContent from "./cardContent";


class Card extends Component {
  render() {
    return (

        <div className="bg-white w-11/12 h-auto mx-auto  shadow-xl ">
          <Navbar />
          <CardContent />
           <hr className="border-t border-gray-300 mt-10 mb-6" />
          <div className="px-16">
            <p className="font-semibold text-2xl">Enter your post detail</p>
            <DropDown />
            <p className="font-semibold text-2xl mt-5">Enter your personal detail</p>
            <div className="mt-6 flex  gap-5 ">
            <div className="flex flex-col  gap-1">
                 <label className="text-lg font-semibold">Full Name</label>
                 <input type="text" placeholder="Full Name" className="w-96 h-10 border outline-none border-b-gray-300 rounded-md px-5"/>
            </div>
            <div className="flex flex-col gap-1">
                 <label className="text-lg font-semibold">Phone No</label>
                 <input type="text" placeholder="Phone No" className="w-80 h-10 border outline-none border-b-gray-300 rounded-md px-5"/>
            </div>
            <div className="flex flex-col gap-1">
                 <label className="text-lg font-semibold">Current Location</label>
                 <input type="text" placeholder="Current Location" className="w-72 h-10 border outline-none border-b-gray-300 rounded-md px-5"/>
            </div>
            </div>
            <div className="mt-3 flex  gap-5 ">
            <div className="flex flex-col  gap-1">
                 <label className="text-lg font-semibold">Your Email*</label>
                 <input type="text" placeholder="Your Emial" className="w-96 h-10 border outline-none border-b-gray-300 rounded-md px-5"/>
            </div>
            <div className="flex flex-col gap-1">
                 <label className="text-lg font-semibold">Your Cnic No*</label>
                 <input type="text" placeholder="Your cnic no" className="w-80 h-10 border outline-none border-b-gray-300 rounded-md px-5"/>
            </div>
            </div>

          </div>
        </div>
      
    );
  }
}
export default Card;
