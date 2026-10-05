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
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8a0b5]/6 blur-[150px]" />

      {/* Floating Sparkles */}
      <motion.div
        className="absolute left-[15%] top-[25%] text-[#e8a0b5]/30"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={18} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[35%] text-[#e8a0b5]/30"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={14} strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Small Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-[#e8a0b5]/30" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-[#e8a0b5]/60">
            One last thing
          </span>

          <div className="h-px w-10 bg-[#e8a0b5]/30" />
        </motion.div>

        {/* Main Text */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-7xl"
        >
          I've written everything
          <br />
          <span className="italic text-[#e8a0b5]">
            I could put into words.
          </span>
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/40 sm:text-lg"
        >
          But there is one thing I've been wanting to say.
          Something that doesn't really need a long explanation.
        </motion.p>

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            type: "spring",
          }}
          className="my-12 flex justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e8a0b5]/20 bg-[#e8a0b5]/5"
          >
            <Heart
              size={25}
              fill="currentColor"
              strokeWidth={1}
              className="text-[#e8a0b5]"
            />
          </motion.div>
        </motion.div>

        {/* Last Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-serif text-xl italic text-white/70 sm:text-2xl"
        >
          So, Komal...
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToProposal}
          className="group mx-auto mt-8 flex cursor-pointer items-center gap-3 rounded-full border border-[#e8a0b5]/30 bg-[#e8a0b5]/5 px-7 py-4 text-sm text-[#e8a0b5] backdrop-blur-sm transition-all duration-500 hover:border-[#e8a0b5]/60 hover:bg-[#e8a0b5]/10"
        >
          <span>There's one last thing...</span>

          <ArrowDown
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.button>

      </div>
    </section>
  );
}

export default FinalMessage;