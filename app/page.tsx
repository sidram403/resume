'use client'

import { useState } from 'react'
import { Search, MapPin, Briefcase, GraduationCap, Code, Mail, Linkedin, Github, Award, Star, ChevronDown, ChevronUp, Phone, ExternalLink, Info, Calendar, FileText, MessageSquare, Download } from 'lucide-react'

export default function EnhancedGoogleResume() {
  const [searchQuery, setSearchQuery] = useState('Sidramaraddy M Frontend Developer')
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    skills: false,
    projects: false,
  })
  const [showHireModal, setShowHireModal] = useState(false)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleHireMe = () => {
    setShowHireModal(true)
  }

  const closeHireModal = () => {
    setShowHireModal(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="./profile-pic.png" alt="Google Logo" className="h-8" />
          <div className="flex items-center space-x-4">
            <a href="#contact" className="text-sm hover:underline hidden md:inline">Contact</a>
            <a href="#projects" className="text-sm hover:underline hidden md:inline">Projects</a>
            <button onClick={handleHireMe} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm">
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
            <Search className="absolute right-4 top-3.5 text-blue-500" size={24} />
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600 border-b border-gray-300 pb-3">
          About 1,050,000 results (0.42 seconds)
        </div>

        <div className="mb-8">
          <h1 className="text-xl text-blue-700 hover:underline cursor-pointer mb-1">
            Sidramaraddy M - Frontend Developer | LinkedIn
          </h1>
          <div className="text-green-700 text-sm mb-1">
            https://www.linkedin.com/in/sidramm/
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Experienced Frontend Developer with a strong background in React.js, Angular, and full-stack development. 
            Passionate about creating efficient and user-friendly web applications.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:+919108761650" className="flex items-center text-blue-600 hover:underline">
              <Phone size={16} className="mr-1" /> +91 9108761650
            </a>
            <a href="mailto:siddharthpatil9108@gmail.com" className="flex items-center text-blue-600 hover:underline">
              <Mail size={16} className="mr-1" /> siddharthpatil9108@gmail.com
            </a>
            <a href="https://linkedin.com/in/sidramm/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
              <Linkedin size={16} className="mr-1" /> LinkedIn
            </a>
            <a href="https://github.com/sidram403" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
              <Github size={16} className="mr-1" /> GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Briefcase size={20} className="mr-2 text-blue-500" /> Experience
                </h2>
                <button onClick={() => toggleSection('experience')} className="text-blue-500 hover:text-blue-700">
                  {expandedSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              {(expandedSections.experience || window.innerWidth >= 768) && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Full Stack Developer</h3>
                    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                      <span className="flex items-center"><Briefcase size={12} className="mr-1" /> RentNest</span>
                      <span className="flex items-center"><MapPin size={12} className="mr-1" /> Remote</span>
                      <span className="flex items-center"><Calendar size={12} className="mr-1" /> Sep 2023 - Present</span>
                    </div>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      <li>Developed a startup website for room and PG search in Bangalore</li>
                      <li>Implemented RESTful APIs and microservices using Node.js and Express.js</li>
                      <li>Integrated MongoDB and Firebase, reducing data access latency by 40%</li>
                      <li>Implemented JWT authentication and optimized mobile performance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">SDE- I (Front End Engineer)</h3>
                    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                      <span className="flex items-center"><Briefcase size={12} className="mr-1" /> PairBytes Software</span>
                      <span className="flex items-center"><MapPin size={12} className="mr-1" /> Remote</span>
                      <span className="flex items-center"><Calendar size={12} className="mr-1" /> Jun 2023 - Sep 2023</span>
                    </div>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      <li>Developed a Shopify e-commerce website using React.js</li>
                      <li>Utilized Redux for state management, reducing application bugs by 20%</li>
                      <li>Contributed to the Upsidon project, improving user engagement by 30%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Full-Stack Software Engineer</h3>
                    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
                      <span className="flex items-center"><Briefcase size={12} className="mr-1" /> AlienHU.PVT.LTD</span>
                      <span className="flex items-center"><MapPin size={12} className="mr-1" /> On-site</span>
                      <span className="flex items-center"><Calendar size={12} className="mr-1" /> April 2022 - April 2023</span>
                    </div>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      <li>Developed software programs for salon, retail, and restaurant billing</li>
                      <li>Implemented new features and redesigned company websites</li>
                      <li>Introduced bulk import from Excel and WhatsApp Integration</li>
                      <li>Improved SEO for the company website by 45%</li>
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
                <button onClick={() => toggleSection('projects')} className="text-blue-500 hover:text-blue-700">
                  {expandedSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              {(expandedSections.projects || window.innerWidth >= 768) && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Wallpaper App - React Native</h3>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Calendar size={12} className="mr-1" /> May 2024 - May 2024
                    </div>
                    <p className="text-sm mt-2">
                      Built a new React Native App called Wallpaper App, utilizing various React Native libraries and the Pixabay API.
                    </p>
                    <h4 className="text-sm font-medium mt-2">Key Features:</h4>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>Robust filtering options through a bottom sheet interface</li>
                      <li>Search functionality for specific wallpapers</li>
                      <li>Sharing and downloading capabilities</li>
                    </ul>
                    <h4 className="text-sm font-medium mt-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React Native</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Expo</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pixabay API</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">RentNest — MERN Stack</h3>
                    <p className="text-sm mt-2">
                      A startup website to search rooms, PG, or PG roommates, and Flats for Rent in Bangalore.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">MongoDB</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Node.js</span>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Express.js</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Crypto Hunter App — React</h3>
                    <p className="text-sm mt-2">
                      A user-friendly application for real-time tracking of cryptocurrency prices by market cap.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">API Integration</span>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">State Management</span>
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
                <button onClick={() => toggleSection('skills')} className="text-blue-500 hover:text-blue-700">
                  {expandedSections.skills ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              {(expandedSections.skills || window.innerWidth >= 768) && (
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
                      <li>Git, GitHub, GitLab CI/CD, Jenkins</li>
                      <li>Microservices Architecture</li>
                      <li>JWT Authentication,   OAuth</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText size={20} className="mr-2 text-blue-500" /> Medium Articles
              </h2>
              <div className="space-y-4">
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a href="https://medium.com/@siddharthpatil9108/how-to-create-file-explorer-using-react-a3b955a117b5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    How To Create File Explorer using React
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                  In this article, we’ll walk through the process of building a simple file explorer using React, leveraging its powerful component-based architecture and state management.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a href="https://medium.com/@siddharthpatil9108/backend-developer-roadmap-2024-6e2d0498ab25" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Backend Developer Roadmap — 2024
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                  Let’s explore the key milestones and skills that constitute the ultimate backend developer roadmap.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a href="https://medium.com/@siddharthpatil9108/how-to-make-a-single-slider-with-three-pointer-and-four-values-a0923c93d96f" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    How To Make A Single Slider With Three Pointer And Four Values.
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                  Our goal is to implement a slider with three draggable pointers, each representing a specific value within the slider’s range.
                  </p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium">
                    <a href="https://medium.com/@siddharthpatil9108/open-source-contribution-fostering-collaboration-and-innovation-331d1fa47740" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    The Power of Open Source Contribution: Fostering Collaboration and Innovation
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                  In the realm of software development, open source contribution stands as a cornerstone of innovation, collaboration, and community-driven progress.
                  </p>
                </article>
                <a href="https://medium.com/@siddharthpatil9108" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
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
                <img src="./profile-pic.png" alt="Sidramaraddy M" className="w-24 h-24 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Sidramaraddy M</h3>
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-sm">
                Sidramaraddy M is a passionate Full Stack Developer with expertise in frontend technologies and a strong foundation in backend development. With a track record of building efficient and user-friendly web applications, Sidramaraddy brings creativity and technical prowess to every project.
              </p>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap size={20} className="mr-2 text-blue-500" /> Education
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Bachelor of Technology - Information Technology</h3>
                <div className="text-sm text-gray-600">
                  KLE College Of Engineering and Technology Chikodi
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar size={12} className="mr-1" /> August 2018 - August 2022 | GPA: 8.8
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Computer Science</h3>
                <div className="text-sm text-gray-600">
                  A.K.R.D PU Science College Kalaburagi
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar size={12} className="mr-1" /> May 2016 - July 2018 | Percentage: 79.50
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award size={20} className="mr-2 text-blue-500" /> Honors and Awards
              </h2>
              <ul className="list-disc pl-5 text-sm">
                <li>3 Star Coder at CodeChef and HackerRank</li>
                <li>Third Prize at PIONEER Engineering Project Competition, April 2022</li>
                <li>National Rank 1376 in CodeKaze and All India Rank 241 out of 20K+ participants, March 2022</li>
                <li>Global Rank 95 out of 25K Participants at CodeChef May Long Challenge, May 2021</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4">People also search for</h2>
              <div className="flex flex-wrap gap-2">
                {['React Developer', 'Angular Expert', 'Full Stack Engineer', 'Frontend Specialist', 'MERN Stack Developer'].map((term, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer">
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
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> React.js best practices</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> Angular vs React performance</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> Modern CSS techniques</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Full Stack Development</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> MERN stack tutorial</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> Microservices architecture explained</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><Search size={14} className="mr-2" /> DevOps for web developers</a></li>
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
              Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:siddharthpatil9108@gmail.com" className="flex items-center text-blue-600 hover:underline">
                <Mail size={16} className="mr-2" /> siddharthpatil9108@gmail.com
              </a>
              <a href="tel:+919108761650" className="flex items-center text-blue-600 hover:underline">
                <Phone size={16} className="mr-2" /> +91 9108761650
              </a>
              <a href="https://linkedin.com/in/sidramm/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Linkedin size={16} className="mr-2" /> LinkedIn Profile
              </a>
              <a href="https://github.com/sidram403" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
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
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
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
  )
}