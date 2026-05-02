import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import logo from "@/assets/riftnova-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-tight py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
               <Link to="/" className="inline-flex items-center" aria-label="RiftNova home">
                <img src={logo} alt="RiftNova Technologies" className="h-12 w-auto" />
              </Link>
             <p className="mt-4 text-sm text-secondary-foreground leading-relaxed">
               Securing health. Empowering farmers. Built in Africa. Built for the world.
             </p>
              <div className="mt-5 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-white/10 hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="GitHub" className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-white/10 hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
          </div>

          <div>
             <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-secondary-foreground">
                <li><Link to="/about" className="text-secondary-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/team" className="text-secondary-foreground hover:text-primary transition-colors">Team</Link></li>
                <li><Link to="/roadmap" className="text-secondary-foreground hover:text-primary transition-colors">Roadmap</Link></li>
                <li><Link to="/contact" className="text-secondary-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">Solutions</h4>
              <ul className="mt-4 space-y-3 text-sm text-secondary-foreground">
                <li><Link to="/solutions" className="text-secondary-foreground hover:text-primary transition-colors">RiftHealth</Link></li>
                <li><Link to="/solutions" className="text-secondary-foreground hover:text-primary transition-colors">RiftFarm</Link></li>
                <li><Link to="/solutions" className="text-secondary-foreground hover:text-primary transition-colors">RiftSecure</Link></li>
              </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">Get in touch</h4>
             <ul className="mt-4 space-y-3 text-sm text-secondary-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-primary" />
                  <a href="mailto:riftnovatechnologies@gmail.com" className="text-secondary-foreground hover:text-primary transition-colors">riftnovatechnologies@gmail.com</a>
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

          <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground">
           <p>© {new Date().getFullYear()} RiftNova Technologies. All rights reserved.</p>
           <p>Built in Africa · Built for the World</p>
         </div>
      </div>
    </footer>
  );
};
