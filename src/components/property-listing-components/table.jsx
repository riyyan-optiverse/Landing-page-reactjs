const Table = () => {
    return(
        <div className="px-16 p-4">
        <div className="grid grid-cols-4 items-center">
          <span className="text-base font-medium text-yellow-400">Plan</span>
          <span className="text-base font-medium text-yellow-400">Bottles</span>
          <span className="text-base font-medium text-yellow-400">Price</span>
          <span className="text-base font-medium text-yellow-400">For</span>
        </div>
        <hr className="border-t-2 border-gray-300 mt-2" />
        <div className="mt-4 grid grid-cols-4 gap-y-3">
          <span className="text-base font-medium">Home Plan</span>
          <span className="text-base font-medium text-gray-500">2 Bottles<span className="text-xs font-medium text-gray-400"> (20L Bottles)</span></span>
          <span className="text-base font-medium text-gray-500">Rs. 500</span>
          <span className="text-base font-medium text-gray-500">Family use</span>

          <span className="text-base font-medium">Office Plan</span>
         <span className="text-base font-medium text-gray-500">5 Bottles<span className="text-xs font-medium text-gray-400"> (20L Bottles)</span></span>
          <span className="text-base font-medium text-gray-500">Rs. 1200</span>
          <span className="text-base font-medium text-gray-500">WorkPlaces</span>

          <span className="text-base font-medium">Bulk Plan</span>
          <span className="text-base font-medium text-gray-500">Custom</span>
          <span className="text-base font-medium text-gray-500">Contact</span>
          <span className="text-base font-medium text-gray-500">Events or Schools</span>

          
        </div>
      </div>
    );
}
export default Table;