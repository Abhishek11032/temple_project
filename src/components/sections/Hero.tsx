import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setShowScrollIcon(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image */}

      <img
        src="/images/Temple.png"
        alt="Temple"
        className="
          w-full
          h-[70vh]
          sm:h-[75vh]
          md:h-[85vh]
          lg:h-screen
          object-cover
        "
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}

      <div className="absolute inset-0 flex  items-center justify-center px-5 sm:px-8">
        <div className="max-w-5xl text-center text-white">
          {/* Welcome */}

          <motion.p
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[8px]
              md:tracking-[10px]
              text-amber-300
              text-xs
              sm:text-sm
              md:text-base
            "
          >
            Welcome
          </motion.p>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              mt-4
              font-bold
              leading-tight

              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Shri Khatu Shyam Ji
            <br />
            Temple
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
              mt-5
              sm:mt-7
              mx-auto
              max-w-3xl
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-gray-400
              leading-relaxed
            "
          >
            A divine place where faith, devotion and tradition unite.
            <br className="hidden sm:block" />
            Discover the journey of our upcoming temple.
          </motion.p>

          {/* Button */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <button
              onClick={() => navigate("/home/journey")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Explore Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      {showScrollIcon && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white">
          <ChevronDown
            size={36}
            className="text-amber-300 animate-bounce"
            strokeWidth={2.5}
          />
          <span className="mt-2 text-xs tracking-[3px] uppercase">Scroll</span>
        </div>
      )}
    </section>
  );
}
