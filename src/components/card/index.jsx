import { cardsDaa } from "../../static/static-data";
import { CardContent } from "../baseCard/card-content";
import { BaseButton } from "../button/base-button";
import { ImageContent } from "../image/image-content";
import { DivData } from "../../static/static-dataCard";
export const Card = () => {
  return (
    <section className="bg-white w-9/12 mx-auto mt-0 p-0  rounded-xl shadow-xl">
     <div className="h-auto flex flex-wrap justify-center gap-4 mt-2 overflow-hidden">

        {cardsDaa.map((card, index) => (
          <div
            key={index}
           className="bg-slate-200 w-60 h-80  flex flex-col gap-3 overflow-hidden shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-300"

          >
            <ImageContent image={card.image} title={card.title} />
            <div className="flex flex-col gap-1 p-3">
              <CardContent card={card} />
              <div className="flex justify-center mt-1">
                <BaseButton buttonText={card.buttonText} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-100 w-full h-full mt-5 p-6  ">
        <div className="flex justify-center items-center  flex-col mb-4">
          <h3 className="mt-3">Here's How It Works</h3>
          <h1 className="text-xl font-semibold">
            Get Started With Four Easy Steps
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {DivData.map((step, index) =>(
          <div 
          key={index}
          className="bg-white p-9 rounded-md shadow-md flex flex-col items-center text-center gap-2  hover:shadow-2xl transition-shadow duration-300">
            <img src={step.image} alt={step.title} className="h-10 w-auto" />
          <p className="text-sm font-semibold ">{step.title}</p>
          <p className="text-xs">{step.desc}</p>
        </div>

        ))}
        </div>
      </div>
    </section>
  );
};
