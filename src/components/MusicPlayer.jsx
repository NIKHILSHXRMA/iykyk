import { useEffect, useRef, useState } from "react";
import { Disc3, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

function MusicPlayer({ isPlaying, onToggle }) {
  const audioRef = useRef(null);

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio
        .play()
        .then(() => {
          console.log("🎵 Music started");
        })
        .catch((error) => {
          console.error("❌ Music error:", error);
        });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/romantic-song.mp3"
        loop
        preload="auto"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-6 right-5 z-50"
      >
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#110b10]/85 p-2 pl-3 shadow-2xl backdrop-blur-xl">

          {/* Disc */}

          <motion.div
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e8a0b5]/30 bg-[#160c12]"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying
                ? {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : {}
            }
          >
            <Disc3
              size={19}
              strokeWidth={1.3}
              className="text-[#e8a0b5]"
            />

            <span className="absolute h-1.5 w-1.5 rounded-full bg-[#e8a0b5]" />
          </motion.div>

          {/* Song Info */}

          <div className="hidden sm:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#e8a0b5]">
              Playing for
            </p>

            <p className="text-xs text-white/80">
              Komal ♡
            </p>
          </div>

          {/* Play Pause */}

          <button
            onClick={onToggle}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#e8a0b5] text-[#160b10] transition hover:scale-105"
          >
            {isPlaying ? (
              <Pause size={15} fill="currentColor" />
            ) : (
              <Play size={15} fill="currentColor" />
            )}
          </button>

          {/* Mute */}

          <button
            onClick={handleMute}
            className="hidden h-8 w-8 cursor-pointer items-center justify-center text-white/50 transition hover:text-white sm:flex"
          >
            {isMuted ? (
              <VolumeX size={16} />
            ) : (
              <Volume2 size={16} />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default MusicPlayer;