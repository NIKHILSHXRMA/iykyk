import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Memories from "./components/Memories";
import LoveLetter from "./components/LoveLetter";
import Reasons from "./components/Reasons";
import Gallery from "./components/Gallery";
import FinalMessage from "./components/FinalMessage";
import Proposal from "./components/Proposal";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    console.log("❤️ Open My Heart clicked");

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
            duration: 1,
            ease: "easeOut",
          }}
        >

          <FloatingHearts />

          <Navbar />

          <Hero />

          <Story />

          <Memories />

          <LoveLetter />

          <Reasons />

          <Gallery />

          <FinalMessage />

          <Proposal />

          <Footer />

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