import { motion } from "framer-motion";

export default function WhyKhatuShyam() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-20 lg:py-28">

      {/* Background Pattern */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            {/* Small Heading */}

            <p className="uppercase tracking-[8px] text-amber-500 font-semibold text-sm">

              Why Khatu Shyam Ji?

            </p>

            {/* Heading */}

            <h2
              className="
                mt-5
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-[#4A1F13]
                leading-tight
              "
            >
              A Symbol of
              <br />
              Faith &
              <span className="text-amber-500"> Devotion</span>
            </h2>

            {/* Divider */}

            <div className="mt-8 flex items-center">

              <span className="h-[2px] w-16 bg-amber-400"></span>

              <span className="mx-4 text-2xl text-amber-400">

                ❀

              </span>

              <span className="h-[2px] w-16 bg-amber-400"></span>

            </div>

            {/* Paragraph */}

            <p
              className="
                mt-8
                max-w-xl
                text-gray-600
                text-lg
                leading-9
              "
            >
              Shri Khatu Shyam Ji is worshipped as the
              embodiment of compassion, courage and
              unconditional devotion.

              Millions of devotees seek His blessings
              for peace, prosperity and strength in every
              phase of life.

            </p>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="/images/vision2.png"
              alt="Khatu Shyam Ji"
              className="
                w-full
                rounded-[30px]
                object-cover
                shadow-2xl
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}