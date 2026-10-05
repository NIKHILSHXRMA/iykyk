import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const memories = [
  {
    date: "THE BEGINNING",
    number: "01",
    title: "The moment I noticed you",
    text: "Some moments don't look special when they happen. Later, you realize they quietly changed everything.",
    image: "/photos/komal-01.jpg",
  },
  {
    date: "SOMEWHERE ALONG THE WAY",
    number: "02",
    title: "You became special",
    text: "Without even trying, you slowly became someone I started looking forward to.",
    image: "/photos/komal-03.jpg",
  },
  {
    date: "THE LITTLE THINGS",
    number: "03",
    title: "It's always the little things",
    text: "The conversations, the smiles, the random moments — somehow they all mean more than they should.",
    image: "/photos/komal-05.jpg",
  },
  {
    date: "TODAY",
    number: "04",
    title: "And here we are",
    text: "Maybe this isn't just another memory. Maybe it's the beginning of something beautiful.",
    image: "/photos/komal-08.jpg",
  },
];

function Memories() {
  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#08060a] px-5 py-24 sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d86b91]/10 blur-[70px]" />

      <div className="relative mx-auto mb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#e8a0b5]/50" />

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#e8a0b5]">
            Chapter Two
          </p>

          <Sparkles
            size={13}
            strokeWidth={1.3}
            className="text-[#e8a0b5]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl"
        >
          A few moments
          <br />
          <span className="italic text-[#e8a0b5]">
            worth remembering.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base"
        >
          Not every memory needs a photograph. Some simply stay with you.
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-20">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-20 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div className="relative">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-white/10 bg-[#110c12]">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />

                  <div className="absolute left-5 top-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 font-serif text-sm text-white">
                      {memory.number}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      Memory
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#e8a0b5]">
                  {memory.date}
                </p>

                <div className="mt-4 flex items-start gap-4">
                  <div className="hidden pt-2 sm:block">
                    <span className="font-serif text-4xl font-light text-white/15">
                      {memory.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
                      {memory.title}
                    </h3>

                    <div className="mt-5 h-px w-14 bg-[#e8a0b5]/40" />

                    <p className="mt-5 max-w-md text-sm leading-7 text-white/45 sm:text-base">
                      {memory.text}
                    </p>

                    <div className="mt-7 flex items-center gap-3 text-white/30">
                      <Heart
                        size={14}
                        strokeWidth={1.2}
                        className="text-[#e8a0b5]"
                      />

                      <span className="text-[9px] uppercase tracking-[0.25em]">
                        A memory with you
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center text-center"
      >
        <Heart
          size={18}
          strokeWidth={1.2}
          className="mb-5 text-[#e8a0b5]"
        />

        <p className="font-serif text-2xl italic text-white/70 sm:text-3xl">
          "And somehow, every memory feels better
          <br className="hidden sm:block" />
          when you're a part of it."
        </p>

        <div className="mt-8 h-12 w-px bg-linear-to-b from-[#e8a0b5]/50 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Memories;