import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { SearchDialog } from "./SearchDialog";
import logo from "@/assets/riftnova-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm" : "bg-background border-b border-transparent"
      }`}
    >
      <nav className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="RiftNova home">
          <img src={logo} alt="RiftNova Technologies" className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-secondary/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full text-secondary/80 hover:text-primary hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full text-secondary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="text-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-tight py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-primary" : "text-secondary"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
