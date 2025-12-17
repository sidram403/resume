"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Linkedin,
  Github,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Phone,
  ExternalLink,
  Info,
  Calendar,
  FileText,
  MessageSquare,
  Download,
} from "lucide-react";

export default function EnhancedGoogleResume() {
  const [searchQuery, setSearchQuery] = useState(
    "Sidramaraddy M Senoir Full Stack Engineer"
  );
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    skills: false,
    projects: false,
  });
  const [showHireModal, setShowHireModal] = useState(false);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleHireMe = () => {
    setShowHireModal(true);
  };

  const closeHireModal = () => {
    setShowHireModal(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="./profile-pic.png" alt="Google Logo" className="h-8" />
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="text-sm hover:underline hidden md:inline"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="text-sm hover:underline hidden md:inline"
            >
              Projects
            </a>
            <button
              onClick={handleHireMe}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
            >
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            <Search
              className="absolute right-4 top-3.5 text-blue-500"
              size={24}
            />
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600 border-b border-gray-300 pb-3">
          About 1,050,000 results (0.42 seconds)
        </div>

        <div className="mb-8">
          <a
            href="https://www.linkedin.com/in/sidramm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl text-blue-700 hover:underline cursor-pointer mb-1">
              Sidramaraddy M - Senior Full Stack Engineer | LinkedIn
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/in/sidramm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 text-sm mb-1 block hover:underline"
          >
            https://www.linkedin.com/in/sidramm/
          </a>
          <p className="text-sm text-gray-700 mb-2">
            Software Engineer with 3.5+ years of experience in building and
            scaling production-grade systems using MERN stack, AWS, and
            automation frameworks. Proven track record in system performance
            optimization, secure microservices architecture, and improving CI/CD
            efficiency. Strong DSA foundation (CodeChef ⭐⭐⭐, competitive
            programming ranks) with hands-on experience in test automation,
            backend reliability, and blockchain-based financial systems.
            Passionate about solving real-world engineering challenges through
            clean code, system design thinking, and ownership.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="tel:+919108761650"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Phone size={16} className="mr-1" /> +91 9108761650
            </a>
            <a
              href="mailto:siddharthpatil9108@gmail.com"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Mail size={16} className="mr-1" /> siddharthpatil9108@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/sidramm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Linkedin size={16} className="mr-1" /> LinkedIn
            </a>
            <a
              href="https://github.com/sidram403"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
          </div>
        </div>

        <div className="mb-8">
          <a
            href="https://www.linkedin.com/posts/sidramm_google-interview-careerjourney-activity-7389655733807714305-H8zI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl text-blue-700 hover:underline cursor-pointer mb-1">
              Sidramaraddy M - Shortlisted for technical interview at Google
              (SWE) in 2025 | LinkedIn
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/posts/sidramm_google-interview-careerjourney-activity-7389655733807714305-H8zI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-green-700 text-sm mb-1">
              https://www.linkedin.com/posts/sidramm_google-interview-careerjourney-activity-7389655733807714305-H8zI
            </div>
          </a>
          <p className="text-sm text-gray-700 mb-2">
            Recognized for strong problem-solving and system design skills
            demonstrated through online assessments and coding challenges
            focused on data structures, algorithms, and backend scalability.
          </p>
        </div>

        <div className="mb-8">
          <a
            href=" https://www.linkedin.com/posts/sidramm_amazon-interviewexperience-growthmindset-activity-7388779051219533825-lC1K"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl text-blue-700 hover:underline cursor-pointer mb-1">
              Sidramaraddy M - Shortlisted for Amazon SDE role (multiple
              screening rounds) 2025 | LinkedIn
            </h1>
          </a>
          <a
            href=" https://www.linkedin.com/posts/sidramm_amazon-interviewexperience-growthmindset-activity-7388779051219533825-lC1K"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-green-700 text-sm mb-1">
              https://www.linkedin.com/posts/sidramm_amazon-interviewexperience-growthmindset-activity-7388779051219533825-lC1K
            </div>
          </a>
          <p className="text-sm text-gray-700 mb-2">
            Advanced through multiple screening rounds, including Data
            Structures, Algorithms, and System Design (LLD) evaluations,
            reflecting strong technical and problem-solving proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Briefcase size={20} className="mr-2 text-blue-500" />{" "}
                  Experience
                </h2>
                <button
                  onClick={() => toggleSection("experience")}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expandedSections.experience ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              {typeof window !== "undefined" &&
                (expandedSections.experience || window.innerWidth >= 768) && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">
                        Software Development Engineer in Test (Backend + Dev
                        Quality)
                      </h3>
                      <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                        <span className="flex items-center">
                          <Briefcase size={12} className="mr-1" /> TestYantra –
                          Liminal Custody (Blockchain Product)
                        </span>
                        <span className="flex items-center">
                          <MapPin size={12} className="mr-1" /> Onsite
                        </span>
                        <span className="flex items-center">
                          <Calendar size={12} className="mr-1" /> Apr 2025 -
                          Present (8 months)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>
                          Writing and maintaining unit tests for backend
                          microservices to ensure secure and reliable digital
                          asset custody features.
                        </li>
                        <li>
                          Reduced test execution time from ~20 minutes to 2–3
                          minutes for 8,000+ test cases by optimizing mocks and
                          dependency loading.
                        </li>
                        <li>
                          Led package and dependency upgrades to resolve
                          critical security vulnerabilities and ensure
                          compliance with industry standards.
                        </li>
                        <li>
                          Improved CI/CD automation pipelines, resulting in
                          faster builds, fewer flaky tests, and improved release
                          stability.
                        </li>
                        <li>
                          Worked in a blockchain custody and security-sensitive
                          financial systems domain.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        Senior Full Stack Engineer
                      </h3>
                      <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                        <span className="flex items-center">
                          <Briefcase size={12} className="mr-1" /> AlienHU Pvt.
                          Ltd
                        </span>
                        <span className="flex items-center">
                          <MapPin size={12} className="mr-1" /> Onsite
                        </span>
                        <span className="flex items-center">
                          <Calendar size={12} className="mr-1" /> Sep 2023 - Feb
                          2025 (1.6 years)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>
                          Architected and led development of a proprietary
                          Billing and Invoicing Software Suite using MERN stack
                          and AWS, serving salon, retail, and restaurant
                          business domains.
                        </li>{" "}
                        <li>
                          Designed event-driven microservices using AWS Lambda,
                          API Gateway, and DynamoDB, achieving ~35%
                          infrastructure cost reduction.
                        </li>{" "}
                        <li>
                          Built custom CRM modules with client data management,
                          appointment tracking, and automated follow-ups,
                          increasing client retention by ~35%.
                        </li>{" "}
                        <li>
                          Implemented AWS S3 for secure document storage and
                          CloudFront CDN for static asset delivery, improving
                          global application performance by ~60%.
                        </li>{" "}
                        <li>
                          Increased deployment frequency by 3x by implementing
                          AWS CodePipeline CI/CD automation.
                        </li>{" "}
                        <li>
                          Developed inventory management system with stock
                          alerts and barcode integration, reducing inventory
                          discrepancies by ~45%.
                        </li>{" "}
                        <li>
                          Optimized MongoDB queries and implemented React lazy
                          loading, reducing page load time by ~40% and API
                          response time by ~65%.
                        </li>{" "}
                        <li>
                          Led and mentored junior developers through sprint
                          planning and code reviews, improving team delivery
                          velocity by ~25%.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        Full-Stack Software Engineer
                      </h3>
                      <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                        <span className="flex items-center">
                          <Briefcase size={12} className="mr-1" /> AlienHU Pvt.
                          Ltd
                        </span>
                        <span className="flex items-center">
                          <MapPin size={12} className="mr-1" /> On-site
                        </span>
                        <span className="flex items-center">
                          <Calendar size={12} className="mr-1" /> April 2022 -
                          April 2023 (1.5 years)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>
                          Implemented core application features across multiple
                          business applications, improving overall operational
                          efficiency by ~40%.
                        </li>{" "}
                        <li>
                          Migrated legacy on-premise applications to AWS cloud
                          infrastructure, improving system reliability and
                          achieving ~99.9% uptime.
                        </li>{" "}
                        <li>
                          Utilized AWS SQS and SNS for asynchronous message
                          processing, enabling seamless handling of high-volume
                          transactions.
                        </li>
                        <li>
                          Built Excel bulk import pipelines and WhatsApp
                          integration, accelerating client onboarding by ~30%.
                        </li>{" "}
                        <li>
                          Collaborated with product and marketing teams to
                          redesign company websites, improving mobile
                          performance and usability.
                        </li>{" "}
                        <li>
                          Executed SEO improvements that increased website
                          visibility by ~45% and doubled lead conversion rates.
                        </li>{" "}
                        <li>
                          Configured AWS CloudWatch monitoring and alerts,
                          reducing mean time to resolution (MTTR) for critical
                          issues by ~60%.
                        </li>{" "}
                        <li>
                          Refactored legacy codebases to modern standards,
                          reducing technical debt by ~50% and improving
                          maintainability.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        Front-End Developer
                      </h3>
                      <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                        <span className="flex items-center">
                          <Briefcase size={12} className="mr-1" /> AlienHU Pvt.
                          Ltd
                        </span>
                        <span className="flex items-center">
                          <MapPin size={12} className="mr-1" /> Remote
                        </span>
                        <span className="flex items-center">
                          <Calendar size={12} className="mr-1" /> Nov 2021 - Mar
                          2022 (5 months)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm mt-2">
                        <li>
                          Developed responsive business websites using Angular
                          with routing, reactive forms, and service-based
                          architecture.
                        </li>{" "}
                        <li>
                          Implemented lazy loading techniques that reduced page
                          load time by ~50% and improved SEO rankings.
                        </li>{" "}
                        <li>
                          Created reusable UI component libraries that
                          accelerated development time for subsequent projects
                          by ~35%.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Code size={20} className="mr-2 text-blue-500" /> Projects
                </h2>
                <button
                  onClick={() => toggleSection("projects")}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expandedSections.projects ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              {typeof window !== "undefined" &&
                (expandedSections.projects || window.innerWidth >= 768) && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">
                        Webflow Automation Platform
                      </h3>

                      <ul className="list-disc pl-5 text-sm mt-1">
                        <li>
                          Designed and developed an end-to-end workflow
                          automation platform that allows users to configure and
                          execute multi-step workflows dynamically.
                        </li>{" "}
                        <li>
                          Built a step-by-step execution engine to process tasks
                          sequentially with real-time status tracking, logging,
                          and failure handling.
                        </li>{" "}
                        <li>
                          Implemented role-based access control (RBAC) and
                          JWT-based authentication to ensure secure workflow
                          management.
                        </li>{" "}
                        <li>
                          Designed modular REST APIs to support scalable
                          workflow expansion and easy integration with
                          third-party services.
                        </li>{" "}
                        <li>
                          Optimized backend processing for reliability and
                          performance in complex automation scenarios.
                        </li>
                      </ul>
                      <h4 className="text-sm font-medium mt-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          React.js
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Node.js
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          Express.js
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                          MongoDB
                        </span>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          JWT Authentication
                        </span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                          REST APIs
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        GST ITC Reconciliation Dashboard
                      </h3>
                      <ul className="list-disc pl-5 text-sm mt-1">
                        <li>
                          Built a dashboard to automate GST invoice
                          reconciliation by matching purchase invoices with
                          GSTR-2A filings.
                        </li>{" "}
                        <li>
                          Implemented rule-based ITC eligibility validation
                          using HSN codes, GST rates, invoice dates, and filing
                          timelines.
                        </li>{" "}
                        <li>
                          Identified invoice mismatches and potential ITC loss
                          through actionable analytics and reconciliation
                          reports.
                        </li>{" "}
                        <li>
                          Enabled Excel/CSV bulk import functionality to handle
                          large volumes of invoice data efficiently.
                        </li>{" "}
                        <li>
                          Developed interactive dashboards and charts to provide
                          clear financial insights for business users.
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          React.js
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Node.js
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Express.js
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        MongoDB
                        </span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">REST APIs</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Chart.js</span>
                      </div>
                    </div>
                  
                  </div>
                )}
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Code size={20} className="mr-2 text-blue-500" /> Skills
                </h2>
                <button
                  onClick={() => toggleSection("skills")}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expandedSections.skills ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              {typeof window !== "undefined" &&
                (expandedSections.skills || window.innerWidth >= 768) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Frontend Development</h3>
                      <ul className="list-disc pl-5 text-sm">
                        <li>React.js, Angular, HTML5, CSS3</li>
                        <li>JavaScript (ES6+), TypeScript</li>
                        <li>Redux, Redux-Saga, Material UI</li>
                        <li>TailwindCSS, Bootstrap, Three.js</li>
                        <li>Next.js, Responsive Web Design</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Backend & DevOps</h3>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Node.js, Express.js, RESTful APIs</li>
                        <li>MongoDB, Firebase, CouchDB, SQL</li>
                        <li>Git, GitHub, Jenkins</li>
                        <li>Microservices Architecture</li>
                        <li>JWT Authentication, OAuth</li>
                        <li>AWS (Lambda, S3, EC2, DynamoDB, CloudFront, Cognito, SQS, SNS, CloudWatch, CodePipeline), Docker, CI/CD</li>
                      </ul>
                    </div>
                  </div>
                )}
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText size={20} className="mr-2 text-blue-500" /> Medium
                Articles
              </h2>
              <div className="space-y-4">
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://medium.com/@siddharthpatil9108/how-to-create-file-explorer-using-react-a3b955a117b5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      How To Create File Explorer using React
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    In this article, we’ll walk through the process of building
                    a simple file explorer using React, leveraging its powerful
                    component-based architecture and state management.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://medium.com/@siddharthpatil9108/backend-developer-roadmap-2024-6e2d0498ab25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Backend Developer Roadmap — 2024
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Let’s explore the key milestones and skills that constitute
                    the ultimate backend developer roadmap.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://medium.com/@siddharthpatil9108/how-to-make-a-single-slider-with-three-pointer-and-four-values-a0923c93d96f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      How To Make A Single Slider With Three Pointer And Four
                      Values.
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our goal is to implement a slider with three draggable
                    pointers, each representing a specific value within the
                    slider’s range.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://medium.com/@siddharthpatil9108/open-source-contribution-fostering-collaboration-and-innovation-331d1fa47740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      The Power of Open Source Contribution: Fostering
                      Collaboration and Innovation
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    In the realm of software development, open source
                    contribution stands as a cornerstone of innovation,
                    collaboration, and community-driven progress.
                  </p>
                </article>
                <a
                  href="https://medium.com/@siddharthpatil9108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  View all articles <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info size={20} className="mr-2 text-blue-500" /> About
              </h2>
              <div className="flex items-center mb-4">
                <img
                  src="./profile-pic.png"
                  alt="Sidramaraddy M"
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium">Sidramaraddy M</h3>
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-sm">
                Sidramaraddy M is a passionate Full Stack Developer with
                expertise in frontend technologies and a strong foundation in
                backend development. With a track record of building efficient
                and user-friendly web applications, Sidramaraddy brings
                creativity and technical prowess to every project.
              </p>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap size={20} className="mr-2 text-blue-500" />{" "}
                Education
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-medium">
                  Bachelor of Technology - Information Technology
                </h3>
                <div className="text-sm text-gray-600">
                  KLE College Of Engineering and Technology Chikodi
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar size={12} className="mr-1" /> August 2018 - August
                  2022 | GPA: 8.8
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Computer Science</h3>
                <div className="text-sm text-gray-600">
                  A.K.R.D PU Science College Kalaburagi
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar size={12} className="mr-1" /> May 2016 - July 2018 |
                  Percentage: 79.50
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award size={20} className="mr-2 text-blue-500" /> Honors and
                Awards
              </h2>
              <ul className="list-disc pl-5 text-sm">
                <li>3 Star Coder at CodeChef and HackerRank</li>
                <li>
                  Third Prize at PIONEER Engineering Project Competition, April
                  2022
                </li>
                <li>
                  National Rank 1376 in CodeKaze and All India Rank 241 out of
                  20K+ participants, March 2022
                </li>
                <li>
                  Global Rank 95 out of 25K Participants at CodeChef May Long
                  Challenge, May 2021
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4">
                People also search for
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Developer",
                  "Angular Expert",
                  "Full Stack Engineer",
                  "Frontend Specialist",
                  "MERN Stack Developer",
                ].map((term, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <Star size={16} className="mb-1 text-yellow-500" />
                    <div className="text-xs font-medium">{term}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold mb-4">Related searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Frontend Development</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> React.js best
                    practices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> Angular vs React
                    performance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> Modern CSS techniques
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Full Stack Development</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> MERN stack tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> Microservices
                    architecture explained
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Search size={14} className="mr-2" /> DevOps for web
                    developers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <MessageSquare size={24} className="mr-2 text-blue-500" /> Contact
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm mb-4">
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="mailto:siddharthpatil9108@gmail.com"
                className="flex items-center text-blue-600 hover:underline"
              >
                <Mail size={16} className="mr-2" /> siddharthpatil9108@gmail.com
              </a>
              <a
                href="tel:+919108761650"
                className="flex items-center text-blue-600 hover:underline"
              >
                <Phone size={16} className="mr-2" /> +91 9108761650
              </a>
              <a
                href="https://linkedin.com/in/sidramm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <Linkedin size={16} className="mr-2" /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/sidram403"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <Github size={16} className="mr-2" /> GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-gray-300 py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-2 md:mb-0">Sidramaraddy M © 2024</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>

      {showHireModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Hire Sidramaraddy M</h2>
            <p className="mb-4">Thank you for your interest! You can:</p>
            <div className="space-y-4">
              <a
                href="https://drive.google.com/file/d/1KVBLP_Tja9hTuJHK_2Hi3sALOy5fBR5j/view?usp=sharing"
                download
                className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition-colors"
              >
                <Download size={16} className="inline mr-2" />
                Download Resume
              </a>
              <a
                href="mailto:siddharthpatil9108@gmail.com?subject=Job%20Opportunity&body=Hi%20Sidramaraddy,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you."
                className="block w-full bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition-colors"
              >
                <Mail size={16} className="inline mr-2" />
                Send Email
              </a>
            </div>
            <button
              onClick={closeHireModal}
              className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
