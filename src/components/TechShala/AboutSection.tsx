import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, GraduationCap, Wrench, Monitor } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-6">
              What is <span className="text-primary">TechShala</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We make tech tangible. Two proven paths: workshops where students build real robots + comprehensive online classes exclusively for schools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every child deserves to experience the thrill of bringing a robot to life. Our hands-on approach turns abstract concepts into real-world creations that students take home proudly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              { icon: Bot, title: "Workshops for All Ages", desc: "Weekday & weekend hands-on sessions for students aged 8-18" },
              { icon: Monitor, title: "School Tech Curriculum", desc: "Exclusive online classes tailored for ICSE/CBSE schools" },
              { icon: Wrench, title: "Real Robot Projects", desc: "Students build & keep every robot they create in class" },
              { icon: GraduationCap, title: "Certified Programs", desc: "Industry-recognized certificates for every completed course" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-secondary rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-700 text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
