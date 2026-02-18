import { useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = [
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
const Footer = () => {
  const [active, setactive] = useState("home");
  return (
    <div className="w-full bg-orange-500 mt-5">
      <div className="px-6 md:px-16 pt-7 flex flex-col items-center md:flex-row gap-10 md:gap-44">
        <div className="flex flex-col gap-6 ">
          <p className="text-2xl font-medium text-white">Quick Links</p>
          <div className="flex flex-col gap-1 items-center md:items-start">
            {footerLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={`/${link.href}`}
                  onClick={() => setactive(link.href)}
                  className={`text-lg  cursor-pointer 
                ${
                  active === link.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-white hover:text-blue-500"
                }
                `}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <p className="text-2xl font-medium text-white">Other Links</p>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-white">Facebook</p>
            <p className="text-lg text-white">WhatsApp</p>
            <p className="text-lg text-white">Instagram</p>
            <p className="text-lg text-white">YouTube</p>
            <p className="text-lg text-white">Telegram</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col relative  sm:flex-row items-start sm:items-center gap-2 md:mt-12 overflow-hidden">
          <input
            type="text"
            placeholder="Enter email"
            className="border max-w-96 p-6 border-gray-300 outline-none h-10 w-full sm:w-72 rounded-full "
          />
          <button className="h-10 px-4 absolute right-1 top-1 bg-orange-500 rounded-full hover:bg-orange-600 ">
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
