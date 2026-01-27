import { useState } from "react";
import { ProductCard } from "./productCard/product-card";
import { StepCard } from "./stepsCard/step-card";

export const Card = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    // first time in execution count = 0, after increment count = 1
    //  second time in execution count = 1, after increment count = 2
    //  third time in execution count = 2, after increment count = 3
  };

  return (
    <section className="bg-white w-9/12 mx-auto mt-0 p-0  rounded-xl shadow-xl mb-20">
      <ProductCard />
      <StepCard />

      <div className="p-5">
        <h2 className="text-center text-xl font-bold mt-4">Product Count</h2>
        <span className="mr-5 text-base font-medium text-blue-400">
          Count Value: {count}
        </span>

        <button
          onClick={handleIncrement}
          className="bg-orange-300 p-4 rounded-md text-white"
        >
          Increment Count
        </button>
      </div>
    </section>
  );
};
