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
                <img src={logoIcon} alt="logo" className="h-14 w-auto ml-10" />
              </div>
              <div className="flex  gap-6 justify-center items-center">
                <span className="font-semibold text-base">Home</span>
                <span className="font-semibold text-base">
                  Property Listing
                </span>
                <div className="p-2 bg-orange-500 rounded-sm">
                  <span className="font-semibold text-base text-white">
                    Post Property
                  </span>
                </div>
                <span className="font-semibold text-base">Blog</span>
                <span className="font-semibold text-base">Contact us</span>
              </div>
            </div>
            <div className="flex  justify-center items-center gap-3">
              <div className="p-2 bg-slate-200 rounded-sm">
                <span className="font-semibold text-base ">Login</span>
              </div>
              <div className="p-2 bg-orange-500 rounded-sm">
                <span className="font-semibold text-base text-white ">
                  SignUp
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 " />

      </>
    );
  }
}

export default Navbar;