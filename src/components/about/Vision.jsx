import { motion } from "framer-motion";
import { Heart, Sparkles, HandHelping } from "lucide-react";

const cards = [
  {
    icon: <Heart size={34} />,
    title: "Faith",
    text: "Strengthening the faith of every devotee through worship, prayer and divine blessings.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Devotion",
    text: "Creating a peaceful spiritual atmosphere where every visitor experiences true devotion.",
  },
  {
    icon: <HandHelping size={34} />,
    title: "Service",
    text: "Serving society through religious, cultural and charitable activities inspired by Sanatan values.",
  },
];

export default function Vision() {
  return (
    <section className="py-24 bg-[#FFFDF8]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/vision2.png"
              alt=""
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-amber-500 font-semibold">
              Our Vision
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4A1F13]">
              Preserving Faith
              <br />
              Inspiring Generations
            </h2>

            <div className="mt-8 flex items-center">
              <span className="w-20 h-[2px] bg-amber-500"></span>
              <span className="mx-4 text-amber-500 text-2xl">❀</span>
              <span className="w-20 h-[2px] bg-amber-500"></span>
            </div>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              Our vision is to establish Shri Khatu Shyam Temple as
              a sacred destination where spirituality, culture,
              and devotion unite.

              Through this temple, we aspire to preserve Sanatan
              traditions while inspiring future generations to
              remain connected with faith, values and service.

            </p>

          </motion.div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >

              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto">

                {card.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#4A1F13]">

                {card.title}

              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                {card.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}