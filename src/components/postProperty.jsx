import { useState } from "react";

export const PostProperty = () => {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      return;
    } else setcounter(counter + 1);
  };
  const removeValue = () => {
    if (counter <= 0) {
      return;
    } else setcounter(counter - 1);
  };
  return (
    <div className="max-w-lg h-80 bg-gray-100 p-2 shadow-md rounded-md mx-auto mt-2">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="font-semibold text-lg">Value: {counter}</p>
        <button
          onClick={addValue}
           disabled={counter >= 20}
          className="w-36 h-14 bg-orange-500 rounded-md hover:bg-orange-600"
        >
          <span className="font-semibold text-lg text-white">Add Value</span>
        </button>
        <button
          onClick={removeValue}
           disabled={counter <= 0}
          className="w-36 h-14 bg-orange-500 rounded-md hover:bg-orange-600"
        >
          <span className="font-semibold text-lg text-white">Remove Value</span>
        </button>
      </div>
    </div>
  );
};
