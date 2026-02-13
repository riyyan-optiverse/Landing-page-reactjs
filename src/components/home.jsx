import { InputField } from "./home-page-components/inputField";
import { Lable } from "./home-page-components/lable";
import MainCard from "./home-page-components/mainCard";
import { ProductCards } from "./home-page-components/productCards";

export const Home = () => {
  return (
    <div className="bg-sky-50 w-11/12 max-w-6xl mx-auto  shadow-xl ">
      <MainCard />
      <Lable />
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
