import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Events", id: "journey" },
  { name: "Gallery", id: "gallery" },
  { name: "Temple", id: "temple" },
  { name: "Contact", id: "contact" },
  { name: "Donate Now", id: "donate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 z-50 w-full border-b border-amber-500 bg-gradient-to-r from-[#3B1610] via-[#5A2417] to-[#3B1610] shadow-xl">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-4 shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="Khatu Shyam Temple Logo"
              draggable="false"
              className="
                h-14
                w-14
                md:h-16
                md:w-16
                lg:h-20
                lg:w-20
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />

            <div className="flex flex-col justify-center">

              <h1
                className="
                whitespace-nowrap
                text-xl
                md:text-2xl
                lg:text-[38px]
                font-bold
                leading-none
                text-amber-300
                "
              >
                Khatu Shyam
              </h1>

              <p
                className="
                mt-2
                text-[10px]
                md:text-xs
                uppercase
                tracking-[6px]
                text-amber-100
                "
              >
                Temple Trust
              </p>

            </div>

          </a>

          {/* ================= Desktop Menu ================= */}

          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((item) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  group
                  relative
                  text-lg
                  font-semibold
                  tracking-wide
                  transition-all
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-amber-300"
                      : "text-white hover:text-amber-300"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    bg-amber-300
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

              </a>

            ))}

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </header>

      {/* ================= Mobile Drawer ================= */}

      <div
        className={`fixed top-0 right-0 z-[60] h-screen w-72 bg-[#3B1610] shadow-2xl transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

          <h2 className="text-2xl font-bold text-amber-300">
            Menu
          </h2>

          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>

        </div>

        <div className="mt-6 flex flex-col">

          {navLinks.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`
                border-b
                border-white/10
                px-8
                py-5
                text-lg
                transition
                ${
                  activeSection === item.id
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-white hover:bg-amber-500/10 hover:text-amber-300"
                }
              `}
            >
              {item.name}
            </a>

          ))}

        </div>

      </div>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}