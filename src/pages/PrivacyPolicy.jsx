import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";


const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>
          Privacy Policy | Addtech Infinium
        </title>

        <meta
          name="description"
          content="Read Addtech Infinium's Privacy Policy to understand how we collect, use, store, protect, and process your personal information when you use our website and services."
        />

        <link
          rel="canonical"
          href="https://addtechinfinium.com/privacy-policy"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Privacy Policy | Addtech Infinium"
        />
        <meta
          property="og:description"
          content="Read Addtech Infinium's Privacy Policy to understand how we collect, use, store, protect, and process your personal information when you use our website and services."
        />
        <meta
          property="og:url"
          content="https://addtechinfinium.com/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Addtech Infinium" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Privacy Policy | Addtech Infinium"
        />
        <meta
          name="twitter:description"
          content="Read Addtech Infinium's Privacy Policy to understand how we collect, use, store, protect, and process your personal information when you use our website and services."
        />
        <meta
          name="twitter:image"
          content="https://addtechinfinium.com/og-image.jpg"
        />
      </Helmet>
      <section className="pt-36 pb-24 bg-[#f8fbfa]">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Legal
            </span>

            <h1 className="text-5xl font-bold mt-5">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
              We value your privacy and are committed to protecting the
              personal information you share with us. This Privacy Policy
              explains how we collect, use, store, disclose, and safeguard
              your information when you visit our website or engage with our
              services.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 space-y-12">

            {/* Agreement */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Your Consent
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                By accessing or using our website, you agree to the practices
                described in this Privacy Policy.
              </p>
            </div>

            {/* Personal Information */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Personal Information We Collect
              </h2>

              <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Job Title</li>
                <li>Business Information</li>
                <li>Information submitted through contact forms or inquiries</li>
              </ul>
            </div>

            {/* Technical Information */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Technical Information
              </h2>

              <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Pages Visited</li>
                <li>Time Spent on Pages</li>
                <li>Referral Sources</li>
                <li>Cookies</li>
              </ul>
            </div>

            {/* Usage */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                How We Use Your Information
              </h2>

              <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
                <li>Respond to inquiries</li>
                <li>Provide our services</li>
                <li>Improve website performance and user experience</li>
                <li>Develop marketing strategies</li>
                <li>Communicate important updates</li>
                <li>Send newsletters and promotional communications</li>
              </ul>
            </div>

            {/* Cookies */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Cookies
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                Our website may use cookies and similar technologies to improve
                website performance, analyze user behaviour, and enhance your
                browsing experience. You may disable cookies through your browser
                settings; however, doing so may affect certain website
                functionality.
              </p>
            </div>

            {/* Sharing */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Data Sharing
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                We do not sell your personal information. However, we may share
                information with:
              </p>

              <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
                <li>Trusted technology partners</li>
                <li>Analytics providers</li>
                <li>Marketing platforms</li>
                <li>Legal authorities (where required by law)</li>
                <li>Service providers supporting website operations</li>
              </ul>
            </div>

            {/* Security */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Data Security
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                We implement reasonable administrative, technical, and
                organizational safeguards to protect your personal information
                against unauthorized access, disclosure, alteration, or
                destruction. While we strive to protect your information, users
                should also exercise caution when sharing personal information
                online.
              </p>
            </div>

            {/* Third Party */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Third-Party Websites
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                Our website may contain links to external websites. We are not
                responsible for the privacy practices or content of third-party
                websites. We encourage users to review the privacy policies of
                any external websites they visit.
              </p>
            </div>

            {/* Updates */}

            <div>
              <h2 className="text-2xl font-bold text-[#053d27]">
                Changes to This Policy
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page along with the updated effective
                date. Where appropriate, we may also notify users by email before
                significant changes become effective.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;