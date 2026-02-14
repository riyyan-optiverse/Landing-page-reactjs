const Table = () => {
  return (
    <div className="md:px-16 p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-yellow-400 mb-1">Plan</span>
          <span className="text-base font-medium text-gray-500">Home Plan</span>
          <span className="text-base font-medium text-gray-500">Office Plan</span>
          <span className="text-base font-medium text-gray-500">Bulk Plan</span>
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <span className="text-base font-medium text-yellow-400 mb-1">Bottles</span>
          <span className="text-base font-medium text-gray-500">
            2 Bottles
            <span className="text-xs font-medium text-gray-400">
              {" "}
              (20L Bottles)
            </span>
          </span>
          <span className="text-base font-medium text-gray-500">
            5 Bottles
            <span className="text-xs font-medium text-gray-400">
              {" "}
              (20L Bottles)
            </span>
          </span>
          <span className="text-base font-medium text-gray-500">Custom</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-yellow-400 mb-1">Price</span>
          <span className="text-base font-medium text-gray-500">Rs. 500</span>
          <span className="text-base font-medium text-gray-500">Rs. 1200</span>
          <span className="text-base font-medium text-gray-500">Contact</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-yellow-400 mb-1">For</span>
          <span className="text-base font-medium text-gray-500">
            Family use
          </span>
          <span className="text-base font-medium text-gray-500">
            WorkPlaces
          </span>
          <span className="text-base font-medium text-gray-500">
            Events or Schools
          </span>
        </div>
      </div>
    </div>
  );
};
export default Table;
