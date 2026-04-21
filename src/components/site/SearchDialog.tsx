import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INDEX = [
  { title: "Home", path: "/", desc: "RiftNova platform overview, healthcare, agriculture and cybersecurity." },
  { title: "Solutions", path: "/solutions", desc: "RiftHealth, RiftFarm, RiftSecure product details and features." },
  { title: "RiftHealth", path: "/solutions", desc: "Telemedicine, AI diagnostics, EHR, NHIF integration, medicine delivery." },
  { title: "RiftFarm", path: "/solutions", desc: "Crop disease detection, weather insights, market prices, farmer financing." },
  { title: "RiftSecure", path: "/solutions", desc: "Cybersecurity, compliance, ODPC support, encryption, penetration testing." },
  { title: "About", path: "/about", desc: "Our story, mission, vision, and why we build from Africa for the world." },
  { title: "Team", path: "/team", desc: "Founders and leadership: CEO, AI Lead, Engineering, Operations." },
  { title: "Roadmap", path: "/roadmap", desc: "Eldoret launch 2026, East Africa 2027, global scale 2028+." },
  { title: "Contact", path: "/contact", desc: "Request a demo, partnership inquiries, office locations." },
  { title: "Request Demo", path: "/contact", desc: "Book a personalized RiftNova platform demo." },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SearchDialog = ({ open, onClose }: Props) => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return INDEX;
    return INDEX.filter(
      (i) => i.title.toLowerCase().includes(term) || i.desc.toLowerCase().includes(term)
    );
  }, [q]);

  const go = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-secondary/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="container-tight pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-2xl rounded-2xl bg-background shadow-elevated border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && results[0]) go(results[0].path);
                  }}
                  placeholder="Search pages, solutions, team..."
                  className="flex-1 bg-transparent outline-none text-base text-secondary placeholder:text-muted-foreground"
                />
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-secondary"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No results for "{q}"
                  </div>
                ) : (
                  results.map((r) => (
                    <button
                      key={r.title + r.path}
                      onClick={() => go(r.path)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="text-sm font-semibold text-secondary">{r.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{r.desc}</div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchDialog;
