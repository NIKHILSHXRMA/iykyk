import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-100 h-0.5 origin-left bg-[#e8a0b5]"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}

export default ScrollProgress;