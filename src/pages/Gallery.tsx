import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { galleryData } from "../data/Gallerydata";

export default function Gallery() {
  const { event } = useParams();
  const navigate = useNavigate();

  const images = event
    ? (galleryData[event as keyof typeof galleryData] ?? [])
    : Object.values(galleryData).flat();

  const titleMap: Record<string, string> = {
    "bhumi-pujan": "भूमि पूजन",
    janmotsav: "खाटू श्याम जन्मोत्सव",
    ekadashi: "फाल्गुन एकादशी समारोह",
  };

  return (
    <section className="min-h-screen bg-[#FFF8F2] py-10">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#4A1F1F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">{item.guest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
