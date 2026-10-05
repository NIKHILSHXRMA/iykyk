import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

function Intro({ onEnter }) {
  return (
    <motion.section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#08060a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c24974]/10 blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#783264]/10 blur-[70px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9e3d65]/5 blur-[70px]" />

      <div className="pointer-events-none absolute left-[12%] top-[25%] text-3xl text-[#e8a0b5]/20">
        ♡
      </div>

      <div className="pointer-events-none absolute bottom-[25%] right-[12%] text-2xl text-[#e8a0b5]/20">
        ♡
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          className="mb-8 flex items-center gap-3 text-[9px] font-medium tracking-[0.35em] text-[#b99aa8] sm:text-[10px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="text-[#e8a0b5]">✦</span>

          A LITTLE SOMETHING FOR YOU

          <span className="text-[#e8a0b5]">✦</span>
        </motion.div>

        <motion.div
          className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8a0b5]/30 text-[#e8a0b5] shadow-[0_0_25px_rgba(232,160,181,0.08)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          <Heart size={23} strokeWidth={1.4} />
        </motion.div>

        <motion.h1
          className="font-serif text-[76px] font-normal italic leading-[0.85] tracking-[-4px] text-[#fff4f7] sm:text-[110px] md:text-[140px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Komal
        </motion.h1>

        <motion.h2
          className="mt-3 text-[34px] font-light uppercase tracking-[0.25em] text-transparent sm:text-[50px] md:text-[70px]"
          style={{
            WebkitTextStroke: "1px rgba(255, 230, 238, 0.55)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          Kashyap
        </motion.h2>

        <motion.p
          className="mt-9 max-w-md text-sm font-light leading-7 tracking-wide text-[#a9959e]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Some stories are too beautiful
          <br />
          to be told in words.
        </motion.p>

        <motion.button
          onClick={onEnter}
          className="group mt-10 flex cursor-pointer items-center gap-4 rounded-full border border-[#e8a0b5]/30 bg-white/[0.035] py-2 pl-6 pr-2 text-sm tracking-wide text-white active:bg-[#e8a0b5]/10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.45 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Open My Heart</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8a0b5] text-[#12090e]">
            <ArrowRight size={18} />
          </span>
        </motion.button>

        <motion.div
          className="mt-14 text-[9px] uppercase tracking-[0.25em] text-[#665963]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          Made with a little bit of courage
          <span className="ml-2 text-[#d989a5]">♡</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#665963]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">
          A story awaits
        </span>

        <div className="h-8 w-px bg-linear-to-b from-[#e8a0b5]/50 to-transparent" />
      </motion.div>
    </motion.section>
  );
}

export default Intro;