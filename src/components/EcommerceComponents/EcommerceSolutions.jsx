import { motion } from "framer-motion";
import {
  ShoppingCart,
  Store,
  BarChart3,
  Target,
  LineChart,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Store,
    title: "Marketplace Management",
    description:
      "Manage and optimize your products across Amazon, Flipkart and other marketplaces.",
    stat: "+45% Sales",
  },
  {
    icon: ShoppingCart,
    title: "Store Optimization",
    description:
      "Improve user experience, navigation and product pages to increase conversions.",
    stat: "4.8% CVR",
  },
  {
    icon: Target,
    title: "Product Advertising",
    description:
      "Run high-converting Google Shopping and marketplace advertising campaigns.",
    stat: "8.7x ROAS",
  },
  {
    icon: LineChart,
    title: "Conversion Optimization",
    description:
      "Reduce cart abandonment and maximize every visitor's purchase journey.",
    stat: "+32% Orders",
  },
  {
    icon: BadgeDollarSign,
    title: "Revenue Growth",
    description:
      "Data-driven strategies focused on increasing average order value and repeat purchases.",
    stat: "+210% Revenue",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track sales, customer behavior and campaign performance with transparent reports.",
    stat: "Live Dashboard",
  },
];

const EcommerceSolutions = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Our Ecommerce Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Everything Your Store
            <br />
            Needs To Scale
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From marketplace management to conversion optimization,
            our ecommerce marketing solutions are designed to increase
            sales, improve customer experience and maximize profitability.
          </p>

        </motion.div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-[#f8fbfa] rounded-[28px] border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              >

                {/* Top */}

                <div className="flex items-center justify-between p-6">

                  <div className="w-14 h-14 rounded-2xl bg-[#053d27]/10 flex items-center justify-center">

                    <Icon
                      size={28}
                      className="text-[#053d27]"
                    />

                  </div>

                  <span className="text-[#053d27] font-bold text-lg">

                    {service.stat}

                  </span>

                </div>

                {/* Body */}

                <div className="px-6 pb-8">

                  <h3 className="text-2xl font-bold">

                    {service.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {service.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-24 bg-[#053d27] rounded-[36px] px-8 lg:px-16 py-14 flex flex-col lg:flex-row items-center justify-between gap-10"
        >

          <div>

            <span className="uppercase tracking-[4px] text-green-200 text-sm">
              Ready To Grow?
            </span>

            <h2 className="text-4xl font-bold text-white mt-4">
              Scale Your Ecommerce
              <br />
              Business With Confidence
            </h2>

            <p className="text-green-100 mt-5 max-w-2xl leading-8">
              Whether you're launching a new online store or expanding an
              established brand, our ecommerce experts can help you drive
              more traffic, increase conversions and grow revenue.
            </p>

          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition whitespace-nowrap"
          >
            Grow My Store
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default EcommerceSolutions;