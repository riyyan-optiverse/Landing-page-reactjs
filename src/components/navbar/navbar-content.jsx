import { useState } from "react";
import { href, Link } from "react-router-dom";
// import { logoIcon } from "../../../../landing-page/src/assets/pngs";
const navLinks = [
  {
    text: "Home",
    href: "home",
  },
  {
    text: "Property-listing",
    href: "property-listing",
  },
  {
    text: "Post-Propert",
    href: "post-property",
  },
  {
    text: "Blog",
    href: "blog",
  },
  {
    text: "Contact us",
    href: "contact-us",
  },
];
const Navbar = () => {
  const [count, setcount] = useState();
  return (
    <>
      <div className="bg-slate-50 w-[100%] md:h-20 flex  justify-start items-center ">
        <div className="flex w-full items-center justify-between p-2 md:px-12 flex-wrap">
          <div>
            <img
              src="src/assets/react.svg"
              alt="logo"
              className="h-12 w-auto "
            />
          </div>
          <div className="hidden md:flex gap-6 justify-start items-center">
           
           {navLinks.map((link, index) => {
            return(
               <Link
              to={`/${link.href}`}
              className="font-semibold text-base cursor-pointer hover:text-blue-500"
            >
              {link.text}
            </Link>
            )
           })}
          </div>

          <div className="flex  justify-center items-center gap-3">
            <Link
              to="/login"
              className="p-2 bg-slate-200 rounded-sm cursor-pointer hover:bg-slate-300"
            >
              <span className="font-semibold text-base ">Login</span>
            </Link>
            <Link
              to="/sign-up"
              className="p-2 bg-orange-500 rounded-sm cursor-pointer hover:bg-orange-600"
            >
              <span className="font-semibold text-base text-white ">
                SignUp
              </span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 " />
    </>
  );
};

export default Navbar;
