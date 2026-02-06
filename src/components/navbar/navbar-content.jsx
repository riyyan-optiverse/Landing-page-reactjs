import React, { Component } from "react";
import { logoIcon } from "../../../../landing-page/src/assets/pngs";
class Navbar extends Component {
  render() {
    return (
      <>
        <div className="bg-slate-50 w-12/12 h-20 flex  justify-start items-center ">
          <div className="flex gap-40">
            <div className="flex gap-56">
              <div>
                <img src="src/assets/react.svg" alt="logo" className="h-12 w-auto pl-10" />
              </div>
              <div className="flex  gap-6 justify-center items-center">
                <span className="font-semibold text-base cursor-pointer">Home</span>
                <span className="font-semibold text-base cursor-pointer">
                  Property Listing
                </span>
                <button className="p-2 bg-orange-500 rounded-sm cursor-pointer hover:bg-orange-600">
                  <span className="font-semibold text-base text-white">
                    Post Property
                  </span>
                </button>
                <span className="font-semibold text-base cursor-pointer">Blog</span>
                <span className="font-semibold text-base cursor-pointer">Contact us</span>
              </div>
            </div>
            <div className="flex  justify-center items-center gap-3">
              <button className="p-2 bg-slate-200 rounded-sm cursor-pointer hover:bg-slate-300">
                <span className="font-semibold text-base ">Login</span>
              </button>
              <button className="p-2 bg-orange-500 rounded-sm cursor-pointer hover:bg-orange-600">
                <span className="font-semibold text-base text-white ">
                  SignUp
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 " />
      </>
    );
  }
}

export default Navbar;
