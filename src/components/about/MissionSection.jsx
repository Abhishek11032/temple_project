import { motion } from "framer-motion";
import {
  BadgeCheck,
  ArrowRight,
  Flag,
  CheckCircle2,
} from "lucide-react";

const whyPoints = [
  "Khatu Shyam Ji represents faith, sacrifice and devotion.",
  "He is the giver of happiness, hope and strength.",
  "Millions of devotees have experienced his miracles and blessings.",
  "A place where every prayer is heard.",
];

const missionPoints = [
  "Daily Worship & Aarti",
  "Religious Events & Celebrations",
  "Charity Activities",
  "Community Service",
  "Spiritual Guidance",
  "Cultural Programs",
];

export default function MissionSection() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Content */}

              <div className="bg-[#4A1614] text-white p-6 sm:p-8 lg:p-10">

                <h2 className="text-3xl font-bold">
                  Why Khatu Shyam Ji?
                </h2>

                <div className="mt-8 space-y-5">

                  {whyPoints.map((item, index) => (

                    <div
                      key={index}
                      className="flex gap-4"
                    >

                      <BadgeCheck
                        size={20}
                        className="text-amber-400 mt-1 shrink-0"
                      />

                      <p className="text-gray-200 leading-7">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

                <button
                  className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-amber-500
                  px-6
                  py-3
                  font-semibold
                  transition
                  hover:bg-amber-600
                  "
                >

                  Read More

                  <ArrowRight size={18} />

                </button>

              </div>

              {/* Image */}

              <div
  className="
    relative
    h-60
    sm:h-72
    md:min-h-[350px]
  "
>

                <img
                  src="/images/corridor.jpeg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

               <div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    md:bg-gradient-to-r
    from-[#4A1614]/70
    to-transparent
  "
></div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-amber-100
            bg-white
            p-8
            lg:p-10
            shadow-xl
            "
          >

            <div className="flex items-center gap-2 text-amber-500">

              <Flag size={18} />

              <span className="uppercase tracking-[4px] text-sm font-semibold">
                Our Mission
              </span>

            </div>

            <h2 className="mt-3 text-5xl font-bold text-[#4A1614]">
              Our Mission
            </h2>

            <div className="mt-8 space-y-5">

              {missionPoints.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2
                    size={20}
                    className="text-amber-500 shrink-0"
                  />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            {/* Temple Illustration Placeholder */}

            <div
              className="
              absolute
              right-6
              bottom-0
              opacity-10
              "
            >

              <img
                src="/images/temple-outline.png"
                alt=""
                className="w-48"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}