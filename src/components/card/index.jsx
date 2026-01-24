import { cardsDaa } from "../../static/static-data";
import { CardContent } from "../baseCard/card-content";
import { BaseButton } from "../button/base-button";
import { ImageContent } from "../image/image-content";

export const Card = () => {
  return (
    <section className="bg-white w-10/12 mx-auto mt-0 p-0  rounded-xl shadow-xl">
      <div className="h-auto flex justify-center gap-4 mt-2">
        {cardsDaa.map((card, index) => (
          <div
            key={index}
            className="w-60 bg-slate-200 h-80 flex flex-col   gap-2 shadow-lg rounded-lg"
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
        <div className="bg-white w-96 p-6 py-auto rounded-md shadow-md flex flex-col items-center text-center gap-3">
          <div>
            <img src="src/assets/pngs/logo-1.jpg" alt="Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm font-semibold ">Upload Images</p>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            consequuntur mollitia.
          </p>
        </div>
      </div>
    </section>
  );
};
