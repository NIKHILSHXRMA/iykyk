import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Your smile",
    text: "There is something about your smile that can make an ordinary moment feel a little more beautiful.",
  },
  {
    number: "02",
    title: "The way you are",
    text: "You never have to pretend to be someone else. Being yourself is already more than enough.",
  },
  {
    number: "03",
    title: "The little things",
    text: "It's the tiny things you probably don't even notice that somehow stay in my mind.",
  },
  {
    number: "04",
    title: "Your presence",
    text: "Some people simply make things feel better by being around. You're one of those people.",
  },
  {
    number: "05",
    title: "Simply you",
    text: "And after all the reasons I could write, the simplest one is still my favourite — you're you.",
  },
];

function Reasons() {
  return (
    <section
      id="reasons"
      className="relative overflow-hidden bg-[#08060a] px-6 py-28 sm:px-10 lg:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8a0b5]/5 blur-[70px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <Sparkles
              size={15}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#e8a0b5]/70">
              There are many
            </span>

            <Sparkles
              size={15}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />
          </div>

          <h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
            Why you?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            I could probably write a hundred reasons.
            These are just a few of the ones that came to mind first.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#110b10]/90 p-7 transition-colors duration-200 hover:border-[#e8a0b5]/25 ${
                index === 0 || index === 4
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="font-serif text-4xl text-white/8 transition-colors duration-200 group-hover:text-[#e8a0b5]/20">
                  {reason.number}
                </span>

                <Heart
                  size={18}
                  strokeWidth={1.2}
                  className="text-[#e8a0b5]/40 transition-colors duration-200 group-hover:text-[#e8a0b5]"
                />
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="font-serif text-2xl text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                  {reason.text}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#e8a0b5] transition-[width] duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-lg italic text-white/35">
            And honestly...
          </p>

          <p className="mt-2 font-serif text-2xl text-[#e8a0b5]/80">
            I could keep going. ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Reasons;