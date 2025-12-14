import { useState } from "react";
import { Play } from "lucide-react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-start pt-20 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1NTcyNjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Text */}
      <div className="text-center max-w-5xl mb-8">
        <h1 className="text-6xl mb-4 text-black">
          Mostra a tutti il tuo valore!
        </h1>
        <p className="text-xl text-black mb-8">
          Noi di MeritumLab faremo in modo che il MERITO sia sempre al primo
          posto.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors shadow-lg">
          INIZIA SUBITO!
        </button>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-4xl mt-12">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(251, 207, 121, 0.9) 0%, rgba(248, 196, 113, 0.9) 100%)",
            padding: "3rem",
            minHeight: "300px",
          }}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjU1NjE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Video preview"
                className="w-full h-64 object-cover"
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all group"
                >
                  <div className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play
                      className="w-10 h-10 text-gray-800 ml-1"
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
