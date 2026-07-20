import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
} from "lucide-react";

export const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Diagnose",
    subtitle: "Audit Before Action",
    icon: Search,
    image: "/process/discovery.png",
    phoneimage: "/process/discoveryphone.png",
    description:
      "We begin by identifying where your acquisition cost is leaking and uncover opportunities for better marketing performance before launching any campaign.",
    points: [
      "Marketing Audit",
      "CPA Analysis",
      "Performance Gap Identification",
      "Growth Opportunity Assessment",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Strategize",
    subtitle: "Build the Right Growth Plan",
    icon: ClipboardList,
    image: "/process/planning.png",
    phoneimage: "/process/planningphone.png",
    description:
      "Every strategy is tailored around your brand's objectives, audience, and unit economics to maximize sustainable growth and measurable business outcomes.",
    points: [
      "Campaign Planning",
      "Audience Targeting",
      "Channel Selection",
      "Growth Strategy",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Optimize",
    subtitle: "Improve Every Touchpoint",
    icon: Code2,
    image: "/process/development.png",
    phoneimage: "/process/developmentphone.png",
    description:
      "We continuously optimize affiliate, influencer, and e-Commerce funnels using real-time performance insights to improve conversions and reduce acquisition costs.",
    points: [
      "Affiliate Optimization",
      "Influencer Campaign Optimization",
      "e-Commerce Funnel Optimization",
      "Conversion Rate Improvement",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Report",
    subtitle: "Measure What Matters",
    icon: Rocket,
    image: "/process/launch.png",
    phoneimage: "/process/launchphone.png",
    description:
      "Stay informed with transparent reporting that focuses on ROI, Cost Per Acquisition (CPA), and the key performance metrics that drive your business growth.",
    points: [
      "Weekly Performance Reports",
      "ROI Tracking",
      "Cost Per Acquisition Reporting",
      "Actionable Growth Insights",
    ],
  },
];