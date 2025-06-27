import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
const isBookActive = location.pathname === "/book" && location.hash?.includes("book-");
  const isHome = location.pathname === "/";
const isBookPage = location.pathname === "/book";
const isBookHash = location.hash?.includes("book-");
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

useEffect(() => {
  if (!(isBookPage && isBookHash)) {
    setBookDropdownOpen(false); // only close when NOT in book
  }
}, [location.pathname, location.hash]);
useEffect(() => {
  if (menuOpen && location.pathname === "/book" && location.hash.includes("book-")) {
    setBookDropdownOpen(true);
  }
}, [menuOpen, location.pathname, location.hash]);

  // Dynamic navbar style
  const isTransparent = isHome && !scrolled && !isMobile;
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isTransparent ? "bg-transparent text-white" : "bg-white text-black shadow-md"
  }`;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

const bookItems = [
  { name: "Flight", href: "/book#book-flight" },
  { name: "Hotels", href: "/book#book-hotels" },
  { name: "Car Rentals", href: "/book#book-car-rentals" },
  { name: "Travel Insurance", href: "/book#book-travel-insurance" },
  { name: "Holiday Packages", href: "/book#book-holiday-packages" },
];
  const isActive = (href) => location.pathname === href;

  return (
    <header className={navClasses}>
<div className="container mx-auto flex items-center justify-between px-4 py-3">
  {/* Logo Left */}
  <div className="flex-shrink-0">
    <Link to="/">
      <img
        src={isTransparent ? `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912787/logowbg_r50syl.png` : `https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912786/logobbg_zosdzl.png`}
        alt="Jai Travels Logo"
        className="h-12 object-cover"
      />
    </Link>
  </div>

  {/* Center Nav */}
<nav className="hidden lg:flex flex-1 justify-center items-center space-x-6 font-medium text-xl overflow-visible">
  {/* First part of nav items */}
  {navItems.slice(0, 2).map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={`px-3 py-2 rounded-lg ${
        location.pathname === item.href ? "text-primary" : "hover:text-primary"
      }`}
    >
      {item.name}
    </Link>
  ))}

  {/* Book Dropdown */}
  <div className="relative group">
    <button
      className={`px-3 py-2 rounded-lg flex items-center gap-1 ${
        location.pathname.startsWith("/book") ? "text-primary" : "hover:text-primary"
      }`}
    >
      Book
    </button>
    <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <ul className="py-2 list-none">
        {bookItems.map((item) => (
          <li
            key={item.name}
            className="px-4 py-2 hover:text-primary relative hover:pl-6 transition-all duration-200"
          >
            <Link
              to={item.href}
              className="block text-gray-700 hover:text-primary before:content-['•'] before:absolute before:left-2 before:text-primary before:opacity-0 hover:before:opacity-100"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Remaining part of nav items */}
  {navItems.slice(2).map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={`px-3 py-2 rounded-lg ${
        location.pathname === item.href ? "text-primary" : "hover:text-primary"
      }`}
    >
      {item.name}
    </Link>
  ))}
</nav>

  {/* CTA Right */}
  <div className="hidden lg:block">
    <Link
      to="/destinations"
      className="bg-primary text-white px-5 py-2 rounded-full tracking-widest font-semibold hover:bg-white hover:text-primary border border-primary"
    >
      BOOK A TOUR
    </Link>
  </div>

  {/* Mobile Menu Icon */}
  <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl mr-2">
    {menuOpen ? <IoClose /> : <HiMenu />}
  </button>
</div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white text-black z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <img src={`https://res.cloudinary.com/dlcdfwygd/image/upload/v1750912786/logobbg_zosdzl.png`} alt="Logo" className="h-11" />
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <IoClose />
            </button>
          </div>

<ul className="space-y-4 font-semibold text-md md:text-xl uppercase">
  {/* First 2 nav items */}
  {navItems.slice(0, 2).map((item) => (
    <li key={item.name}>
      <Link
        to={item.href}
        onClick={() => setMenuOpen(false)}
        className={`block px-4 py-1 md:py-2 rounded-lg ${
          location.pathname === item.href ? "text-primary" : "hover:bg-gray-100"
        }`}
      >
        {item.name}
      </Link>
    </li>
  ))}

  {/* Book Dropdown */}
  <li className="px-4 py-1 md:py-2 rounded-lg flex items-center justify-between">
<span className={`rounded-lg ${isBookActive ? "text-primary" : "hover:text-primary"}`}>
  Book
</span>
    <button onClick={() => setBookDropdownOpen(!bookDropdownOpen)} className="text-lg">
      {bookDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
    </button>
  </li>

  {bookDropdownOpen && (
    <ul className=" bg-white rounded-lg px-2 py-1 md:py-2">
{bookItems.map((item) => (
  <li key={item.name}>
    <Link
      to={item.href}
onClick={() => {
  setMenuOpen(false);
  if (!item.href.startsWith("/book")) {
    setBookDropdownOpen(false);
  }
}}
className={`block px-3 py-2 rounded-lg ${
  location.hash && item.href.includes(location.hash)
    ? "text-primary"
    : "text-gray-700 hover:text-primary hover:bg-gray-100"
}`}
    >
      {item.name}
    </Link>
  </li>
))}

    </ul>
  )}

  {/* Remaining nav items */}
  {navItems.slice(2).map((item) => (
    <li key={item.name}>
      <Link
        to={item.href}
        onClick={() => setMenuOpen(false)}
        className={`block px-4 py-1 md:py-2 rounded-lg ${
          location.pathname === item.href ? "text-primary" : "hover:bg-gray-100"
        }`}
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
<div className="mt-6 flex justify-center">
  <Link
    to="/destinations"
    onClick={() => setMenuOpen(false)}
    className="bg-primary text-white w-full md:w-1/2 text-center px-5 py-2 rounded-full font-semibold tracking-widest hover:bg-white hover:text-primary border border-primary"
  >
    BOOK A TOUR
  </Link>
</div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
