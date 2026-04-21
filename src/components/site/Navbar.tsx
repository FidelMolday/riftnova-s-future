import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
  const location = useLocation();

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
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl text-secondary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-black">R</span>
          <span>RiftNova</span>
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
          <Button asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

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
