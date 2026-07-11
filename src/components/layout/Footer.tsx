import { Phone, Mail, MapPin, Clock } from "lucide-react";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Journey", href: "#journey" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
  { title: "Donate Now", href: "#donate" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3B1610] text-white">

      {/* Top */}

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-amber-300">
              🛕 Shri Khatu Shyam Ji
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Dedicated to preserving faith, devotion and Sanatan
              culture through the construction of Shri Khatu Shyam Ji
              Temple.
            </p>

            <div className="mt-8">

              <p className="text-xl font-semibold text-amber-300">
                🙏 जय श्री श्याम 🙏
              </p>

              <p className="mt-3 text-gray-400 leading-7">
                May Baba Shyam bless every devotee with peace,
                prosperity and happiness.
              </p>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-amber-300">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {links.map((item) => (

                <li key={item.title}>

                  <a
                    href={item.href}
                    className="text-gray-300 transition hover:text-amber-300"
                  >
                    {item.title}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-amber-300">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={22}
                  className="mt-1 text-amber-300"
                />

                <p className="leading-7 text-gray-300">
                  खाटू श्याम मंदिर,
                  <br />
                 सरसरा वाराणसी मंडल बरसठी
                    रेलवे स्टेशन के समीप
                  <br />
                  जौनपुर,
                  उत्तर प्रदेश
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={20}
                  className="text-amber-300"
                />

                <p className="text-gray-300">
                  +91 7307348212, 9831042999
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={20}
                  className="text-amber-300"
                />

                <p className="text-gray-300 break-all">
                  sshyamkmdtrust@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* Temple Timings */}

          <div>

            <h3 className="text-xl font-semibold text-amber-300">
              Temple Timings
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-3">

                <Clock
                  size={20}
                  className="mt-1 text-amber-300"
                />

                <div>

                  <p className="font-semibold">
                    Morning
                  </p>

                  <p className="text-gray-300">
                    6:00 AM – 12:00 PM
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Clock
                  size={20}
                  className="mt-1 text-amber-300"
                />

                <div>

                  <p className="font-semibold">
                    Evening
                  </p>

                  <p className="text-gray-300">
                    4:00 PM – 9:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Shri Khatu Shyam Ji Temple Trust.
            All Rights Reserved.
          </p>

          <p className="font-medium text-amber-300">
            ॥ हारे का सहारा, बाबा श्याम हमारा ॥
          </p>

        </div>

      </div>

    </footer>
  );
}