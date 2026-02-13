import { InputFieldData } from "./staticData";

const InputFiel = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {InputFieldData.map((field, index) => (
          <div key={index} className="flex flex-col gap-1 justify-center ">
            <label className="text-lg font-semibold">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-[95%] h-10 border outline-none border-b-gray-300 rounded-sm px-5"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-1 ">
        <label className="text-lg font-semibold">Message:</label>
        <textarea
          rows="5"
          className=" w-[98%] border outline-none border-gray-300 rounded-md px-3 "
          placeholder="Message"
        />
      </div>
    </>
  );
};

export default InputFiel;
