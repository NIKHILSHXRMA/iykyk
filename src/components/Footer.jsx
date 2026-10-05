import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08060a] px-5 pb-10 pt-24 sm:px-8 lg:px-16">

      <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-[#e8a0b5]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#e8a0b5]/30" />

          <Sparkles
            size={13}
            strokeWidth={1.2}
            className="text-[#e8a0b5]"
          />

          <span className="h-px w-10 bg-[#e8a0b5]/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8a0b5]/20 bg-[#e8a0b5]/5"
        >
          <Heart
            size={20}
            strokeWidth={1.2}
            className="fill-[#e8a0b5]/10 text-[#e8a0b5]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mt-7 font-serif text-4xl font-light text-white sm:text-5xl lg:text-6xl"
        >
          For you,
          <br />
          <span className="italic text-[#e8a0b5]">
            Komal.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/35 sm:text-base"
        >
          If you ever wonder how special you are, come back here.
          I'll always have a little reminder waiting for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="mt-12"
        >
          <p className="font-serif text-xl italic text-white/50">
            "Some stories are worth writing again and again."
          </p>
        </motion.div>

        <div className="mx-auto mt-16 h-px max-w-3xl bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Made with love
          </p>

          <p className="text-[10px] text-white/20">
            Komal ♡
          </p>

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Always & Forever
          </p>
        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;