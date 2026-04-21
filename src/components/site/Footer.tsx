import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-tight py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-black">R</span>
              <span>RiftNova</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
              Securing health. Empowering farmers. Built in Africa. Built for the world.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-primary transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">Solutions</h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">RiftHealth</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">RiftFarm</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">RiftSecure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:hello@riftnova.com" className="hover:text-primary">hello@riftnova.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Eldoret, Kenya</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Grand Rapids, Michigan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} RiftNova Technologies. All rights reserved.</p>
          <p>Built in Africa · Built for the World</p>
        </div>
      </div>
    </footer>
  );
};
