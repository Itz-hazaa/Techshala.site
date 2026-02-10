import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { title: "3-Day Robotics Sprint", date: "Mar 15-17, 2026", location: "Hitech City" },
  { title: "6-Day Coding Bootcamp", date: "Mar 22-27, 2026", location: "Jubilee Hills" },
  { title: "AI & Robotics Combo", date: "Apr 5-10, 2026", location: "Hitech City" },
  { title: "Game Dev Weekend", date: "Apr 12-14, 2026", location: "Banjara Hills"},
];

export default function UpcomingWorkshops() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-4">
            Upcoming <span className="text-primary">Workshops</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-brand-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-display font-700 text-foreground">{event.title}</h3>
                {/* <span className="bg-primary/10 text-primary text-xs font-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {event.spots} spots left
                </span> */}
              </div>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" /> {event.location}, Hyderabad
                </div>
              </div>
              {/* <button className="w-full bg-primary text-primary-foreground font-button font-600 py-3 rounded-xl hover:opacity-90 transition-opacity">
                Reserve Spot
              </button> */}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-button font-600 hover:underline">
            View All Events →
          </a>
        </div>
      </div>
    </section>
  );
}
