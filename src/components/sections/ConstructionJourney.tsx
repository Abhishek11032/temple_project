import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const journey = [
  {
    slug: "bhumi-pujan",
    title: "भूमि पूजन",
    date: "शुभ भूमि पूजन समारोह",
    icon: Flower2,
    image: "/images/bhumi-puja.jpeg",
    description:
      "श्री खाटू श्याम मंदिर निर्माण का शुभारंभ वैदिक मंत्रोच्चार, हवन एवं भूमि पूजन के साथ भगवान श्याम बाबा के आशीर्वाद की कामना करते हुए किया गया।",
  },
  {
    slug: "janmotsav",
    title: "खाटू श्याम जन्मोत्सव",
    date: "वार्षिक जन्मोत्सव",
    icon: Flower2,
    image: "/images/janmotsav.png",
    description:
      "श्री खाटू श्याम जन्मोत्सव भक्तिभाव के साथ मनाया गया, जिसमें भजन-कीर्तन, आरती, प्रसाद वितरण एवं श्रद्धालुओं की उत्साहपूर्ण सहभागिता रही।",
  },
  {
    slug: "ekadashi",
    title: "फाल्गुन एकादशी समारोह",
    date: "वार्षिक धार्मिक आयोजन",
    icon: Flower2,
    image: "/images/Temple.png", // Apni Ekadashi event ki image ka path de dena
    description:
      "फाल्गुन एकादशी के पावन अवसर पर भजन-कीर्तन, विशेष आरती, प्रसाद वितरण एवं विशाल भंडारे का आयोजन श्रद्धा और भक्तिभाव के साथ संपन्न हुआ।",
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
            Mahotsav
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#4A1F1F]">
            Sacred Celebrations
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>
          <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
            Relive the memorable spiritual events and celebrations organized by
            Shri Khatu Shyam Temple Trust with the blessings of Shyam Baba.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                to={`/gallery/${item.slug}`}
                className="block w-full max-w-[390px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  className="
            group
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
            cursor-pointer
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A2E1D] text-white shadow-lg">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
