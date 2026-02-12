import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, Code, Brain, Gamepad2, Check } from "lucide-react";

const courses = [
  { icon: Bot, title: "Robotics 101", desc: "Build autonomous robots from scratch" },
  { icon: Code, title: "Coding for Kids", desc: "Python, Scratch & web development" },
  { icon: Brain, title: "AI Basics", desc: "Machine learning fundamentals" },
  { icon: Gamepad2, title: "Game Development", desc: "Create interactive games with code" },
];

const features = ["12-week live classes", "Certified curriculum", "Parent dashboard"];

export default function SchoolPrograms() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schools" className="section-padding bg-section-dark" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-section-dark-foreground mb-4">
            TechShala for <span className="text-primary">International Students</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/60 max-w-xl mx-auto">
            Online classes. Comprehensive tech curriculum designed for ICSE, CBSE & State Syllabus schools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-2xl p-6 hover:bg-section-dark-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <course.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-700 text-section-dark-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-section-dark-foreground/60 mb-5">{course.desc}</p>
              <ul className="space-y-2">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-section-dark-foreground/70">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-button font-600 text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
