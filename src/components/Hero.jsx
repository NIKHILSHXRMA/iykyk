import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#08060a] text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/photos/komal-07.jpg"
          alt="Komal"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-linear-to-t from-[#08060a] via-[#08060a]/45 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-r from-[#08060a]/65 via-transparent to-[#08060a]/20" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d86a91]/10 blur-[70px]" />

      <div className="relative z-10 w-full px-6 pb-20 sm:px-12 sm:pb-24 md:px-20 lg:pb-28">
        <div className="max-w-4xl">
          <motion.p
            className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#e8a0b5]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            To the girl who makes everything feel different
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="font-serif text-[72px] font-normal italic leading-[0.8] tracking-[-4px] text-[#fff7fa] sm:text-[110px] md:text-[145px] lg:text-[175px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              Komal
            </motion.h1>
          </div>

          <div className="mt-5 overflow-hidden sm:mt-7">
            <motion.h2
              className="text-[30px] font-light uppercase tracking-[0.28em] text-white/80 sm:text-[46px] md:text-[62px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              Kashyap
            </motion.h2>
          </div>

          <motion.div
            className="my-7 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="h-px w-16 bg-[#e8a0b5]/50" />

            <Heart
              size={13}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />

            <div className="h-px w-16 bg-[#e8a0b5]/50" />
          </motion.div>

          <motion.p
            className="max-w-lg text-sm font-light leading-7 text-white/55 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Somewhere between ordinary days and unexpected
            moments, you became someone very special to me.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 z-10 flex flex-col items-center gap-3 sm:bottom-10 sm:right-10">
        <span className="rotate-90 text-[8px] uppercase tracking-[0.35em] text-white/35">
          Scroll
        </span>

        <ChevronDown
          size={17}
          strokeWidth={1}
          className="text-[#e8a0b5]/70"
        />
      </div>

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