import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Landmark, Flower2, HeartHandshake, HandHelping } from "lucide-react";

export default function About() {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#FFF8F2] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex w-full min-w-0 justify-center pb-8 sm:pb-10"
          >
            {/* Main Image */}

            <div className="relative w-full max-w-[430px] overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src="/images/bhumi-pujan.jpeg"
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

            <div
              className="
            absolute
            bottom-0
            right-[2%]
            bg-white
            p-2 sm:p-3
            rounded-2xl sm:rounded-3xl
            shadow-xl
            w-[28%]
            max-w-[176px]
            "
            >
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 flex w-full min-w-0 flex-col items-center justify-center break-words text-center lg:mt-0"
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

            <div className="mt-5 sm:mt-7 h-1 w-20 sm:w-28 rounded-full bg-amber-500 flex-row items-center"></div>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-gray-700">
              एक सहस्राब्दी (एक हजार वर्ष) प्राचीन शिव मंदिर परिसर में, जहाँ
              तालाब की खुदाई के दौरान स्वयंभू शिवलिंग प्रकट हुए थे, उसी पवित्र
              स्थल पर अब महादेव के साथ खाटू श्याम — कलयुग के अवतार, भक्तनहितकारी
              — माँ दुर्गा और बजरंगबली के भव्य एवं दिव्य मंदिरों का निर्माण
              कार्य प्रारंभ होने जा रहा है। यह पावन स्थल श्रद्धा, भक्ति और
              दिव्यता का अद्भुत संगम बनेगा, जहाँ सनातन संस्कृति की ज्योति सदा
              प्रज्वलित रहेगी।
            </p>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-9 text-gray-700">
              A magnificent Shri Khatu Shyam Ji Temple is now being constructed
              within the same holy premises, preserving our spiritual heritage
              while creating a divine place for future generations.
            </p>

            {/* Cards */}

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <Landmark
                  size={34}
                  className="text-[#7A2E1D]"
                  strokeWidth={2}
                />

                <h4 className="mt-4 font-semibold text-[#4A1F1F] text-sm sm:text-base">
                  Ancient Shiva Temple
                </h4>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <Flower2 size={34} className="text-[#7A2E1D]" strokeWidth={2} />

                <h4 className="mt-4 font-semibold text-[#4A1F1F] text-sm sm:text-base">
                  Khatu Shyam Temple
                </h4>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <HeartHandshake
                  size={34}
                  className="text-[#7A2E1D]"
                  strokeWidth={2}
                />

                <h4 className="mt-4 font-semibold text-[#4A1F1F] text-sm sm:text-base">
                  Spiritual Heritage
                </h4>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <HandHelping
                  size={34}
                  className="text-[#7A2E1D]"
                  strokeWidth={2}
                />

                <h4 className="mt-4 font-semibold text-[#4A1F1F] text-sm sm:text-base">
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
