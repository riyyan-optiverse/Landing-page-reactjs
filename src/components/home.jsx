import { InputField } from "./home-page-components/inputField";
import MainCard from "./home-page-components/mainCard";
import { ProductCards } from "./home-page-components/productCards";

export const Home = () => {
  return (
    <div className="bg-sky-50 w-11/12 max-w-6xl mx-auto  shadow-xl ">
      <MainCard />
      <div className="flex justify-center items-center">
        <div className="w-[70%] h-10  bg-yellow-400  pl-10 flex items-center">
          <p className="text-lg font-semibold text-white">Pricing</p>
        </div>
        <div className="w-[30%] h-10 bg-sky-100 "></div>
      </div>
      <div className="mt-4 flex justify-end pr-10">
        <InputField />
      </div>
      <ProductCards />
      <div className="px-10 ">
        <p className="text-sm font-normal text-gray-600 ">
          "All our mineral water bottles are carefully cleaned and tested to
          ensure the highest quality. We offer flexible delivery plans, simple
          orders and environmentally friendly, reusable bottles. Enjoy properly
          distributed fresh water at our door. "
        </p>
      </div>
    </div>
  );
};
