import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import logo from "@/assets/logo_black.png";
import { useScrollToSection } from "../../hooks/useScrollToSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const moreButtonRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/#home", label: "Home", sectionId: "home" },
    { path: "/#contract", label: "Contract Address", sectionId: "contract" },
    { path: "/#how-to-buy", label: "How to Buy", sectionId: "how-to-buy" },
  ];

  const dropdownItems = [
    { path: "/#about", label: "About", sectionId: "about" },
    { path: "/#allocation", label: "Allocation", sectionId: "allocation" },
    { path: "/#faqs", label: "FAQs", sectionId: "faqs" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <span className="text-[22px] font-geist font-semibold">
            <span className="text-goldAccent">Sol</span>
            <span className="text-white">TimeHigh</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={({ isActive }) =>
                cn(
                  "text-[#9CA3AF] hover:text-goldAccent transition-colors text-[15px]",
                  "font-geist font-medium",
                  isActive && "text-goldAccent"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* More Dropdown */}
          <div className="relative" ref={moreButtonRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/85 hover:text-goldAccent flex items-center text-[15px] font-geist font-medium"
            >
              More
              <svg
                className={cn(
                  "w-4 h-4 ml-1.5 transition-transform duration-200",
                  isOpen ? "rotate-180" : ""
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 w-48 py-2 mt-2 border rounded-lg shadow-lg bg-zinc-900 border-zinc-800">
                {dropdownItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2 text-[#9CA3AF] hover:text-goldAccent text-[15px]",
                        "font-geist font-medium transition-colors",
                        isActive && "text-goldAccent"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="https://jup.ag/swap/SOL-D7tDpW8MnsEb3dpMnUSKv2uTZmVVGaEhcM9HHibSmoon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] text-white px-5 py-2 rounded-full hover:bg-red-700 
              transition-colors text-[15px] font-geistmono font-medium"
          >
            Buy Now
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#9CA3AF]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t lg:hidden border-zinc-800">
          <div className="px-4 py-3 space-y-1">
            {navItems.concat(dropdownItems).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.sectionId)}
                className={({ isActive }) =>
                  cn(
                    "block py-2 text-[#9CA3AF] hover:text-goldAccent text-[15px]",
                    "font-geist font-medium transition-colors",
                    isActive && "text-goldAccent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/buy"
              className="block w-full text-center bg-[#DC2626] text-white py-2 rounded-full 
                hover:bg-red-700 transition-colors text-[15px] font-geistmono font-medium mt-4"
            >
              Buy Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
