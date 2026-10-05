import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Story",
    id: "story",
  },
  {
    name: "Memories",
    id: "memories",
  },
  {
    name: "Gallery",
    id: "gallery",
  },
  {
    name: "Proposal",
    id: "proposal",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#110c12]/75 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">

          {/* Logo */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex cursor-pointer items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8a0b5]/30 bg-[#e8a0b5]/5">
              <Heart
                size={14}
                strokeWidth={1.3}
                className="text-[#e8a0b5]"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-serif text-sm text-white">
                Komal
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer rounded-full px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/45 transition hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side */}

          <div className="flex items-center gap-3">

            <span className="hidden text-[8px] uppercase tracking-[0.25em] text-[#e8a0b5]/60 lg:block">
              Made with love
            </span>

            {/* Mobile menu button */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white md:hidden"
            >
              {menuOpen ? (
                <X size={17} />
              ) : (
                <Menu size={17} />
              )}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#110c12]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex cursor-pointer items-center justify-between rounded-2xl px-5 py-4 text-left text-xs uppercase tracking-[0.2em] text-white/55 transition hover:bg-white/5 hover:text-white"
                >
                  <span>{item.name}</span>

                  {item.id === "proposal" && (
                    <Heart
                      size={13}
                      className="text-[#e8a0b5]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;