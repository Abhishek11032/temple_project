import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] overflow-hidden">
      {/* Background Image */}

      <img
        src="/images/about-hero.jpeg"
        alt="About Khatu Shyam Temple"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0  bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

      {/* Breadcrumb */}

      <div className="absolute top-5 right-5 md:top-8 md:right-12 flex items-center gap-2 text-xs sm:text-sm text-white">
<Link
  to="/#home"
  className="w-full inline-flex cursor-pointer hover:text-amber-300 transition"
>
  Home
</Link>
        <ChevronRight size={18} />

        <span className="text-amber-300">About</span>
      </div>

      {/* Content */}

      <div className="relative h-full max-w-7xl mx-auto flex items-center px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl pt-8 sm:pt-0">
          <motion.p
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
uppercase
tracking-[4px]
sm:tracking-[6px]
md:tracking-[8px]
text-amber-300
text-xs
sm:text-sm
md:text-base
"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              mt-5
              text-white
              font-bold
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            About Shri
            <br />
            Khatu Shyam Temple
          </motion.h1>

          {/* Decorative Line */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ delay: 0.7 }}
            className="mt-6 sm:mt-8 h-[2px] w-28 sm:w-44 md:w-[180px] bg-amber-400"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
mt-6
sm:mt-8
max-w-2xl
text-sm
sm:text-base
md:text-xl
leading-7
md:leading-8
text-gray-200
"
          >
            A divine initiative dedicated to preserving Sanatan Dharma,
            spreading devotion, and creating a sacred place where every devotee
            experiences peace, faith, and the blessings of Shri Khatu Shyam Ji.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 sm:mt-4 flex items-center"
          >
            <span className="w-10 sm:w-16 md:w-24 h-[2px] bg-amber-400"></span>

            <span className="mx-3 sm:mx-4 text-amber-400 text-xl sm:text-2xl">
              ❀
            </span>

            <span className="w-10 sm:w-16 md:w-24 h-[2px] bg-amber-400"></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
