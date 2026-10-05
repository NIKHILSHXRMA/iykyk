import { lazy, Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/Hero";
import MusicPlayer from "./components/MusicPlayer";

const Story = lazy(() => import("./components/Story"));
const Memories = lazy(() => import("./components/Memories"));
const LoveLetter = lazy(() => import("./components/LoveLetter"));
const Reasons = lazy(() => import("./components/Reasons"));
const Gallery = lazy(() => import("./components/Gallery"));
const FinalMessage = lazy(() => import("./components/FinalMessage"));
const Proposal = lazy(() => import("./components/Proposal"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    setStarted(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#08060a] text-white">
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {!started && (
          <Intro
            key="intro"
            onEnter={handleEnter}
          />
        )}
      </AnimatePresence>

      {started && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <FloatingHearts />

          <Navbar />

          <Hero />

          <Suspense fallback={null}>
            <Story />

            <Memories />

            <LoveLetter />

            <Reasons />

            <Gallery />

            <FinalMessage />

            <Proposal />

            <Footer />
          </Suspense>
        </motion.div>
      )}

      {started && (
        <MusicPlayer
          isPlaying={isPlaying}
          onToggle={toggleMusic}
        />
      )}
    </main>
  );
}

export default App;