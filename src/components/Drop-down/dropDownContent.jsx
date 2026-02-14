const DropDown = () => {
   return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-4  ">
          <div className="flex flex-col gap-2 justify-center ">
            <label className="text-lg font-semibold">Sale </label>
            <select className="max-w-md h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 justify-center ">
            <label className="text-lg font-semibold">Property Type</label>
            <select className="max-w-2xl h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-4">
          <div className="flex flex-col gap-2 justify-center ">
            <label className="text-lg font-semibold">City</label>
            <select className="max-w-md h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Islamabad</option>
              <option value="rent">Lahore</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 justify-center ">
            <label className="text-lg font-semibold">Area</label>
            <select className="max-w-2xl h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">DHA,phase 1 street no 5 block</option>
              <option value="rent">Lahore,phase 1 street no 5 block</option>
            </select>
          </div>

          
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold">Title</label>
            <input
              type="text"
              placeholder="House Sale"
              className="max-w-80 h-10 border outline-none border-gray-300 rounded-md px-5"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-lg font-semibold">Area</label>

            <select className="max-w-96 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">DHA, phase 1 street no 5 block o </option>
              <option value="apartment">
                Layyah, phase 57 street no 11 block g
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-lg font-semibold">Exact Location</label>

            <select className="max-w-80 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Islamabad</option>
              <option value="rent">Lahore</option>
            </select>
          </div>
        </div>
      </div>
    );
}
 export default DropDown;
