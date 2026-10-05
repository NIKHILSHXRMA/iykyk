import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function LoveLetter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-[#0a070b] px-6 py-28 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8a0b5]/5 blur-[70px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <Sparkles
              size={15}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#e8a0b5]/70">
              A few words from my heart
            </span>

            <Sparkles
              size={15}
              strokeWidth={1.2}
              className="text-[#e8a0b5]"
            />
          </div>

          <h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
            A letter for you
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="relative rounded-4xl border border-white/10 bg-[#120c11] p-7 shadow-xl sm:p-12 lg:p-16"
        >
          <div className="absolute right-7 top-7 opacity-20">
            <Heart
              size={28}
              strokeWidth={1}
              className="text-[#e8a0b5]"
            />
          </div>

          <div className="mb-10">
            <p className="font-serif text-2xl italic text-[#e8a0b5]">
              Dear Komal,
            </p>
          </div>

          <div className="space-y-6 font-serif text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
            <p>
              I don't really know when it happened.
            </p>

            <p>
              Maybe it was one conversation, one smile, one random
              moment that I didn't think much about at the time.
              But somewhere along the way, you became someone I
              started caring about a little more than I expected.
            </p>

            <p>
              And that's the thing about you.
              You don't have to do anything extraordinary to be
              special. Somehow, just being you is enough.
            </p>

            <p>
              I love the little things — the way you smile, the way
              you talk, the little moments that probably mean nothing
              to anyone else but somehow stay with me.
            </p>

            <p>
              I could keep writing a hundred things about you,
              but maybe some feelings are better shown than explained.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="my-12 border-l border-[#e8a0b5]/40 pl-6 sm:pl-8"
          >
            <p className="font-serif text-xl italic leading-8 text-white/80 sm:text-2xl">
              "If someone asked me when you became important to me,
              I probably wouldn't know the exact answer."
            </p>
          </motion.div>

          <div className="space-y-6 font-serif text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
            <p>
              I just know that somewhere between all those little
              moments, you became a beautiful part of my thoughts.
            </p>

            <p>
              And today, I don't want to keep that feeling hidden
              behind words that I never say.
            </p>
          </div>

          <div className="mt-14 text-right">
            <p className="font-serif text-lg italic text-white/40">
              With a little courage,
            </p>

            <p className="mt-2 font-serif text-2xl italic text-[#e8a0b5]">
              Someone who really likes you ♡
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-white/10" />

            <Heart
              size={14}
              fill="currentColor"
              strokeWidth={1}
              className="text-[#e8a0b5]/60"
            />

            <div className="h-px w-16 bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveLetter;