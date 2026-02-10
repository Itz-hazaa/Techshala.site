import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Users, Zap, Crown } from "lucide-react";

const workshops = [
  {
    title: "3-Day Intensive",
    projects: "2 Projects + 1 Serving Robot",
    price: "₹39,999",
    tagline: "Perfect weekend starter",
    spots: 3,
    featured: false,
    icon: Zap,
  },
  {
    title: "6-Day Mastery",
    projects: "4 Projects + 1 Serving Robot",
    price: "₹69,999",
    tagline: "Deeper skills, same timeframe",
    spots: 5,
    featured: true,
    icon: Users,
  },
  {
    title: "6-Day Advanced",
    projects: "3 Projects + 2 Serving Robots",
    price: "₹89,999",
    tagline: "Dual-robot complexity",
    spots: 2,
    featured: false,
    icon: Crown,
    isGold: true,
  },
];

export default function WorkshopCards() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="workshops" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-4">
            School <span className="text-primary">Workshops</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Hands-on robotics school workshops in Hyderabad. Build, code, and take your robots home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                w.featured
                  ? "ring-2 ring-primary shadow-brand-lg scale-[1.02]"
                  : "shadow-brand hover:shadow-brand-lg"
              }`}
            >
              {w.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-button font-600 text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                w.isGold ? "bg-gold/20" : "bg-primary/10"
              }`}>
                <w.icon className={`w-7 h-7 ${w.isGold ? "text-gold" : "text-primary"}`} />
              </div>

              <h3 className="text-2xl font-display font-800 text-foreground mb-2">{w.title}</h3>
              <p className="text-muted-foreground mb-1">{w.projects}</p>
              <p className="text-sm text-muted-foreground mb-6">{w.tagline}</p>

              <div className="text-4xl font-display font-900 text-foreground mb-6">{w.price}</div>

            

              <a href="#cta" className={`w-full font-button font-600 text-lg py-3.5 rounded-xl block text-center transition-all ${
  w.isGold
    ? "bg-gold text-gold-foreground hover:opacity-90"
    : "bg-primary text-primary-foreground hover:opacity-90"
}`}>
  Book Now
</a>


              {/* Hover curriculum preview */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                <div className="pt-6 border-t border-border mt-6">
                  <p className="text-sm font-medium text-foreground mb-2">Includes:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ All materials & components</li>
                    <li>✓ Certificate of completion</li>
                    <li>✓ Classes 5-10th </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
