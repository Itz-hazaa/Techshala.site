import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, School, Download, MessageCircle } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--gradient-cta)" }}
      ref={ref}
    >
      <div className="container-narrow mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-primary-foreground mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-12">
            Join hundreds of students already building the future with TechShala.
          </p>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: ArrowRight, label: "NRI Program", primary: true },
              { icon: School, label: "School Program", primary: false },
              { icon: Download, label: "Download Brochure", primary: false },
              { icon: MessageCircle, label: "WhatsApp Chat", primary: false },
            ].map((cta, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`flex items-center justify-center gap-2 font-button font-600 py-4 px-6 rounded-xl transition-all ${
                  cta.primary
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
                }`}
              >
                <cta.icon className="w-5 h-5" />
                {cta.label}
              </motion.button>
            ))}
          </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
  {[
    { icon: ArrowRight, label: "NRI Program", href: "https://wa.me/message/WDZQSMTFKZDDE1", primary: true },
    { icon: School, label: "School Workshop", href: "https://wa.me/message/WDZQSMTFKZDDE1", primary: true },
    { icon: MessageCircle, label: "Enrol Now", href: "https://wa.me/message/WDZQSMTFKZDDE1", primary: true },
       

    
  ].map((cta, i) => (
    <motion.a
      key={i}
      href={cta.href || "#"}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
      className={`flex items-center justify-center gap-2 font-button font-600 py-4 px-6 rounded-xl transition-all no-underline group ${
        cta.primary
          ? "bg-primary-foreground text-primary shadow-lg hover:shadow-brand-xl hover:scale-[1.02]"
          : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25 hover:shadow-md"
      }`}
    >
      <cta.icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      {cta.label}
    </motion.a>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  );
}
