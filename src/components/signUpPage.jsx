import { Link } from "react-router-dom";
import { LoginInputField } from "./login-page-components/loginInputFields";

export const SignUpPage = () => {
  return (
    <div className="max-w-lg  bg-gray-100 p-2 shadow-md rounded-md mx-auto hover:shadow-2xl transition-shadow duration-300 md:mt-5">
      <div className="flex justify-center mt-2">
        <p className="text-3xl font-semibold ">Sign Up</p>
      </div>
      <LoginInputField />
      <div className="p-2 md:px-9 flex gap-1 items-center">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-base font-semibold"> Remember</span>
      </div>
      <div className="p-2 md:px-9">
        <button className="w-[100%] p-2 bg-blue-600 rounded-sm hover:bg-blue-700 ">
          <span className="font-semibold text-lg text-white">Sign up</span>
        </button>
      </div>
      <div className="mt-2 p-2 md:px-9 flex gap-1 justify-center">
        <span className="font-medium text-sm text-gray-600">
         Already have an account?
        </span>
        <Link
          to="/login"
          className="font-semibold text-sm text-blue-600 hover:text-blue-900"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
