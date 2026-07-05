import { motion } from "framer-motion";
import { MapPin, Landmark, Mountain, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ExploreJourney() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFDF8] min-h-screen">

      {/* Hero Section */}

      <section
        className="relative h-[60vh] flex items-center justify-center"
      >
        <img
          src="/images/Temple.png"
          alt="Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-5">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Explore Our Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-5 max-w-3xl mx-auto text-lg text-gray-200"
          >
            Discover the divine location where spirituality,
            tradition and faith come together.
          </motion.p>

        </div>

      </section>

      {/* About */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#5A2417]"
        >
          A Sacred Beginning
        </motion.h2>

        <p className="mt-8 text-lg leading-9 text-gray-700 text-center max-w-5xl mx-auto">

          Shri Khatu Shyam Ji Temple is being developed in a spiritually
          blessed region located nearly <strong>50 kilometers from Varanasi</strong>.

          This holy place is already known for an ancient Lord Shiva Temple,
          believed by devotees to have existed for nearly a thousand years.

          The upcoming Khatu Shyam Ji Temple is envisioned to become another
          sacred destination where devotees can experience peace,
          devotion and the blessings of both Lord Shiva and Shri Khatu Shyam Ji.

        </p>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-white shadow-lg p-8 text-center"
          >
            <MapPin
              size={50}
              className="mx-auto text-orange-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Near Varanasi
            </h3>

            <p className="mt-4 text-gray-600">
              Situated approximately 50 km from Varanasi,
              making it easily accessible for pilgrims
              visiting the spiritual capital of India.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-white shadow-lg p-8 text-center"
          >
            <Landmark
              size={50}
              className="mx-auto text-orange-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Ancient Shiva Temple
            </h3>

            <p className="mt-4 text-gray-600">
              The temple is being established near a revered
              Lord Shiva Temple that is traditionally believed
              to have a history spanning nearly one thousand years.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-white shadow-lg p-8 text-center"
          >
            <Mountain
              size={50}
              className="mx-auto text-orange-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Divine Environment
            </h3>

            <p className="mt-4 text-gray-600">
              Surrounded by nature, spirituality and devotion,
              this sacred place offers a peaceful atmosphere
              for every devotee.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Quote */}

      <section className="bg-[#5A2417] py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-white text-4xl font-bold">

            "Where Lord Shiva Resides,
            <br />
            Devotion Blossoms."

          </h2>

          <p className="mt-8 text-gray-200 text-lg">

            This sacred land is a symbol of faith,
            tradition and spiritual heritage.

          </p>

        </div>

      </section>

      {/* Back */}

      <section className="py-16 text-center">

        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-3"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

      </section>

    </div>
  );
}