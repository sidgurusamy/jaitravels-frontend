import Carousel from "../components/LandingPage/Carousel";
import DestinationPackages from "../components/Services/DestinationPackages";
import NeedHelp from '../components/LandingPage/NeedHelp';
import CategoryTabs from "../components/LandingPage/CategoryTabs";
import QuickLinks from "../components/LandingPage/QuickLinks";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import SubscribeSection from "../components/common/Subscription";
import ChooseUs from "../components/LandingPage/ChooseUs";
import CustomerRating from "../components/common/CustomerRating";
function LandingPage() {
  return (
    <>
      <Carousel />
      <QuickLinks/>
      <DestinationPackages/>
      <CategoryTabs/>
      <About/>
      <ChooseUs/>
      <CustomerRating/>
      <NeedHelp/>
      <Contact/>
      <SubscribeSection/>
    </>
  );
}

export default LandingPage;
