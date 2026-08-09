import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function Updates() {
  return (
    <section
      id="temple"
      className="bg-gradient-to-b from-amber-50 via-white to-amber-50 py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[8px] text-amber-700">
            विशेष आयोजन
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4A1F1F] md:text-5xl">
            भूमि पूजन एवं शिलान्यास समारोह
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>
        </div>

        {/* Content */}

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">

          {/* Left Section - Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className=" w-full h-[50%] md:w-[50%] ml-0 md:ml-38 overflow-hidden rounded-3xl border-5 border-orange-300 bg-white shadow-xl">
              <img
                src="/images/swamiji.jpeg"
                alt="स्वामी आत्मानंद सरस्वती"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-2xl font-bold text-[#4A1F1F]">
                श्री श्री 1008 महामंडलेश्वर
              </h3>

              <p className="mt-2 text-xl font-semibold text-amber-700">
                स्वामी आत्मानंद सरस्वती
              </p>

              <p className="mt-2 text-gray-600">
                पीठाधीश्वर, नासिक मठ
              </p>
            </div>
          </motion.div>

          {/* Right Section - Details */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Bhumi Pujan Details */}

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 shadow-sm">

              <div className="flex items-center gap-3">
                <CalendarDays size={20} className="text-amber-600" />
                <span className="font-medium">
                  भूमि पूजन : 19 अप्रैल 2026
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <Clock3 size={20} className="text-amber-600" />
                <span className="font-medium">
                  समय : प्रातः 09:00 बजे
                </span>
              </div>

            </div>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">

              <p>
                खाटू श्याम मंदिर निर्माण कार्य का शुभारंभ
                <span className="font-semibold text-[#4A1F1F]">
                  {" "}श्री श्री 1008 महामंडलेश्वर स्वामी आत्मानंद
                  सरस्वती जी महाराज, पीठाधीश्वर नासिक मठ
                </span>
                {" "}के पावन कर-कमलों द्वारा संपन्न हुआ।
              </p>

              <p>
                दिनांक <strong>01 नवम्बर 2025</strong> को वैदिक
                मंत्रोच्चार एवं धार्मिक अनुष्ठानों के साथ मंदिर का
                <strong> शिलान्यास समारोह</strong> आयोजित किया गया,
                जिसमें बड़ी संख्या में श्रद्धालुओं ने सहभागिता की।
              </p>

              <p>
                इसके पश्चात दिनांक
                <strong> 19 अप्रैल 2026 </strong>
                को प्रातः
                <strong> 09:00 बजे </strong>
                मंदिर परिसर में विधि-विधान के साथ
                <strong> भूमि पूजन </strong>
                संपन्न हुआ, जिसके साथ मंदिर निर्माण कार्य का
                शुभ प्रारंभ हुआ।
              </p>

              <p>
                इन दोनों पावन आयोजनों ने मंदिर निर्माण की
                आधारशिला को आध्यात्मिक ऊर्जा, संतों के आशीर्वाद
                एवं भक्तों की श्रद्धा से सशक्त बनाया।
              </p>

              <p>
                यह अवसर मंदिर की गौरवशाली यात्रा का एक
                महत्वपूर्ण अध्याय बना, जिसने सेवा, श्रद्धा और
                सनातन संस्कृति के संरक्षण के संकल्प को और अधिक
                दृढ़ किया।
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}