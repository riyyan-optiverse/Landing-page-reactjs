import { productCardData } from "../../../static/static-data";
import { CardContent } from "../../baseCard/card-content";
import { BaseButton } from "../../button/base-button";
import { ImageContent } from "../../image/image-content";

export const ProductCard = () => {
  return (
    <div className="h-auto flex flex-wrap justify-center gap-4 mt-4 overflow-hidden">
      {productCardData.map((card, index) => (
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
  );
};
