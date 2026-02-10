// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-muted">
//       <div className="text-center">
//         <h1 className="mb-4 text-4xl font-bold">404</h1>
//         <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
//         <a href="/" className="text-primary underline hover:text-primary/90">
//           Return to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFound;




import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for sophisticated animations

const NotFound = () => {
  const location = useLocation();
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Robot scanning animation - increment particles over 3 seconds
    const timer = setInterval(() => {
      setParticleCount((prev) => {
        if (prev < 24) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 125);

    return () => clearInterval(timer);
  }, [location.pathname]);

  // Robotics-themed particles (red sparks + circuit nodes)
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-red-500 rounded-full opacity-70"
      style={{
        left: `${10 + (i % 8) * 12}%`,
        top: `${20 + Math.floor(i / 8) * 15}%`,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.7, 1, 0.7],
        x: [0, Math.sin(i) * 20, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.1,
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50/30 overflow-hidden relative">
      {/* Robotics scanning background - subtle red circuit glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(165,0,0,0.08),transparent_50%)] opacity-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10" /> {/* Circuit pattern */}
      
      {/* Floating robot particles */}
      <div className="absolute inset-0 pointer-events-none">{particles}</div>

      <div className="flex min-h-screen items-center justify-center px-4 py-12 relative z-10">
        <motion.div 
          className="text-center max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-black/10"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Robot head/404 display - sophisticated glitch effect */}
          <motion.div
            className="mx-auto w-32 h-32 mb-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl relative overflow-hidden shadow-2xl"
            animate={{
              rotate: [0, -1, 1, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Robot screen - red digital 404 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-4xl font-mono font-bold text-red-400 tracking-widest drop-shadow-lg"
                animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
            </div>
            
            {/* Robot antennas */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-1 h-8 bg-red-500 rounded-full mx-2 animate-bounce [animation-delay:-0.2s]" />
              <div className="w-1 h-8 bg-red-500 rounded-full mx-2 animate-bounce" />
            </div>
            
            {/* Robot eyes - scanning */}
            <div className="absolute top-6 left-6 w-3 h-3 bg-red-400 rounded-full animate-ping" />
            <div className="absolute top-6 right-6 w-3 h-3 bg-red-400 rounded-full animate-ping [animation-delay:0.3s]" />
          </motion.div>

          {/* Sophisticated messaging */}
          <motion.h1 
            className="mb-4 text-5xl md:text-6xl font-black bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Robot Lost Signal
          </motion.h1>
          
          <motion.p 
            className="mb-8 text-xl md:text-2xl text-gray-700 font-medium leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Oops! Our circuits can't find that page. 
            <span className="text-red-500 font-bold block mt-2 animate-pulse">
              🔍 Scanning Tech Shala HQ...
            </span>
          </motion.p>

          {/* Enhanced navigation + secondary CTAs */}
          <div className="space-y-4">
            <motion.a 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform border-2 border-red-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              🚀 Return to Workshops
            </motion.a>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <motion.a 
                href="/workshops"
                className="px-6 py-3 text-black hover:text-red-500 font-semibold border-2 border-black hover:border-red-500 rounded-xl hover:bg-red-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                📚 View Programs
              </motion.a>
              <motion.a 
                href="/contact"
                className="px-6 py-3 text-black hover:text-red-500 font-semibold border-2 border-black hover:border-red-500 rounded-xl hover:bg-red-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                🆘 Get Help
              </motion.a>
            </div>
          </div>

          {/* Debug info for devs - collapsible */}
          <details className="mt-12 p-4 bg-gray-100 rounded-xl text-xs text-gray-600 font-mono">
            <summary className="cursor-pointer font-medium mb-2">🔧 Debug (Dev Only)</summary>
            <code>Route: {location.pathname}</code>
          </details>
        </motion.div>
      </div>

      {/* Floating Tech Shala logo bottom-right */}
      <motion.div
        className="absolute bottom-8 right-8 w-20 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Logo SVG or image - replace with actual Tech Shala logo */}
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-black rounded-xl shadow-lg" />
      </motion.div>
    </div>
  );
};

export default NotFound;
