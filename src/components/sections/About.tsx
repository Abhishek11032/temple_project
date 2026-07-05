import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="bg-[#FFF8F2] py-16 sm:py-20 lg:py-28 overflow-x-hidden w-full max-w-full"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12 lg:gap-16 w-full max-w-full">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative flex justify-center min-w-0 pb-8 sm:pb-10"
          >

            {/* Main Image */}

            <div className="relative w-full max-w-[430px] overflow-hidden rounded-[35px] shadow-2xl">

              <img
                src="/images/bhumi-puja.jpeg"
                alt=""
                className="
                w-full
                aspect-[430/560]
                object-cover
                object-top
                transition
                duration-700
                hover:scale-105
                "
              />

            </div>

            {/* Small Image */}

            <div className="
            absolute
            bottom-0
            right-[2%]
            bg-white
            p-2 sm:p-3
            rounded-2xl sm:rounded-3xl
            shadow-xl
            w-[28%]
            max-w-[176px]
            ">

              <img
                src="/images/left-side.jpeg"
                alt=""
                className="
                w-full
                aspect-[176/224]
                rounded-xl sm:rounded-2xl
                object-cover
                "
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="min-w-0 w-full max-w-full mt-10 lg:mt-0 break-words"
          >

            <p className="uppercase tracking-[6px] sm:tracking-[8px] text-amber-700 font-semibold text-sm sm:text-base">

              ABOUT TEMPLE

            </p>

            <h2
              className="
              mt-4 sm:mt-6
              text-[#4A1F1F]
              font-bold
              leading-tight

              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              "
            >

              Shri Khatu Shyam Ji

              <br />

              Temple Project

            </h2>

            <div className="mt-5 sm:mt-7 h-1 w-20 sm:w-28 rounded-full bg-amber-500"></div>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-gray-700">

              The sacred premises have long been home to an
              ancient Lord Shiva Temple, where devotees have
              worshipped with faith and devotion for years.

            </p>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-9 text-gray-700">

              A magnificent Shri Khatu Shyam Ji Temple is now
              being constructed within the same holy premises,
              preserving our spiritual heritage while creating
              a divine place for future generations.

            </p>

            {/* Cards */}

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5">

                <span className="text-xl sm:text-2xl">🛕</span>

                <h4 className="mt-2 font-semibold text-sm sm:text-base">

                  Ancient Shiva Temple

                </h4>

              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5">

                <span className="text-xl sm:text-2xl">🌸</span>

                <h4 className="mt-2 font-semibold text-sm sm:text-base">

                  Khatu Shyam Temple

                </h4>

              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5">

                <span className="text-xl sm:text-2xl">🙏</span>

                <h4 className="mt-2 font-semibold text-sm sm:text-base">

                  Spiritual Heritage

                </h4>

              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5">

                <span className="text-xl sm:text-2xl">❤️</span>

                <h4 className="mt-2 font-semibold text-sm sm:text-base">

                  Community Service

                </h4>

              </div>

            </div>

            <button
            onClick={() => navigate("/about")}
              className="
              mt-8 sm:mt-10
              bg-[#7A2E1D]
              hover:bg-[#5A2417]
              transition
              px-7 sm:px-9
              py-3 sm:py-4
              rounded-full
              text-white
              font-semibold
              text-sm sm:text-base
              "
            >

              Learn More

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}