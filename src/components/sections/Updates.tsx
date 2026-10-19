"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            मंदिर का पावन संकल्प
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4A1F1F] md:text-5xl">
            श्री खाटू श्याम जी मंदिर
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
          <Image
                src="/images/swamiji.jpeg"
                width={975}
                height={1600}
                sizes="(min-width: 768px) 50vw, 100vw"
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

            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-700">

              <p>
                खाटू श्याम मंदिर निर्माण कार्य का शुभारंभ
                <span className="font-semibold text-[#4A1F1F]">
                  {" "}श्री श्री 1008 महामंडलेश्वर स्वामी आत्मानंद
                  सरस्वती जी महाराज, पीठाधीश्वर नासिक मठ
                </span>
                {" "}के पावन कर-कमलों द्वारा संपन्न हुआ।
              </p>

              <p>
                श्री खाटू श्याम जी की भक्ति हमें श्रद्धा, प्रेम और सेवा के मार्ग पर चलने की प्रेरणा देती है।
                मंदिर का यह पावन संकल्प भक्तों के लिए ऐसा स्थल बनाने की भावना से जुड़ा है, जहाँ वे भक्ति
                और शांति के साथ बाबा श्याम का स्मरण कर सकें।
              </p>

              <p>
                यह मंदिर आस्था, भक्ति और सनातन संस्कृति के प्रति समर्पण का प्रतीक बने—यही इस प्रयास की
                भावना है। भक्तों की सहभागिता और संतों का आशीर्वाद इस संकल्प को निरंतर संबल देते हैं।
              </p>

              <p>
                मंदिर का उद्देश्य केवल निर्माण तक सीमित नहीं, बल्कि आने वाली पीढ़ियों को श्रद्धा, सेवा
                और सांस्कृतिक मूल्यों से जोड़ने की प्रेरणा भी है।
              </p>

              <p>
                आइए, बाबा श्याम के चरणों में श्रद्धा अर्पित करते हुए सेवा, प्रेम और भक्ति के इस भाव को
                अपने जीवन में अपनाएँ।
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
