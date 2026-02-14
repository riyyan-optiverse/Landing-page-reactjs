import ReviewCardData, { CustReviewData } from "./staticData";

const ReviewCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {ReviewCardData.map((card, index) => (
        <div
          key={index}
          className="max-w-80 mx-auto bg-white shadow-lg p-3 rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{card.name}</span>
              <span className="text-xs text-gray-400">{card.month}</span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col gap-1">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm">{card.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewCard;

export const CustReviewCard = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {CustReviewData.map((card, index) => (
        <div
          key={index}
          className="max-w-80 mx-auto bg-white shadow-lg p-3 rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{card.name}</span>
              <span className="text-xs text-gray-400">{card.month}</span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col gap-1">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm">{card.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
