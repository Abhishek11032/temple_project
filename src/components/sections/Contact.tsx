import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF8F2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">
            Contact
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#4A1F1F]">
            Visit The Temple
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#7A2E1D] text-white flex items-center justify-center">
                  <MapPin />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#4A1F1F]">
                    Temple Address
                  </h4>

                  <p className="mt-2 text-gray-600 leading-7">
                    Village Sarsara Khas, Near barsethi railway station, District Jaunpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#7A2E1D] text-white flex items-center justify-center">
                  <Phone />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#4A1F1F]">Phone</h4>

                  <p className="mt-2 text-gray-600">+91 9876543210</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#7A2E1D] text-white flex items-center justify-center">
                  <Mail />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#4A1F1F]">Email</h4>

                  <p className="mt-2 text-gray-600">templetrust@email.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#7A2E1D] text-white flex items-center justify-center">
                  <Clock />
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#4A1F1F]">
                    Temple Timings
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Morning : 6:00 AM - 12:00 PM
                  </p>

                  <p className="text-gray-600">Evening : 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <button
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#7A2E1D]
              px-8
              py-4
              text-white
              font-semibold
              hover:bg-[#5A2417]
              transition
              "
            >
              Get Directions
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <iframe
                title="Temple Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1944506905274!2d82.4679202!3d25.565196699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39901bf8ed350b8b%3A0xbe6bb793b3cf831b!2sTemple%20Of%20Shiva!5e0!3m2!1sen!2sin!4v1783150746026!5m2!1sen!2sin"
                className="w-full h-[500px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
