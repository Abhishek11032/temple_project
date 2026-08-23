import { Link,  useParams } from "react-router-dom";
import {  ChevronRight } from "lucide-react";
import { galleryData } from "../data/Gallerydata";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Gallery() {
  const { event } = useParams();
  // const navigate = useNavigate();

  const images = event
    ? (galleryData[event as keyof typeof galleryData] ?? [])
    : Object.values(galleryData).flat();

  const titleMap: Record<string, string> = {
    "bhumi-pujan": "भूमि पूजन",
    janmotsav: "खाटू श्याम जन्मोत्सव",
    ekadashi: "फाल्गुन एकादशी समारोह",
  };

  return (
    <section className="min-h-screen bg-[#FFF8F2] pt-10">

      <Navbar/>
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Back Button + Breadcrumb */}

        <div className="mb-10">
          <div className="flex flex-wrap items-center text-sm">
            <Link
              to="/"
              className={`transition duration-300 ${
                !event
                  ? "text-amber-300 font-semibold"
                  : "text-gray-600 hover:text-amber-300"
              }`}
            >
              Home
            </Link>

            <ChevronRight size={16} className="mx-2 text-gray-500" />

            <Link
              to="/gallery"
              className={`transition duration-300 ${
                !event
                  ? "text-amber-300 font-semibold"
                  : "text-gray-600 hover:text-amber-300"
              }`}
            >
              Gallery
            </Link>

            {event && (
              <>
                <ChevronRight size={16} className="mx-2 text-gray-500" />

                <span className="font-semibold text-amber-300">
                  {titleMap[event]}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Heading */}

        <div className="text-center">
          <p className="uppercase tracking-[8px] text-amber-700 font-semibold">
            Gallery
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-[#4A1F1F]">
            {event ? titleMap[event] : "Complete Gallery"}
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500"></div>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600 leading-8">
            {event
              ? `Explore the memorable moments of ${titleMap[event]}.`
              : "Explore all memorable moments from Bhumi Pujan, Khatu Shyam Janmotsav, Falgun Ekadashi and other temple events."}
          </p>
        </div>

        {/* Gallery */}

<div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {images.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[2rem] border border-[#4A1F1F]/10 bg-white shadow-[0_10px_40px_rgba(74,31,31,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(74,31,31,0.20)]"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A1F1F]/70 via-[#4A1F1F]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Date badge */}
        <div className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-[#4A1F1F] shadow-lg backdrop-blur-sm">
          {item.date}
        </div>

        {/* Hover title */}
        <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">
            Event
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative bg-white p-6">
        {/* Decorative line */}
        <div className="mb-4 h-1 w-12 rounded-full bg-[#4A1F1F] transition-all duration-500 group-hover:w-20" />

        <h3 className="text-xl font-bold text-[#4A1F1F] transition-colors duration-300">
          {item.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-gray-500">
          {item.guest}
        </p>

        <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-gray-700">
          {item.event}
        </p>

        {/* Bottom section */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-[#4A1F1F]">
            {item.date}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      <Footer/>
    </section>
  );
}
