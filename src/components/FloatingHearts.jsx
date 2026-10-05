import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = [
  { left: "8%", delay: 0, duration: 8, size: 13 },
  { left: "18%", delay: 2, duration: 10, size: 10 },
  { left: "30%", delay: 4, duration: 9, size: 14 },
  { left: "43%", delay: 1, duration: 11, size: 9 },
  { left: "56%", delay: 3, duration: 8, size: 12 },
  { left: "68%", delay: 5, duration: 10, size: 11 },
  { left: "79%", delay: 2, duration: 9, size: 14 },
  { left: "91%", delay: 4, duration: 11, size: 10 },
];

function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute -bottom-7.5 text-[#e8a0b5]/20"
          style={{
            left: heart.left,
          }}
          initial={{
            y: 0,
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            y: "-115vh",
            opacity: [0, 0.7, 0.4, 0],
            scale: [0.7, 1, 0.8],
            x: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={heart.size}
            strokeWidth={1}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingHearts;