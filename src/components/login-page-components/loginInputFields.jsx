export const LoginInputField = () => {
    return(
        <div className="flex flex-col gap-4 p-2 md:px-9 mt-7 ">
        <div className="flex flex-col gap-1 justify-center ">
            <label className="text-lg font-semibold">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center ">
            <label className="text-lg font-semibold">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[97%]  h-10 border outline-none rounded-md px-5 shadow-md"
            />
          </div>

          </div>
    );
}