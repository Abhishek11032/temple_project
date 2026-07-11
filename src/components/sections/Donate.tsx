export default function Donate() {
  return (
    <section
      id="donate"
      className="bg-gradient-to-b from-[#FFF8ED] to-[#FFE9C7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-amber-700 uppercase tracking-[5px] font-semibold">
            Support The Temple
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#5A2417]">
            Donate For Temple Construction
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-amber-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-700">
            The construction of Shri Khatu Shyam Temple is progressing with the
            blessings of Shyam Baba and the support of devotees. Every donation,
            big or small, helps us build a divine place of worship for future
            generations.
          </p>
          <h3 className="text-amber-700 font-semibold">जिसने संसार के कल्याण हेतु अपना शीश अर्पित कर दिया, उस शीश के दानी श्री श्याम प्रभु के मंदिर निर्माण में आपका एक छोटा-सा सहयोग भी अमूल्य है।</h3>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-[#5A2417]">
              Why Donate?
            </h3>

            <ul className="mt-8 space-y-5 text-gray-700 text-lg">

              <li>🛕 Temple Construction</li>

              <li>🙏 Daily Puja & Religious Activities</li>

              <li>🌸 Festival Celebrations</li>

              <li>🍛 Prasad & Bhandara Services</li>

              <li>❤️ Community Welfare Activities</li>

            </ul>

            <div className="mt-10 rounded-xl bg-amber-50 p-6 border border-amber-200">

              <h4 className="font-bold text-xl text-[#5A2417]">
                Every Contribution Matters
              </h4>

              <p className="mt-3 text-gray-700">
                Whether you donate ₹101 or ₹1,00,000, your support becomes a
                part of this sacred journey.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-[#5A2417]">
              Donation Details
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <div>
                <p className="font-semibold text-gray-600">
                  Account Name
                </p>

                <p className="text-[#5A2417] font-bold">
                  Dev Bhumi Trust
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600">
                  Bank Name
                </p>

                <p className="text-[#5A2417] font-bold">
                  Union Bank of India
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600">
                  Account Number
                </p>

                <p className="text-[#5A2417] font-bold">
                  719501010050223
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600">
                  IFSC Code
                </p>

                <p className="text-[#5A2417] font-bold">
                  UBIN0571954
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600">
                  UPI ID
                </p>

                <p className="text-[#5A2417] font-bold">
                  76988401@ubin
                </p>
              </div>

            </div>

            {/* QR */}

            <div className="mt-10 flex justify-center">

              <div className="rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6">

                <img
                  src="/images/qr-code.png"
                  alt="Donation QR"
                  className="h-56 w-56 object-contain"
                />

              </div>

            </div>

            <p className="mt-6 text-center text-gray-600">
              Scan the QR code to make your contribution.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}