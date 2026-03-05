import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start 
                 pt-16 px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), 
        url('https://images.unsplash.com/photo-1606836591695-4d58a73eba1e')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Text */}
      <div className="text-center max-w-3xl md:max-w-4xl lg:max-w-5xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-bold mb-4 text-black"
        >
          Mostra a tutti il tuo valore!
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl 
                      text-black mb-6 md:mb-8"
        >
          Noi di MeritumLab faremo in modo che il MERITO sia sempre al primo
          posto.
        </p>

        <button
          onClick={() => navigate("/Quiz")}
          className="px-6 py-3 md:px-8 md:py-4 
                     bg-yellow-400 text-black rounded-full 
                     hover:bg-yellow-500 transition-colors 
                     shadow-lg text-sm md:text-base"
        >
          INIZIA SUBITO!
        </button>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl mt-12">
        <div
          className="relative rounded-2xl md:rounded-3xl 
                     overflow-hidden shadow-2xl 
                     p-6 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,207,121,0.9) 0%, rgba(248,196,113,0.9) 100%)",
          }}
        >
          <div className="relative w-full mx-auto">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="Video preview"
                className="w-full aspect-video object-cover"
              />

              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center 
                             bg-black/30 hover:bg-black/40 
                             transition-all group"
                >
                  <div
                    className="w-14 h-14 md:w-20 md:h-20 
                                  rounded-full bg-white/90 
                                  flex items-center justify-center 
                                  group-hover:scale-110 
                                  transition-transform shadow-lg"
                  >
                    <Play
                      className="w-6 h-6 md:w-10 md:h-10 text-gray-800 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
