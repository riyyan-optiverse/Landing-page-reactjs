export const CardContent = ({ card }) => {
  return (
    <div>
      <p className="font-semibold text-sm">{card.title}</p>
      <p className="text-xs font-medium">{card.bidLabel}</p>
      <div className="flex flex-row gap-1 items-center">
      <p className="font-bold text-sm">{card.price}</p>
      <p className="text-xs font-light">{card.bids}</p>
      </div>
      <p className="text-xs font-medium">{card.condition}</p>
    </div>
  );
};
