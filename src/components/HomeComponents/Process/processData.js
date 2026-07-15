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
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    icon: Search,
    image: "/process/discovery.png",
    description:
      "Every successful project begins with understanding your business. We analyze your goals, audience, competitors, and project requirements to create a strong foundation for development.",
    points: [
      "Business Requirement Analysis",
      "Competitor Research",
      "Target Audience Identification",
      "Project Scope Discussion",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Planning",
    subtitle: "Creating The Roadmap",
    icon: ClipboardList,
    image: "/process/planning.png",
    description:
      "Once we understand your vision, we prepare a detailed strategy including UI/UX planning, technology selection, timelines, milestones, and resource allocation.",
    points: [
      "Wireframes & UI Planning",
      "Technology Stack Selection",
      "Project Roadmap",
      "Sprint Planning",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Development",
    subtitle: "Turning Ideas Into Reality",
    icon: Code2,
    image: "/process/development.png",
    description:
      "Our developers build secure, scalable, and high-performance solutions using modern technologies while maintaining clean architecture and industry best practices.",
    points: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Testing & Quality Assurance",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Launch & Growth",
    subtitle: "Deliver, Monitor & Scale",
    icon: Rocket,
    image: "/process/launch.png",
    description:
      "After deployment, we continue optimizing your product through monitoring, maintenance, updates, and performance improvements to ensure long-term success.",
    points: [
      "Deployment",
      "Performance Monitoring",
      "Continuous Support",
      "Future Enhancements",
    ],
  },
];