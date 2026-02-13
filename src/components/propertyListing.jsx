import { LableReview } from "./property-listing-components/lableReview";
import { ParaGraphData } from "./property-listing-components/paragraphData";
import Table from "./property-listing-components/table";

export const PropertyListing = () => {
  return (
    <div className="bg-sky-50 w-11/12 h-96 max-w-6xl mx-auto  shadow-xl ">
      <Table />
      <div className="mt-10">
        <LableReview />
      </div>
      <ParaGraphData/>
    </div>
  );
};
