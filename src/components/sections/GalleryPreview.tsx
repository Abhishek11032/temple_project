import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/images/bhumi-puja.jpeg",
  "/images/temple.jpeg",
  "/images/Temple.png",
  "/images/bhumi-puja.jpeg",
  "/images/left-side.jpeg",
  "/images/Temple.png",
];

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#FFF8F2]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">

            Gallery

          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#4A1F1F]">

            Temple Moments

          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">

            Explore the memorable moments of Bhumi Pujan,
            Shilanyas and the ongoing temple construction.

          </p>

        </div>

        {/* Images */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: .3 }}
              className="overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
            >

              <img
                src={image}
                alt=""
                className="
                h-64
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14 flex justify-center">

          <Link
            to="/gallery"
            className="
            inline-flex
            items-center
            gap-3

            rounded-full

            bg-[#7A2E1D]

            px-8

            py-4

            text-white

            font-semibold

            transition

            hover:bg-[#5A2417]
            "
          >

            View Complete Gallery

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>
    </section>
  );
}