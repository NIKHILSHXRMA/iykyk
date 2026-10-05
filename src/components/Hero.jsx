import { motion } from "framer-motion";
import { ChevronDown, Heart, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#08060a] text-white"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================== */}

      <div className="absolute inset-0">
        <img
          src="/public/photos/komal-07.jpg"
          alt="Komal"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Image Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Cinematic Gradient */}

      <div className="absolute inset-0 bg-linear-to-t from-[#08060a] via-[#08060a]/45 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-r from-[#08060a]/65 via-transparent to-[#08060a]/20" />

      {/* =========================
          AMBIENT GLOW
      ========================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-[#d86a91]/10 blur-[140px]" />

      {/* =========================
          TOP LABEL
      ========================== */}

      <motion.div
        className="absolute left-6 top-8 z-10 flex items-center gap-3 sm:left-10 sm:top-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Sparkles
          size={13}
          strokeWidth={1.3}
          className="text-[#e8a0b5]"
        />

        {/* <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
          A story about you
        </span> */}
      </motion.div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 w-full px-6 pb-20 sm:px-12 sm:pb-24 md:px-20 lg:pb-28">

        <div className="max-w-4xl">

          {/* Small text */}

          <motion.p
            className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#e8a0b5]"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            To the girl who makes everything feel different
          </motion.p>

          {/* Name */}

          <div className="overflow-hidden">

            <motion.h1
              className="font-serif text-[72px] font-normal italic leading-[0.8] tracking-[-4px] text-[#fff7fa] sm:text-[110px] md:text-[145px] lg:text-[175px]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Komal
            </motion.h1>

          </div>

          {/* Kashyap */}

          <div className="mt-5 overflow-hidden sm:mt-7">

            <motion.h2
              className="text-[30px] font-light uppercase tracking-[0.28em] text-white/80 sm:text-[46px] md:text-[62px]"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Kashyap
            </motion.h2>

          </div>

          {/* Divider */}

          <motion.div
            className="my-7 flex items-center gap-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 1.35, duration: 0.8 }}
          >
            <div className="h-px w-16 bg-[#e8a0b5]/50" />

            <Heart
              size={13}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />

            <div className="h-px w-16 bg-[#e8a0b5]/50" />
          </motion.div>

          {/* Description */}

          <motion.p
            className="max-w-lg text-sm font-light leading-7 text-white/55 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.8 }}
          >
            Somewhere between ordinary days and unexpected
            moments, you became someone very special to me.
          </motion.p>

        </div>
      </div>

      {/* =========================
          FLOATING HEART
      ========================== */}

      <motion.div
        className="absolute right-[12%] top-[35%] z-10 hidden sm:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.25, 0.7, 0.25],
          scale: [0.9, 1.1, 0.9],
          y: [-10, -25, -10],
        }}
        transition={{
          delay: 1.8,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart
          size={30}
          strokeWidth={0.8}
          className="text-[#e8a0b5]"
        />
      </motion.div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <motion.div
        className="absolute bottom-7 right-6 z-10 flex flex-col items-center gap-3 sm:bottom-10 sm:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="rotate-90 text-[8px] uppercase tracking-[0.35em] text-white/35">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={17}
            strokeWidth={1}
            className="text-[#e8a0b5]/70"
          />
        </motion.div>
      </motion.div>

      {/* =========================
          PAGE NUMBER
      ========================== */}

      <div className="absolute bottom-8 left-6 z-10 sm:bottom-10 sm:left-10">
        <span className="font-serif text-xs italic text-white/30">
          01
        </span>

        <span className="mx-2 text-white/15">/</span>

        <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
          Our Story
        </span>
      </div>
    </section>
  );
}

export default Hero;