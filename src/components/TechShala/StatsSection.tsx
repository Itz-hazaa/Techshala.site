import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Star } from "lucide-react";

const stats = [
  { value: 25, label: "Workshops", suffix: "+" },
  { value: 12, label: "Schools", suffix: "" },
  { value: 450, label: "Robots Built", suffix: "+" },
  { value: 98, label: "Satisfaction", suffix: "%" },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-4">
            Results & <span className="text-primary">Social Proof</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-muted-foreground">Trusted by Hyderabad ICSE, CBSE, & State Syllabus schools</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-secondary rounded-2xl p-8 text-center shadow-brand"
    >
      <div className="text-4xl sm:text-5xl font-display font-900 text-primary mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
}
