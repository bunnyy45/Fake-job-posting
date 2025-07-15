import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center px-4 h-screen transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20211217/original/pngtree-creative-recruitment-and-job-search-background-applying-for-giving-cv-competition-picture-image_1576670.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl bg-white/10 p-8 rounded-3xl shadow-lg backdrop-blur-md text-white">
        <span className="text-sm uppercase tracking-wide text-purple-200 bg-purple-700/50 px-3 py-1 rounded-full mb-2 inline-block">
          AI-Powered Detector
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow">
          Detect Fake Job Postings Instantly
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Paste or upload job postings and identify scams in seconds using our AI-powered detector.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("call-to-action")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 hover:scale-105 transition transform shadow-lg active:scale-95"
        >
          Get Started
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

export default HeroSection;
