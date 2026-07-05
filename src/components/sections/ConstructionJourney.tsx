import { motion } from "framer-motion";
import { Flower2, Hammer, Building2 } from "lucide-react";

const journey = [
  {
    title: "Bhumi Pujan",
    date: "Foundation Ceremony",
    icon: Flower2,
    image: "/images/bhumi-puja.jpeg",
    description:
      "The temple construction began with sacred Vedic rituals and Bhumi Pujan seeking divine blessings.",
  },
  {
    title: "Shilanyas",
    date: "First Stone Ceremony",
    icon: Hammer,
    image: "/images/left-side.jpeg",
    description:
      "The first foundation stone was placed in the presence of devotees and respected guests.",
  },
  {
    title: "Construction Started",
    date: "Current Stage",
    icon: Building2,
    image: "/images/Temple.png",
    description:
      "Construction work has officially started and the temple is gradually taking shape.",
  },
];

export default function ConstructionJourney() {
  return (
    <section 
      id="journey" 
      className="min-h-screen bg-white py-32 md:py-40 lg:py-48 overflow-hidden flex items-center justify-center"
    >
      <div className="w-full max-w-[1350px] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center justify-items-center">
          <p className="text-sm font-semibold uppercase tracking-[8px] text-amber-700">
            Temple Journey
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#4A1F1F]">
            Construction Journey
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>
          <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
            Follow the sacred journey of the temple from the
            auspicious Bhumi Pujan to the ongoing construction.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="
                  group
                  w-full
                  max-w-[390px]
                  overflow-hidden
                  rounded-3xl
                  bg-[#FFF8F2]
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                  flex
                  flex-col
                  mx-auto
                "
              >
                {/* Image */}
                <div className="overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-64
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A2E1D] text-white shadow-lg flex-shrink-0">
                    <Icon size={30} />
                  </div>

                  <p className="mt-5 text-sm font-medium text-amber-700">
                    {item.date}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#4A1F1F]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600 flex-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}