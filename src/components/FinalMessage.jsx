import { motion } from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";

function FinalMessage() {
  const scrollToProposal = () => {
    document.getElementById("proposal")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="final-message"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08060a] px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8a0b5]/6 blur-[70px]" />

      <motion.div
        className="absolute left-[15%] top-[25%] text-[#e8a0b5]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles size={18} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[35%] text-[#e8a0b5]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Sparkles size={14} strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-[#e8a0b5]/30" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#e8a0b5]/60">
            One last thing
          </span>

          <div className="h-px w-10 bg-[#e8a0b5]/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-7xl"
        >
          I've written everything
          <br />
          <span className="italic text-[#e8a0b5]">
            I could put into words.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/40 sm:text-lg"
        >
          But there is one thing I've been wanting to say.
          Something that doesn't really need a long explanation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="my-12 flex justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e8a0b5]/20 bg-[#e8a0b5]/5">
            <Heart
              size={25}
              fill="currentColor"
              strokeWidth={1}
              className="text-[#e8a0b5]"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="font-serif text-xl italic text-white/70 sm:text-2xl"
        >
          So, Komal...
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToProposal}
          className="mx-auto mt-8 flex cursor-pointer items-center gap-3 rounded-full border border-[#e8a0b5]/30 bg-[#e8a0b5]/5 px-7 py-4 text-sm text-[#e8a0b5] transition-colors duration-300 active:bg-[#e8a0b5]/10"
        >
          <span>There's one last thing...</span>

          <ArrowDown size={16} />
        </motion.button>
      </div>
    </section>
  );
}

export default FinalMessage;