import { CustReviewLabel } from "./property-listing-components/customerReviewLabel";
import { ContactUsLabel, GoogReviewLabel } from "./property-listing-components/googleReviewLabel";
import { CustomerReview, ParaGraphData } from "./property-listing-components/paragraphData";
import ReviewCard, { CustReviewCard } from "./property-listing-components/reviewCard";
import Table from "./property-listing-components/table";

export const PropertyListing = () => {
  return (
    <div className="bg-sky-50 w-[95%] max-w-6xl mx-auto  shadow-xl ">
      <Table />
      <div className="mt-10">
        <GoogReviewLabel />
      </div>
      <div className="flex flex-col items-start">
      <ParaGraphData />
      <div className="p-1 md:pr-2 md:pl-16 mt-4">
        <ReviewCard />
      </div>
      </div>
      <div className="mt-10">
       <CustReviewLabel/>
      </div>
      <div className="flex flex-col items-start">
      <CustomerReview/>
       <div className="p-1 md:pl-16 mt-4">
        <CustReviewCard/>
      </div>
      </div>
      <div className="mt-10">
       <ContactUsLabel/>
      </div>
    </div>
  );
};
