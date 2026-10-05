import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photos = [
  {
    image: "/photos/komal-01.jpg",
    title: "That smile",
    text: "The kind of smile that stays in my mind.",
  },
  {
    image: "/photos/komal-02.jpg",
    title: "Beautifully you",
    text: "You don't have to try to be special. You just are.",
  },
  {
    image: "/photos/komal-03.jpg",
    title: "A little moment",
    text: "Some moments deserve to be remembered forever.",
  },
  {
    image: "/photos/komal-09.jpg",
    title: "The way you are",
    text: "There is something about you that words can't explain.",
  },
  {
    image: "/photos/komal-05.jpg",
    title: "My favourite view",
    text: "If I had to choose one view to keep looking at, it would be you.",
  },
  {
    image: "/photos/komal-06.jpg",
    title: "Simply Komal",
    text: "No filters. No explanations. Just you.",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#08060a] px-5 py-32 sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-[#e8a0b5]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#e8a0b5]/40" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8a0b5]">
              Chapter Three
            </p>

            <Sparkles
              size={13}
              strokeWidth={1.3}
              className="text-[#e8a0b5]"
            />

            <span className="h-px w-10 bg-[#e8a0b5]/40" />
          </div>

          <h2 className="font-serif text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
            Moments I could
            <br />
            <span className="italic text-[#e8a0b5]">
              look at forever.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            A few pictures, a thousand feelings, and one person who makes
            everything a little more beautiful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1.15}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            navigation={{
              prevEl: ".gallery-prev",
              nextEl: ".gallery-next",
            }}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 1.2,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.6,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 40,
              },
            }}
            className="gallery-swiper overflow-visible!"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={photo.image}>
                <div className="group relative mx-auto aspect-3/4 max-w-97.5 overflow-hidden rounded-3xl border border-white/10 bg-[#110c12] shadow-2xl">

                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#e8a0b5]">
                      A little memory
                    </p>

                    <h3 className="font-serif text-3xl font-light text-white">
                      {photo.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/50">
                      {photo.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <Heart
                        size={13}
                        strokeWidth={1.2}
                        className="text-[#e8a0b5]"
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                        Komal ♡
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="gallery-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#110c12]/80 text-white/60 backdrop-blur-xl transition hover:scale-110 hover:text-white lg:flex"
          >
            <ChevronLeft size={20} strokeWidth={1.2} />
          </button>

          <button
            type="button"
            className="gallery-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#110c12]/80 text-white/60 backdrop-blur-xl transition hover:scale-110 hover:text-white lg:flex"
          >
            <ChevronRight size={20} strokeWidth={1.2} />
          </button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
            Drag to explore
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;