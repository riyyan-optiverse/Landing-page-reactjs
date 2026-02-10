import { Link } from "react-router-dom";
// import { logoIcon } from "../../../../landing-page/src/assets/pngs";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-50 w-12/12 h-20 flex  justify-start items-center ">
        <div className="flex gap-40">
          <div className="flex gap-56">
            <div>
              <img
                src="src/assets/react.svg"
                alt="logo"
                className="h-12 w-auto pl-10"
              />
            </div>
            <div className="flex  gap-6 justify-center items-center">
              <Link
                to="/home"
                className="font-semibold text-base cursor-pointer hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/property-listing"
                className="font-semibold text-base cursor-pointer hover:text-blue-500"
              >
                Property Listing
              </Link>
              <Link
                to="/post-property"
                className="p-2 bg-orange-500 rounded-sm cursor-pointer hover:bg-orange-600"
              >
                <span className="font-semibold text-base text-white">
                  Post Property
                </span>
              </Link>
              <Link
                to="/blog"
                className="font-semibold text-base cursor-pointer hover:text-blue-500"
              >
                Blog
              </Link>
              <Link
                to="/contact-us"
                className="font-semibold text-base cursor-pointer hover:text-blue-500"
              >
                Contact us
              </Link>
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
};

export default Navbar;
