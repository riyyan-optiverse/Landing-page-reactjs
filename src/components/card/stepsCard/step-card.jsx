import { stepCardData } from "../../../static/static-data";

export const StepCard = () => {
  return (
    <div className="bg-blue-100 w-full h-full mt-5 p-6  ">
      <div className="flex justify-center items-center  flex-col mb-4">
        <h3 className="mt-3">Here's How It Works</h3>
        <h1 className="text-xl font-semibold">
          Get Started With Four Easy Steps
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {stepCardData.map((step, index) => (
          <div
            key={index}
            className="bg-white p-9 rounded-md shadow-md flex flex-col items-center text-center gap-2  hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={step.image} alt={step.title} className="h-10 w-auto" />
            <p className="text-sm font-semibold ">{step.title}</p>
            <p className="text-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
