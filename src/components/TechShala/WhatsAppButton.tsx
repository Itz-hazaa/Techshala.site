import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/WDZQSMTFKZDDE1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      style={{ "--tw-shadow": "0 4px 20px rgba(37,211,102,0.4)" } as React.CSSProperties}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
