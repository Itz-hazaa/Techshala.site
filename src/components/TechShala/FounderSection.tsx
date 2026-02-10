// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import { Linkedin, ArrowRight } from "lucide-react";

// const timeline = [
//   { year: "2025", event: "Founded Tech Shala" },
//   { year: "2026", event: "15 schools partnered" },
//   { year: "2026", event: "100 robots shipping" },
// ];

// export default function FounderSection() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="founder" className="section-padding bg-background" ref={ref}>
//       <div className="container-narrow mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             <div className="aspect-[3/4] bg-secondary rounded-2xl overflow-hidden shadow-brand-lg">
//               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/15">
//                 <div className="text-center p-8">
//                   <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                     <span className="text-5xl font-display font-900 text-primary">MH</span>
//                   </div>
//                   <p className="text-sm text-muted-foreground">Founder Portrait</p>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-foreground mb-4">
//               Meet the <span className="text-primary">Founder</span>
//             </h2>
//             <h3 className="text-xl font-display font-700 text-foreground mb-4">
//               Mohammed Hassaan Ali
//             </h3>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               10+ years scaling edtech in Hyderabad. Built programs served by T-Hub, trained 5000+ students. On a mission to make robotics education accessible to every school in India.
//             </p>

//             <a
//               href="#"
//               className="inline-flex items-center gap-2 bg-[#0077B5] text-primary-foreground font-button font-600 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mb-10"
//             >
//               <Linkedin className="w-5 h-5" />
//               Connect on LinkedIn
//             </a>

//             <div className="space-y-0">
//               {timeline.map((item, i) => (
//                 <div key={i} className="flex items-start gap-4 pb-6 last:pb-0">
//                   <div className="flex flex-col items-center">
//                     <div className="w-3 h-3 bg-primary rounded-full" />
//                     {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-primary">{item.year}</p>
//                     <p className="text-foreground font-medium">{item.event}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import { Linkedin, ArrowRight, Code, Bot, School, Users, Rocket, Award, Calendar, GraduationCap } from "lucide-react";
// import heroBg from "@/assets/Founder.jpeg";

// const hassaanMilestones = [
//   { 
//     year: "Age 11", 
//     event: "Started teaching B.Tech/M.Tech engineers (NDTV featured)", 
//     icon: GraduationCap,
//     link: "https://share.google/58DdcppJO8XFlX1fm"
//   },  
//   { 
//     year: "2020", 
//     event: "Developed voice-controlled humanoid & serving robot", 
//     icon: Rocket,
//     link: "https://youtu.be/7X1w3YLOLsk?si=dPfGbZYGKRQFlL5u"
//   },
//   { 
//     year: "2025", 
//     event: "Built TechShala reaching 500+ students with robotics", 
//     icon: Bot,
//     link: "https://www.techshala.org/"
//   },
//   { 
//     year: "2026", 
//     event: "Robotics curriculum adopted by 5+ Hyderabad schools", 
//     icon: School,
//     link: "https://www.instagram.com/techshala.official?igsh=bzk2eWUyNnZmcmVs"
//   },
//   { 
//     year: "2026", 
//     event: "Building WeePal to revolutionize K-12 education", 
//     icon: Users,
//     link: "https://www.instagram.com/littleweepal?igsh=MThxMjYzM3cxeHFjbg=="
//   },
// ];

// export default function FounderSection() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="founder" className="section-padding bg-gradient-to-b from-slate-50 via-white to-neutral-50/50 relative overflow-hidden" ref={ref}>
//       <div className="container-narrow mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Professional Founder Portrait */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative group"
//           >
//             <div className="aspect-[3/4] bg-gradient-to-br from-slate-50/95 to-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-black/10 hover:shadow-slate-500/20 transition-all duration-500 relative border border-slate-200/60">
              
//               {/* Subtle background image */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
//                 style={{
//                   backgroundImage: `url(${heroBg})`
//                 }}
//               />
              
//               {/* Professional overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-200/20" />
              
//               {/* Portrait frame */}
//               <div className="w-full h-full flex flex-col items-center justify-center p-12 relative z-10">
                
//                 {/* Professional avatar */}
//                 <motion.div 
//                   className="relative w-44 h-44 bg-gradient-to-br from-white/90 via-white/70 to-slate-100/80 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/80 backdrop-blur-md group-hover:scale-105 transition-all duration-500 overflow-hidden"
//                   animate={{ rotate: [0, 0.5, -0.5, 0] }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   {/* Subtle accent ring */}
//                   <motion.div 
//                     className="absolute inset-2 bg-gradient-to-r from-slate-400/30 to-blue-500/20 rounded-2xl opacity-70"
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 4, repeat: Infinity }}
//                   />
                  
//                   {/* Professional initials */}
//                   <div className="text-5xl font-display font-bold text-slate-900 drop-shadow-lg relative z-10">
//                     MH
//                   </div>
//                 </motion.div>
                
//                 {/* Status indicators - Professional */}
//                 <div className="flex gap-3 mt-8 mb-10">
//                   <motion.div 
//                     className="relative w-4 h-4 bg-emerald-400/90 rounded-full shadow-md shadow-emerald-400/50 border border-white/60 backdrop-blur-sm"
//                     animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                   <motion.div 
//                     className="relative w-4 h-4 bg-amber-400/90 rounded-full shadow-md shadow-amber-400/50 border border-white/60 backdrop-blur-sm"
//                     animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
//                     transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
//                   />
//                 </div>
                
//                 {/* Professional credentials */}
//                 <div className="text-center space-y-2">
//                   <p className="text-xl font-bold text-slate-900 tracking-tight">
//                     Mohammed Hassaan Ali
//                   </p>
//                   <p className="text-sm uppercase text-slate-600 font-semibold tracking-wider bg-slate-100 px-4 py-1.5 rounded-full inline-block border border-slate-200">
//                     Founder • TechShala + WeePal
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Professional Founder Story */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-10"
//           >
//             <div>
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
//                 Visionary Leader
//                 <br />
//                 <span className="text-slate-600 font-semibold">TechShala & WeePal</span>
//               </h2>
              
//               <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-6">
//                 Mohammed Hassaan Ali
//               </h3>
              
//               <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
//                 Began teaching B.Tech/M.Tech engineers at age 11 (NDTV featured). 
//                 Built TechShala robotics program serving 500+ students. 
//                 Creator of advanced voice-controlled robots. 
//                 Now transforming K-12 education through WeePal across Hyderabad schools.
//               </p>
//             </div>

//             <motion.a
//               href="https://www.linkedin.com/in/mohammed-hassaan-ali-b41b66380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
//               className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/30 backdrop-blur-sm mb-12 max-w-max"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Linkedin className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
//               Connect on LinkedIn
//               <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
//             </motion.a>

//             {/* Professional Timeline */}
//             <div className="space-y-6">
//               {hassaanMilestones.map((milestone, i) => {
//                 const Icon = milestone.icon;
//                 return (
//                   <motion.div 
//                     key={i}
//                     className="group flex items-start gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 hover:border-slate-400/50 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-400 cursor-pointer"
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={isVisible ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
//                     whileHover={{ y: -2 }}
//                   >
//                     <div className="flex flex-col items-center pt-2 flex-shrink-0">
//                       <div className="w-5 h-5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full shadow-md group-hover:scale-110 transition-all duration-300 mb-4">
//                         <Icon className="w-3 h-3 text-white mt-0.5" />
//                       </div>
//                       {i < hassaanMilestones.length - 1 && (
//                         <div className="w-px h-24 bg-gradient-to-b from-slate-300/50 to-slate-200/30 mt-3" />
//                       )}
//                     </div>
                    
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-4 mb-3">
//                         <span className="text-sm font-bold text-slate-700 px-4 py-2 bg-slate-100/80 rounded-xl border border-slate-200">
//                           {milestone.year}
//                         </span>
//                       </div>
//                       <h4 className="font-semibold text-slate-900 leading-tight mb-3 group-hover:text-slate-700 transition-colors text-lg">
//                         {milestone.event}
//                       </h4>
//                       <motion.a
//                         href={milestone.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium group-hover:underline underline-offset-2 transition-all duration-200 border-b border-dashed border-slate-300 hover:border-slate-900"
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         View Details →
//                       </motion.a>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import founderImage from "@/assets/Founder.jpeg";
import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section id="founder" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            About Founder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-warm-lg">
                <img
                  src={founderImage}
                  alt="Mohammed Hassaan Ali - Founder of WeePal | Techshala"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-64 sm:w-80 h-64 sm:h-80 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary">
                Mohammed Hassaan Ali
              </h3>
              <p className="color: #000 font-semibold font-body">
                Founder - WeePal | Techshala
              </p>
            </div>

            <ul className="space-y-3">
              {[
                {
                  text: "Started teaching B.Tech/M.Tech engineers at age 11 (NDTV featured)",
                  link: "https://share.google/58DdcppJO8XFlX1fm"
                },
                {
                  text: "Built TechShala reaching 500+ students with robotics education",
                  link: "https://www.instagram.com/techshala.official?igsh=bzk2eWUyNnZmcmVs" // Update with your link
                },
                {
                  text: "Developed voice-controlled humanoid robot & serving robot",
                  link: "https://youtu.be/7X1w3YLOLsk?si=dPfGbZYGKRQFlL5u" // Update with your link
                },
                {
                  text: "Created robotics curriculum adopted by 5+ Hyderabad schools",
                  link: "https://www.instagram.com/techshala.official?igsh=bzk2eWUyNnZmcmVs" // Update with your link
                },
                {
                  text: "Building WeePal to revolutionize K-12 education",
                  link: "https://www.weepal.in"
                },
              ].map((item, index) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-foreground/85 group"
                >
                  <span className="text-accent font-bold mt-1.5 flex-shrink-0 w-6 text-center">
                    {index + 1}.
                  </span>
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="hover:text-primary transition-all duration-200 underline underline-offset-4 decoration-accent/50 hover:decoration-primary hover:no-underline group-hover:text-primary font-medium"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-secondary rounded-xl p-5 mt-6">
              <Quote className="w-6 h-6 text-accent mb-2" />
              <blockquote className="text-foreground font-body italic text-lg leading-relaxed">
                "Every child deserves academics that spark curiosity, not just marks."
              </blockquote>
              <cite className="text-muted-foreground text-sm mt-2 block not-italic font-semibold">
                — Hassaan
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
