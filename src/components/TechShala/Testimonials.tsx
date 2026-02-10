import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Ravi, Class 8", school: "Loyola School", quote: "Built my first robot in just 3 days! The instructors made everything so easy to understand." },
  { name: "Ananya, Class 10", school: "Delhi Public School", quote: "The coding classes helped me win the inter-school science fair. Tech Shala changed my perspective on STEM." },
  { name: "Arjun, Class 7", school: "Oakridge International", quote: "I never thought I could program a robot to follow commands. Now I want to study robotics engineering!" },
  { name: "Sneha, Class 9", school: "Meridian School", quote: "The AI basics course was mind-blowing. We built a real chatbot that our whole class uses." },
  { name: "Karthik, Class 6", school: "Chirec Public School", quote: "Best weekend ever! I built two robots and learned how sensors work. Can't wait for the advanced course." },
  { name: "Priya, Parent", school: "Jubilee Hills Public", quote: "My daughter's confidence in technology has skyrocketed. The parent dashboard keeps me informed every step." },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-4">
            What Students <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 sm:p-12 shadow-brand-lg text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <p className="font-display font-700 text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].school}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 bg-card rounded-full shadow-brand flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 bg-card rounded-full shadow-brand flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
