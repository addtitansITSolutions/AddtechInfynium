import { motion } from "framer-motion";
import {
  MousePointer,
  Search,
  ShoppingBag,
  CreditCard,
  Repeat,
} from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Traffic",
    description:
      "Drive targeted visitors from search engines, social media, paid ads and marketplaces.",
  },
  {
    icon: Search,
    title: "Product Discovery",
    description:
      "Help shoppers quickly discover the products they need with optimized listings.",
  },
  {
    icon: ShoppingBag,
    title: "Add To Cart",
    description:
      "Create a seamless shopping experience that encourages customers to purchase.",
  },
  {
    icon: CreditCard,
    title: "Checkout",
    description:
      "Reduce cart abandonment with a smooth, secure and optimized checkout process.",
  },
  {
    icon: Repeat,
    title: "Repeat Customers",
    description:
      "Increase customer lifetime value through remarketing, email campaigns and loyalty strategies.",
  },
];

const WhyEcommerce = () => {
  return (
    <section className="py-24 bg-[#f8fbfa] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
            Sales Funnel
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5">
            Every Click Should Lead
            <br />
            To A Successful Purchase
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We optimize every stage of the ecommerce journey—from attracting
            visitors to turning them into loyal customers.
          </p>

        </motion.div>

        {/* Funnel */}

        <div className="mt-20">

          <div className="grid lg:grid-cols-5 gap-8">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .12,
                  }}
                  className="relative"
                >

                  <div className="bg-white rounded-[28px] p-8 shadow-md border border-gray-100 text-center hover:shadow-xl transition">

                    <div className="w-16 h-16 mx-auto rounded-full bg-[#053d27]/10 flex items-center justify-center">

                      <Icon
                        size={30}
                        className="text-[#053d27]"
                      />

                    </div>

                    <h3 className="text-2xl font-bold mt-6">

                      {step.title}

                    </h3>

                    <p className="text-gray-600 mt-4 leading-7 text-sm">

                      {step.description}

                    </p>

                  </div>

                  {/* Arrow */}

                  {index !== steps.length - 1 && (

                    <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 text-[#053d27] text-4xl font-light">

                      →

                    </div>

                  )}

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyEcommerce;