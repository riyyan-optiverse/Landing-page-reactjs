import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const signupHandel = () => {
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("SignUp Successful")
      navigate("/login");
    } else if (username == false && password == false) {
      alert("Please Enter Username and Password");
    } else if (username == false) {
      alert("Please Enter username");
    } else {
      alert("Please Enter Password");
    }
  };

  return (
    <div className="max-w-lg  bg-gray-100 p-2 shadow-md rounded-md mx-auto hover:shadow-2xl transition-shadow duration-300 md:mt-5">
      <div className="flex justify-center mt-2">
        <p className="text-3xl font-semibold ">Sign Up</p>
      </div>
      <div className="flex flex-col gap-4 p-2 md:px-9 mt-7 ">
        <div className="flex flex-col gap-1 justify-center ">
          <label className="text-lg font-semibold">Username or Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter your username or email"
            className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center ">
          <label className="text-lg font-semibold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
            className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
          />
        </div>
      </div>

      <div className="p-2 md:px-9">
        <button
          onClick={signupHandel}
          className="w-[100%] p-2 bg-blue-600 rounded-sm hover:bg-blue-700 "
        >
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
