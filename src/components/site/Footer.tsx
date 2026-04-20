import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-tight py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">R</span>
              <span>RiftNova</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Securing Health. Empowering Farmers. Built in Africa. Built for the World.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@riftnova.com" className="hover:text-foreground transition-colors">hello@riftnova.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Eldoret, Kenya · Grand Rapids, MI</span>
            </div>
          </div>
          <div className="flex md:justify-end gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} RiftNova Technologies. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
