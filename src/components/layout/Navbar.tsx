import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 120;

      let currentSection = "home";

      navLinks.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop - offset;

        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionId = searchParams.get("section");

    // agar section param nahi hai to Home active rakho
    if (!sectionId) {
      setActiveSection("home");
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) return;

    setTimeout(() => {
      const navbarHeight = 96;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }, 100);
  }, [searchParams]);
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);

    if (id === "home") {
      navigate("/"); // URL clean
    } else {
      navigate(`/?section=${id}`);
    }

    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 96;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 z-50 w-full border-b border-amber-500 bg-gradient-to-r from-[#3B1610] via-[#5A2417] to-[#3B1610] shadow-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* ================= Logo ================= */}

          <button
            onClick={() => handleNavClick("home")}
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
                  text-[7px]
                  md:text-xs
                  uppercase
                  tracking-[6px]
                  text-amber-100
                "
              >
                Temple Trust
              </p>
            </div>
          </button>

          {/* ================= Desktop Menu ================= */}

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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
              </button>
            ))}
          </nav>

          {/* ================= Mobile Button ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* ================= Mobile Drawer ================= */}

      <div
        className={`
          fixed
          top-0
          right-0
          z-[60]
          h-screen
          w-72
          bg-[#3B1610]
          shadow-2xl
          transition-transform
          duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <h2 className="text-2xl font-bold text-amber-300">Menu</h2>

          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
        </div>

        {/* Mobile Links */}

        <div className="mt-6 flex flex-col">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                border-b
                border-white/10
                px-8
                py-5
                text-left
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
            </button>
          ))}
        </div>
      </div>

      {/* ================= Overlay ================= */}

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
