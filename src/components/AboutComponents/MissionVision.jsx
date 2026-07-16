import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Our Mission",
    subtitle: "What Drives Us",
    icon: Target,
    description:
      "Our mission is to empower businesses with innovative digital solutions that accelerate growth, strengthen brand presence, and create lasting value through technology and creativity.",
    points: [
      "Deliver measurable business growth",
      "Build long-term client relationships",
      "Create scalable digital solutions",
    ],
  },
  {
    id: 2,
    title: "Our Vision",
    subtitle: "Where We're Heading",
    icon: Eye,
    description:
      "We envision becoming a trusted global technology partner, recognized for innovation, transparency, and delivering exceptional digital experiences across industries.",
    points: [
      "Become a globally trusted agency",
      "Lead through innovation",
      "Deliver excellence consistently",
    ],
  },
];

const MissionVision = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Mission & Vision
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            The Principles That Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every solution we build is driven by purpose, innovation,
            and a commitment to helping businesses succeed.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {data.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-[#f8fbfa] p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
              >

                {/* Background Icon */}

                <Icon
                  className="absolute right-6 top-6 text-[#053d27]/5"
                  size={140}
                />

                {/* Foreground */}

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-[#053d27]"
                    />

                  </div>

                  <span className="block mt-8 uppercase tracking-[3px] text-sm text-[#053d27] font-semibold">

                    {item.subtitle}

                  </span>

                  <h3 className="text-3xl font-bold mt-3">

                    {item.title}

                  </h3>

                  <p className="mt-6 text-gray-600 leading-8">

                    {item.description}

                  </p>

                  <div className="mt-8 space-y-4">

                    {item.points.map((point) => (

                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={20}
                          className="text-[#053d27] flex-shrink-0"
                        />

                        <span className="text-gray-700">

                          {point}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default MissionVision;