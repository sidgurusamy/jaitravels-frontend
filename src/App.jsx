import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import PackageDetails from "./pages/PackageDetails.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/LandingPage/Contact.jsx";
import Layout from './components/LandingPage/Layout.jsx';
import About from './components/LandingPage/About.jsx';
import SearchPackages from "./components/Services/SearchPackages.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.js";
import NotFound from './pages/NotFound.jsx';
function App() {
  function ScrollToHashElement() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [location]);
    return null;
  }
  
  return (
    <>
        <ScrollToHashElement />
        <ScrollToTop/>
        <Routes>
          <Route element={<Layout/>}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/destinations" element={<SearchPackages />} />
      <Route path='/services' element={<Services />} />
      <Route path="/packages" element={<SearchPackages />} />
      <Route path="/packages/:pId" element={<PackageDetails />} />
      <Route path="/book" element={<Services />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/contact" element={<Contact/>} />
       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
