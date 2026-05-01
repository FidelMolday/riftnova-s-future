import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
    <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.46-2.34-1.46-.87-.78-1.45-1.74-1.62-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.52.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.62-.91-2.21-.24-.58-.48-.5-.66-.51h-.57c-.19 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.06c.15.19 2.09 3.19 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.57-.34zM12.05 21.78c-1.81 0-3.59-.49-5.14-1.41l-.37-.22-3.83 1.01 1.02-3.73-.24-.38A9.85 9.85 0 0 1 2.2 12.05C2.2 6.56 6.56 2.2 12.05 2.2c2.66 0 5.16 1.04 7.04 2.92a9.87 9.87 0 0 1 2.91 7.04c0 5.49-4.36 9.85-9.95 9.85v-.23zm8.47-18.32A11.86 11.86 0 0 0 12.05 0C5.47 0 .2 5.27.2 11.85c0 2.09.55 4.12 1.59 5.92L0 24l6.33-1.66a11.9 11.9 0 0 0 5.72 1.48h.01c6.58 0 11.85-5.27 11.85-11.85a11.87 11.87 0 0 0-3.59-8.55z"/>
  </svg>
);

const WHATSAPP_NUMBER = "254114745379";
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
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default ChatWidget;
