import { useState } from "react";
import { buttonData } from "./components/staticData";

function App() {
  const [color, setcolor] = useState("");
  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 px-4 py-3 rounded-sm hover:shadow-2xl duration-300">
          {buttonData.map((data, index) => {
            return (
              <button
                key={index}
                onClick={() => setcolor(data.functColor)}
                className="outline-none px-5 py-2 rounded-sm text-white shadow-lg hover:shadow-2xl duration-300"
                style={{ backgroundColor: data.stylColor }}
              >
                {data.buttonName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
