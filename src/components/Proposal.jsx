import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Stars } from "lucide-react";

function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 220) - 110;
    const randomY = Math.floor(Math.random() * 160) - 80;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  return (
    <section
      id="proposal"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08060a] px-5 py-28"
    >
      {/* Background glows */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-150600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8a0b5]/10 blur-[160px]" />

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-pink-500/5 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-40 w-40 rounded-full bg-purple-500/5 blur-[100px]" />

      {/* Floating stars */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[15%] top-[20%] text-[#e8a0b5]/40"
      >
        <Sparkles size={20} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[15%] text-[#e8a0b5]/30"
      >
        <Stars size={24} strokeWidth={1} />
      </motion.div>

      {/* Main content */}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        <AnimatePresence mode="wait">

          {!accepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >

              {/* Chapter */}

              <div className="mb-8 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#e8a0b5]/40" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8a0b5]">
                  The Question
                </p>

                <Heart
                  size={13}
                  strokeWidth={1.2}
                  className="text-[#e8a0b5]"
                />

                <span className="h-px w-10 bg-[#e8a0b5]/40" />
              </div>

              {/* Heart */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#e8a0b5]/20 bg-[#e8a0b5]/5"
              >
                <Heart
                  size={30}
                  strokeWidth={1}
                  className="fill-[#e8a0b5]/10 text-[#e8a0b5]"
                />
              </motion.div>

              {/* Heading */}

              <h2 className="font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-8xl">
                Komal,
                <br />
                <span className="italic text-[#e8a0b5]">
                  I have a question.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                Out of all the people I could have met, somehow life brought
                me to you. And honestly, I wouldn't change that for anything.
              </p>

              <p className="mt-10 font-serif text-3xl font-light text-white sm:text-4xl">
                Will you be mine?
              </p>

              {/* Buttons */}

              <div className="relative mx-auto mt-12 flex min-h-17.5 max-w-md items-center justify-center gap-5">

                <motion.button
                  type="button"
                  onClick={() => setAccepted(true)}
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#e8a0b5] px-8 py-4 text-sm font-medium text-[#160b10] shadow-[0_0_40px_rgba(232,160,181,0.15)] transition"
                >
                  <Heart
                    size={16}
                    className="transition group-hover:fill-current"
                  />

                  Yes, I will
                </motion.button>

                <motion.button
                  type="button"
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  animate={{
                    x: noPosition.x,
                    y: noPosition.y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white/50 backdrop-blur-xl transition hover:text-white"
                >
                  No
                </motion.button>

              </div>

              <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
                Think carefully ♡
              </p>

            </motion.div>
          ) : (

            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >

              {/* Celebration heart */}

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                }}
                className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#e8a0b5]/30 bg-[#e8a0b5]/10 shadow-[0_0_80px_rgba(232,160,181,0.15)]"
              >
                <Heart
                  size={38}
                  strokeWidth={1}
                  className="fill-[#e8a0b5]/20 text-[#e8a0b5]"
                />
              </motion.div>

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8a0b5]">
                She said yes ♡
              </p>

              <h2 className="mt-6 font-serif text-6xl font-light leading-none text-white sm:text-7xl lg:text-9xl">
                You said
                <br />
                <span className="italic text-[#e8a0b5]">
                  yes.
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-xl font-serif text-xl italic leading-8 text-white/60 sm:text-2xl">
                "And suddenly, all the little moments that brought us here
                feel completely worth it."
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="mt-12"
              >
                <p className="font-serif text-2xl text-white/80">
                  Forever starts with a little yes.
                </p>

                <div className="mt-6 flex justify-center">
                  <Heart
                    size={16}
                    className="fill-[#e8a0b5] text-[#e8a0b5]"
                  />
                </div>
              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}

export default Proposal;