import  React  from "react";
import SearchPackages from "./SearchPackages";
import HotelComponent from "./HotelComponent";
import FlightBooking from "./FlightBooking";
import CarComponent from "./CarComponent";
import TravelInsComponent from "./TravelInsComponent";


export const RenderFlightTab = ({activeTab}) => {
  const tabCategory = activeTab || ""; 
  return (
    <>
    <FlightBooking tabCategory={tabCategory}/>
    </>
  );
}


      export const RenderRentalCarsTab = ({activeTab}) => {
        const tabCategory = activeTab || ""; 
        return (
          <>
          <CarComponent tabCategory={tabCategory}/>
    </>
          );
      }
    
      export const RenderTravelInsuranceTab = ({activeTab}) => {
        const tabCategory = activeTab || ""; 
        return (
          <>
            <TravelInsComponent  tabCategory={tabCategory}  />
    </>
          );
        }
    export const RenderHotelTab = ({activeTab}) => {
        const tabCategory = activeTab || ""; 

        return (
          <>
            <HotelComponent  tabCategory={tabCategory} /> 
    </>
          );
        }


 export const RenderHolidayPackagesTab = ({activeTab}) => {
        const tabCategory = activeTab || ""; 
        return (
          <>
            <SearchPackages tabCategory={tabCategory} />
</>
      );
    }

