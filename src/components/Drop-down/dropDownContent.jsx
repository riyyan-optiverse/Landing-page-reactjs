const DropDown = () => {
   return (
      <div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 mt-3">
            <label className="text-lg font-semibold">Sale ya Rent</label>
            <select className="w-96 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mt-3 flex-1">
            <label className="text-lg font-semibold">Property Type</label>
            <select className="w-full h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 mt-3">
            <label className="text-lg font-semibold">City</label>
            <select className="w-96 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="isl">Islamabad</option>
              <option value="lhe">Lahore</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mt-3 flex-1">
            <label className="text-lg font-semibold">Area</label>
            <select className="w-full h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="dha">DHA, phase 1 street no 5 block o</option>
              <option value="apartment">
                Layyah, phase 57 street no 11 block g
              </option>
            </select>
          </div>
        </div>
        <div className="mt-5 flex gap-5 ">
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold">Title</label>
            <input
              type="text"
              placeholder="House Sale"
              className="w-72 h-10 border outline-none border-gray-300 rounded-md px-5"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-lg font-semibold">Area</label>

            <select className="w-96 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">DHA, phase 1 street no 5 block o </option>
              <option value="apartment">
                Layyah, phase 57 street no 11 block g
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-lg font-semibold">Exact Location</label>

            <select className="w-80 h-10 px-4 border outline-none border-gray-300 rounded-md">
              <option value="sale">Islamabad</option>
              <option value="rent">Lahore</option>
            </select>
          </div>
        </div>
      </div>
    );
}
 export default DropDown;
