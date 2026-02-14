import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-orange-500 mt-5">
      <div className="px-6 md:px-16 pt-7 flex flex-col items-center md:flex-row gap-10 md:gap-44">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-medium text-white">Quick Links</p>
          <div className="flex flex-col gap-1">
            <Link
              to="/home"
              className="text-lg text-white cursor-pointer hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/property-listing"
              className="text-lg text-white cursor-pointer hover:text-blue-500"
            >
              Property listing
            </Link>
            <Link
              to="/post-property"
              className="text-lg text-white cursor-pointer hover:text-blue-500"
            >
              Post property
            </Link>
            <Link
              to="/blog"
              className="text-lg text-white cursor-pointer hover:text-blue-500"
            >
              Blogs
            </Link>
            <Link
              to="/contact-us"
              className="text-lg text-white  cursor-pointer hover:text-blue-500"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-medium text-white">Other Links</p>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-white">Facebook</p>
            <p className="text-lg text-white">WhatsApp</p>
            <p className="text-lg text-white">Instagram</p>
            <p className="text-lg text-white">YouTube</p>
            <p className="text-lg text-white">Telegram</p>
          </div>
        </div>
        <div className="flex flex-col relative  sm:flex-row items-start sm:items-center gap-2 md:mt-12">
          <input
            type="text"
            placeholder="Enter email"
            className="border px-8 py-6 border-gray-300 outline-none h-10 w-full sm:w-72 rounded-full"
          />
          <button className="h-10 px-5 absolute right-1 top-1 bg-orange-500 rounded-full hover:bg-orange-600">
            <span className="font-semibold text-white">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="px-6 md:px-28">
        <hr className="border-t border-gray-300 mt-8 mb-3" />
        <div className="flex flex-col md:flex-row gap-3 md:gap-24 text-center md:text-left">
          <p className="text-white font-medium text-lg">
            DHA, Phase 1, Islamabad Pakistan
          </p>
          <p className="text-white font-medium text-lg">
            © All reserved copyright 2026
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
