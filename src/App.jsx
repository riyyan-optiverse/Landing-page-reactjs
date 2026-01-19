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
      title: "Godox TT685 Blitzgerät",
      bidLabel: "Starting Bid",
      price: "CHF 120.-",
      bids: "(0 Bid)",
      condition: "Good As New",
      buttonText: "Wed, 18 Feb, 01:18",

    },
    
  ];
      return (
    <section className="m-6 flex gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-60 bg-slate-200 h-80 flex flex-col   gap-2 shadow-lg rounded-lg">
          <img
            src={card.image}
            alt={card.title}
            className="h-44 w-52 rounded-md shadow-lg mt-4 ml-4"/>

       <div className="ml-2 flex flex-col gap-1">
         <p className="font-semibold text-sm">{card.title}</p>
         <p className="text-xs font-medium">{card.bidLabel}</p>
       <div className="flex flex-row gap-1 items-center">
         <p className="font-bold text-sm">{card.price}</p>
          <p className="text-xs font-light">{card.bids}</p>
         </div>
        <p className="text-xs font-medium">{card.condition}</p>
 <div className="flex justify-center mt-1">
   <button className="bg-blue-500 text-white text-xs font-medium px-11 py-1 rounded hover:bg-blue-600">
 {card.buttonText}
    </button> </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;


  

