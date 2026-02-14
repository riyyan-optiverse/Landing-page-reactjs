import { cardData } from "./static-data";

export const ProductCards = () => {
  return (
    <div className=" p-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-3 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-40 h-auto bg-white shadow-md rounded-sm p-4 flex flex-col cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={card.img}
            alt="water bottle"
            className="w-full h-full object-cover bg-green-200"
          />
          <p className="font-medium text-xs mt-2">{card.title}</p>
          <p className="font-medium text-xs">{card.botLable}</p>
          <p className="font-medium text-xs mt-1 text-gray-500">{card.price}</p>
          <button className="w-[100%] h-8 bg-orange-500 rounded-sm hover:bg-orange-600  mt-3 flex justify-center items-center">
            <span className="font-medium  text-xs text-white ">Order Now</span>
          </button>
        </div>
      ))}
    </div>
  );
};
