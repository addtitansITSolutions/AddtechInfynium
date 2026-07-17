import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  TrendingUp,
  Package,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#053d27] via-[#0b5a3d] to-[#03281b] pt-36 pb-24">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-green-400/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white backdrop-blur-md">

              <ShoppingCart size={18} />

              Ecommerce Marketing

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">

              Grow Your
              <br />

              Online Store
              <br />

              <span className="text-green-300">
                Increase Every Sale.
              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-green-100 max-w-xl">

              From attracting shoppers to increasing conversions,
              we help ecommerce businesses scale faster through
              data-driven marketing, optimized storefronts,
              and high-performing campaigns.

            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >

                Grow My Store

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#053d27] transition"
              >

                View Case Studies

              </Link>

            </div>

            {/* Platforms */}

            <div className="flex flex-wrap gap-3 mt-12">

              {[
                "Shopify",
                "WooCommerce",
                "Amazon",
                "Flipkart",
              ].map((item) => (

                <span
                  key={item}
                  className="px-5 py-2 rounded-full bg-white/10 text-white backdrop-blur-md"
                >

                  {item}

                </span>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <img
              src="/services/ecommerce.png"
              alt="Ecommerce Marketing"
              className="w-full max-h-[560px] object-cover rounded-[36px] shadow-2xl"
            />

            {/* Orders */}

            <div className="absolute top-8 -left-5 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">

                  <Package
                    size={24}
                    className="text-[#053d27]"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Monthly Orders
                  </p>

                  <h3 className="text-2xl font-bold">
                    2,450+
                  </h3>

                </div>

              </div>

            </div>

            {/* Revenue */}

            <div className="absolute bottom-28 -right-5 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                  <TrendingUp
                    size={24}
                    className="text-green-700"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Revenue Growth
                  </p>

                  <h3 className="text-2xl font-bold">
                    +320%
                  </h3>

                </div>

              </div>

            </div>

            {/* Stores */}

            <div className="absolute bottom-6 left-10 bg-white rounded-2xl shadow-xl p-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  <Store
                    size={24}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Stores Managed
                  </p>

                  <h3 className="text-2xl font-bold">
                    150+
                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default EcommerceHero;