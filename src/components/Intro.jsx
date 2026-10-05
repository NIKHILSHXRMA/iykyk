import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

function Intro({ onEnter }) {
  return (
    <motion.section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#08060a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1.2 }}
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-87.5 w-87.5 rounded-full bg-[#c24974]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-75 w-75 rounded-full bg-[#783264]/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9e3d65]/5 blur-[120px]" />

      {/* =========================
          FLOATING HEARTS
      ========================== */}

      <motion.div
        className="pointer-events-none absolute left-[12%] top-[25%] text-4xl text-[#e8a0b5]/20"
        animate={{
          y: [-10, -30, -10],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♡
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[25%] right-[12%] text-3xl text-[#e8a0b5]/20"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♡
      </motion.div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Label */}

        <motion.div
          className="mb-8 flex items-center gap-3 text-[9px] font-medium tracking-[0.35em] text-[#b99aa8] sm:text-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-[#e8a0b5]">✦</span>

          A LITTLE SOMETHING FOR YOU

          <span className="text-[#e8a0b5]">✦</span>
        </motion.div>

        {/* Heart */}

        <motion.div
          className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8a0b5]/30 text-[#e8a0b5] shadow-[0_0_35px_rgba(232,160,181,0.08)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            type: "spring",
          }}
        >
          <Heart size={23} strokeWidth={1.4} />
        </motion.div>

        {/* Komal */}

        <motion.h1
          className="font-serif text-[76px] font-normal italic leading-[0.85] tracking-[-4px] text-[#fff4f7] sm:text-[110px] md:text-[140px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Komal
        </motion.h1>

        {/* Kashyap */}

        <motion.h2
          className="mt-3 text-[34px] font-light uppercase tracking-[0.25em] text-transparent sm:text-[50px] md:text-[70px]"
          style={{
            WebkitTextStroke: "1px rgba(255, 230, 238, 0.55)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 1 }}
        >
          Kashyap
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          className="mt-9 max-w-md text-sm font-light leading-7 tracking-wide text-[#a9959e]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8 }}
        >
          Some stories are too beautiful
          <br />
          to be told in words.
        </motion.p>

        {/* Button */}

        <motion.button
          onClick={onEnter}
          className="group mt-10 flex cursor-pointer items-center gap-4 rounded-full border border-[#e8a0b5]/30 bg-white/[0.035] py-2 pl-6 pr-2 text-sm tracking-wide text-white backdrop-blur-xl transition-all duration-500 hover:border-[#e8a0b5]/60 hover:bg-[#e8a0b5]/10 hover:shadow-[0_0_40px_rgba(232,160,181,0.12)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Open My Heart</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8a0b5] text-[#12090e] transition-transform duration-500 group-hover:-rotate-45">
            <ArrowRight size={18} />
          </span>
        </motion.button>

        {/* Footer */}

        <motion.div
          className="mt-14 text-[9px] uppercase tracking-[0.25em] text-[#665963]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          Made with a little bit of courage
          <span className="ml-2 text-[#d989a5]">♡</span>
        </motion.div>
      </div>

      {/* =========================
          BOTTOM SCROLL INDICATOR
      ========================== */}

      <motion.div
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#665963]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">
          A story awaits
        </span>

        <motion.div
          className="h-8 w-px bg-linear-to-b from-[#e8a0b5]/50 to-transparent"
          animate={{
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default Intro;