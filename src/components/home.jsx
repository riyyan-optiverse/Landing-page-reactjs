import { officeImage } from "../assets/pngs";
import paraData from "./home-page-components/static-data";
export const Home = () => {
  return (
    <div className="bg-sky-50 w-11/12 max-w-6xl mx-auto  shadow-xl ">
     <div className="p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-10 justify-center items-start">
        <div className="flex flex-col gap-2 ">
          {paraData.map((para, index) => (
            <div key={index} className="flex flex-col ">
              <p className="text-sm font-semibold">{para.label}</p>
              <p className=" text-sm font-normal mt-1 ml-1">{para.para}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={officeImage}
            alt="image"
            className="w-full max-w-2xl object-cover h-auto rounded-sm"
          />
          <p className="text-xl font-bold">Fast Delivery</p>
        </div>
      </div>
    </div>
  );
};
