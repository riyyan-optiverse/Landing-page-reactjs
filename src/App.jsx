import { BaseButton } from "./components/button/base-button";
import { CardContent } from "./components/card/card-content";
import { ImageContent } from "./components/image/image-content";

function App() {
  const cards = [
    {
      image: "Office image.jpg",
      title: "Godox TT685 Blitzgerät",
      bidLabel: "Starting Bid",
      price: "CHF 120.-",
      bids: "(0 Bid)",
      condition: "Good As New",
      buttonText: "Wed, 18 Feb, 01:18",
    },
    {
      image: "Office image.jpg",
      title: "Neewer Universal Shoulder Rig ",
      bidLabel: "Starting Bid",
      price: "CHF 60.-",
      bids: "(0 Bid)",
      condition: "Good As New",
      buttonText: "Wed, 18 Feb, 01:18",
    },
  ];
  return (
    <section>
      <section className="min-h-screen flex justify-center gap-4 mt-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-60 bg-slate-200 h-80 flex flex-col   gap-2 shadow-lg rounded-lg">
             <ImageContent image={card.image} title={card.title} />
            <div className="flex flex-col gap-1 p-3">
             <CardContent card={card}/>
              <div className="flex justify-center mt-1">
             <BaseButton buttonText={card.buttonText}/>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default App;
