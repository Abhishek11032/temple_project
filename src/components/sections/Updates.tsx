import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock3 } from "lucide-react";

const updates = [
  {
    title: "Bhumi Pujan Ceremony",
    date: "15 June 2026",
    time: "09:00 AM",
    location: "Temple Premises",
    description:
      "The temple construction officially began with sacred Bhumi Pujan performed by respected priests and devotees.",
  },
  {
    title: "Shilanyas Ceremony",
    date: "20 June 2026",
    time: "10:30 AM",
    location: "Temple Premises",
    description:
      "The first foundation stone was laid with Vedic rituals and the blessings of devotees.",
  },
];
export default function Updates() {
  return (
    <section id="temple" className="bg-[#fffdf9] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">
            Latest Updates
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#4A1F1F]">
            Temple Activities
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {updates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#4A1F1F]">
                {item.title}
              </h3>

              <div className="mt-5 space-y-3 text-gray-600">

                <div className="flex items-center gap-3">
                  <CalendarDays size={18} className="text-amber-600" />
                  {item.date}
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-amber-600" />
                  {item.time}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-amber-600" />
                  {item.location}
                </div>

              </div>

              <p className="mt-6 leading-8 text-gray-700">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}