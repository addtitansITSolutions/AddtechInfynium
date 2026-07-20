import { motion } from "framer-motion";

const GDPRCompliance = () => {
  return (
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
            GDPR Compliance
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Addtech Infinium Pvt. Ltd., operating as Addtech Infinium,
            works with clients, affiliates, and partners across the world.
            Wherever we process personal data belonging to individuals in
            the European Union (EU) or the United Kingdom (UK), we follow
            the standards established under the General Data Protection
            Regulation (GDPR).
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 space-y-12">

          {/* Introduction */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Our Commitment
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              If you are an EU or UK resident, GDPR gives you meaningful
              control over your personal data. We collect only the
              information necessary to provide our services, explain why
              it is collected, and provide a clear process to access,
              correct, or delete your information whenever requested.
            </p>
          </div>

          {/* Roles */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Two Roles We Play
            </h2>

            <div className="mt-6 space-y-8">

              <div className="border-l-4 border-[#053d27] pl-5">
                <h3 className="text-xl font-semibold">
                  Direct Interaction with Visitors
                </h3>

                <p className="mt-3 text-gray-600 leading-8">
                  When you submit information through this website, we
                  determine how your personal data is processed. Under
                  GDPR, we act as the <strong>Data Controller</strong>.
                </p>
              </div>

              <div className="border-l-4 border-[#053d27] pl-5">
                <h3 className="text-xl font-semibold">
                  Running Campaigns for Clients
                </h3>

                <p className="mt-3 text-gray-600 leading-8">
                  When processing personal data on behalf of a client, we
                  act strictly under their instructions as a
                  <strong> Data Processor</strong>. These activities are
                  governed by a signed Data Processing Agreement (DPA).
                </p>

                <p className="mt-4 text-gray-600">
                  If you require a DPA, please contact us at{" "}
                  <span className="font-medium text-[#053d27]">
                    info@addtechinfinium.com
                  </span>.
                </p>
              </div>

            </div>
          </div>

          {/* Data Collection */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Data We Collect
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Depending on how you interact with us, we may collect:
            </p>

            <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Information</li>
              <li>Affiliate & Campaign Data</li>
              <li>Click, Conversion & Commission Information</li>
            </ul>
          </div>

          {/* Legal Basis */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Legal Basis for Processing
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              We process personal information only when one or more of the
              following lawful bases apply:
            </p>

            <ul className="mt-5 list-disc pl-6 space-y-3 text-gray-600">
              <li>You have provided your consent.</li>
              <li>Processing is necessary to deliver requested services.</li>
              <li>
                We have a legitimate business interest, such as campaign
                measurement or fraud prevention, that does not override
                your rights.
              </li>
              <li>We are legally required to process the information.</li>
            </ul>
          </div>

          {/* Rights */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Your GDPR Rights
            </h2>

            <div className="overflow-x-auto mt-6">

              <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-[#053d27] text-white">
                  <tr>
                    <th className="text-left px-5 py-4">Right</th>
                    <th className="text-left px-5 py-4">Description</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                  <tr>
                    <td className="px-5 py-4 font-medium">Access</td>
                    <td className="px-5 py-4 text-gray-600">
                      Request the personal data we hold about you.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Rectification</td>
                    <td className="px-5 py-4 text-gray-600">
                      Correct inaccurate or incomplete information.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Erasure</td>
                    <td className="px-5 py-4 text-gray-600">
                      Request deletion of your data where legally permitted.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Restriction</td>
                    <td className="px-5 py-4 text-gray-600">
                      Restrict how your personal data is processed.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Object</td>
                    <td className="px-5 py-4 text-gray-600">
                      Object to processing for specific purposes.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Data Portability</td>
                    <td className="px-5 py-4 text-gray-600">
                      Receive your data in a portable format.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">Withdraw Consent</td>
                    <td className="px-5 py-4 text-gray-600">
                      Withdraw previously provided consent at any time.
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <p className="mt-6 text-gray-600 leading-8">
              We respond to GDPR requests within one month, as required by
              law. Requests may be sent to{" "}
              <span className="font-medium text-[#053d27]">
                info@addtechinfinium.com
              </span>.
              You may also contact your national data protection authority
              if you have concerns.
            </p>

          </div>

          {/* International Transfers */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              International Data Transfers
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              As we serve clients in multiple countries, personal data may
              be processed outside the EU or UK, including at our offices
              in India. Where applicable, we rely on recognized safeguards,
              including the European Commission's Standard Contractual
              Clauses (SCCs), to ensure appropriate protection.
            </p>
          </div>

          {/* Data Breach */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Data Breach Response
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              In the event of a personal data breach, we will notify the
              relevant supervisory authority within 72 hours where required
              by GDPR and inform affected individuals when legally
              necessary.
            </p>
          </div>

          {/* Children */}

          <div>
            <h2 className="text-2xl font-bold text-[#053d27]">
              Children’s Privacy
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              Our services are not intended for individuals under the age
              of 21. We do not knowingly collect personal information from
              anyone below this age. If such information is identified, it
              will be promptly deleted.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GDPRCompliance;