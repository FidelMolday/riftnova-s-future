import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "254700000000";
const DEFAULT_MESSAGE = "Hi RiftNova, I'd like to learn more about your platform.";

export const ChatWidget = () => {
  const [open, setOpen] = useState(true);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="relative mb-1 rounded-2xl bg-[#25D366] px-5 py-3 text-white shadow-elevated hover:bg-[#1ebe57] transition-colors"
            aria-label="Chat with us on WhatsApp"
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute -top-2 -left-2 grid h-5 w-5 place-items-center rounded-full bg-secondary text-white text-[10px] hover:bg-secondary/80"
              aria-label="Close chat prompt"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="text-sm font-semibold leading-tight">Got any Questions?</div>
            <div className="text-xs opacity-95 mt-0.5">Chat with us</div>
          </motion.a>
        )}
      </AnimatePresence>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(true)}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:bg-[#1ebe57] transition-all hover:scale-105"
        aria-label="WhatsApp chat"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>
    </div>
  );
};

export default ChatWidget;
