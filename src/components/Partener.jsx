const logos = [
  "/partners/angelone.png",
  "/partners/cash.png",
  "/partners/hdfcsky.png",
  "/partners/meeti.png",
  "/partners/parimatch.png",
  "/partners/smartcoin.png",
  "/partners/unacademy.png",
  "/partners/upstox.png",
];

const Partners = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">

        <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
          Our Partners
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
          Trusted By Innovative Brands
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
          We collaborate with forward-thinking businesses and technology
          partners to deliver exceptional digital experiences.
        </p>

      </div>

      <div className="relative mt-12">

        <div className="marquee flex items-center">

          {[...logos, ...logos].map((logo, index) => (

            <div
              key={index}
              className="mx-6 lg:mx-10 h-16 flex items-center justify-center flex-shrink-0"
            >

              <img
                src={logo}
                alt="Partner Logo"
                className="max-h-14 md:h-10 lg:h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Partners;