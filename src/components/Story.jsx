import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#08060a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-20"
    >
      {/* Ambient Glow */}

      <div className="pointer-events-none absolute -left-37.5 top-[20%] h-87.5 w-87.5 rounded-full bg-[#b43d68]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-37.5 -right-25 h-87.5 w-87.5 rounded-full bg-[#70345e]/10 blur-[130px]" />

      {/* Main Container */}

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <Sparkles
              size={13}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#a9959e]">
              Chapter One
            </span>

            <Sparkles
              size={13}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />
          </div>

          <h2 className="font-serif text-5xl font-normal italic text-[#fff5f8] sm:text-6xl md:text-7xl">
            How it all began
          </h2>

          <div className="mx-auto mt-7 h-px w-16 bg-[#e8a0b5]/50" />
        </motion.div>

        {/* Story Grid */}

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* LEFT — PHOTO */}

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative Border */}

            <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#e8a0b5]/15" />

            <div className="relative aspect-4/5 overflow-hidden bg-[#120b10]">

              <img
                src="/public/photos/komal-05.jpg"
                alt="Komal"
                className="h-full w-full object-cover transition duration-1000 hover:scale-105"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-[#08060a]/60 via-transparent to-transparent" />

              {/* Small Heart */}

              <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                <Heart
                  size={16}
                  strokeWidth={1.2}
                  className="text-[#e8a0b5]"
                />
              </div>
            </div>

            {/* Number */}

            <span className="absolute -right-4 -top-8 font-serif text-6xl italic text-white/4 sm:-right-8 sm:text-8xl">
              01
            </span>
          </motion.div>

          {/* RIGHT — TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#e8a0b5]">
              Dear Komal,
            </p>

            <h3 className="max-w-xl font-serif text-4xl font-normal leading-tight text-[#fff5f8] sm:text-5xl">
              Maybe you don't realize
              <span className="text-[#e8a0b5]"> how special you are.</span>
            </h3>

            <div className="mt-8 space-y-5 text-sm font-light leading-8 text-[#a9959e] sm:text-base">

              <p>
                There are people who simply enter your life,
                and then there are people who quietly change
                the way you see it.
              </p>

              <p>
                Somewhere along the way, you became one of
                those people for me.
              </p>

              <p>
                And honestly, I don't know exactly when it
                happened. Maybe it was a conversation,
                maybe a smile, or maybe it was just one of
                those little moments that didn't seem
                important at the time.
              </p>

            </div>

            {/* Quote */}

            <div className="mt-10 border-l border-[#e8a0b5]/40 pl-5">
              <p className="font-serif text-lg italic leading-7 text-white/75">
                "Some people become a beautiful part of
                your story before you even realize
                they're writing it."
              </p>
            </div>

            {/* Signature */}

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 bg-[#e8a0b5]/40" />

              <span className="font-serif text-sm italic text-white/40">
                — Someone who thinks you're pretty special
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom transition */}

        <motion.div
          className="mt-28 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-16 w-px bg-linear-to-b from-[#e8a0b5]/40 to-transparent" />

          <span className="mt-3 text-[8px] uppercase tracking-[0.4em] text-white/20">
            And then...
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Story;