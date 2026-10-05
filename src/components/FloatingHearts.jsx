import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = [
  { left: "12%", delay: 0, duration: 11, size: 11 },
  { left: "32%", delay: 4, duration: 13, size: 9 },
  { left: "55%", delay: 2, duration: 12, size: 10 },
  { left: "78%", delay: 6, duration: 14, size: 11 },
];

function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute -bottom-5 text-[#e8a0b5]/20"
          style={{
            left: heart.left,
            willChange: "transform, opacity",
          }}
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
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