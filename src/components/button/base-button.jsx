export const BaseButton = ({buttonText, onClick}) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white text-xs font-medium px-11 py-1 rounded hover:bg-blue-600">
      {buttonText}
    </button>
  );
};