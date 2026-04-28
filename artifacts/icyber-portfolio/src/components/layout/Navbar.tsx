import { useState, useEffect, useRef, FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logoImg from "@assets/Black_and_White_Modern_Personal_Logo(2)_1777405393996.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    if (!isSearchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300 overflow-hidden">
              <img src={logoImg} alt="RA Logo" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-wider text-foreground group-hover:text-primary transition-colors">
                I CYBER
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tech
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base lg:text-xl xl:text-2xl font-medium transition-all duration-200 hover:text-primary relative group whitespace-nowrap",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full",
                    location === link.href ? "w-full" : "w-0"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 relative" ref={searchRef}>
            <button
              onClick={() => setIsSearchOpen((s) => !s)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-white/5"
              aria-label="Search the web"
            >
              <Search className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.form
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 top-full mt-3 w-80 glass-panel rounded-xl p-2 flex items-center gap-2 shadow-2xl border border-white/10"
                >
                  <Search className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search the web..."
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-1 py-1.5"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#00FFFF] text-black text-xs font-semibold hover:bg-[#33FFFF] transition-colors"
                  >
                    Go
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-display font-semibold transition-colors",
                    location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-border">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 glass-panel rounded-xl p-2 border border-white/10">
                <Search className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search the web..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-1 py-1.5"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-[#00FFFF] text-black text-xs font-semibold hover:bg-[#33FFFF] transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
