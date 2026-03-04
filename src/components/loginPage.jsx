import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  const [usernameL, setusernameL] = useState("");
  const [passwordL, setpasswordL] = useState("");
  const navigate = useNavigate();

  const loginHandel = () => {
    const getUsername = localStorage.getItem("username");
    const getPassword = localStorage.getItem("password");
    if (getUsername == usernameL && getPassword == passwordL) {
      alert("Login Succuessful")
      navigate("/dash-board");
    } else if (getUsername != usernameL && getPassword != passwordL) {
      alert("Incorrect Password and Username");
    } else if (getUsername != usernameL) {
      alert("Incorrect Username");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="max-w-lg  bg-gray-100 p-2 shadow-md rounded-md mx-auto hover:shadow-2xl transition-shadow duration-300 md:mt-5">
      <div className="flex justify-center mt-2">
        <p className="text-3xl font-semibold ">Login</p>
      </div>
      <div className="flex flex-col gap-4 p-2 md:px-9 mt-7 ">
        <div className="flex flex-col gap-1 justify-center ">
          <label className="text-lg font-semibold">Username:</label>
          <input
            type="text"
            value={usernameL}
            onChange={(e) => setusernameL(e.target.value)}
            placeholder="Enter your username"
            className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center ">
          <label className="text-lg font-semibold">Password:</label>
          <input
            type="password"
            value={passwordL}
            onChange={(e) => setpasswordL(e.target.value)}
            placeholder="Enter your password"
            className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
          />
        </div>
      </div>

      <div className="p-2 md:px-9">
        <button
          onClick={loginHandel}
          className="w-[100%] p-2 bg-blue-600 rounded-sm hover:bg-blue-700 "
        >
          <span className="font-semibold text-lg text-white">Login</span>
        </button>
      </div>
    </div>
  );
};
