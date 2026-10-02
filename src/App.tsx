import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, ChevronDown, X } from 'lucide-react';

type ProjectColor = 'emerald' | 'blue' | 'green' | 'purple';

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: ProjectColor;
  highlight?: boolean;
  github: string;
  details: string;
}

export default function MLPortfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "NAI-SWAMS: AI-Powered Waste Management",
      description: "Smart waste management system for Nigerian cities using AI to predict waste collection needs and optimize routes.",
      details: "Achieved 99.3% prediction accuracy with Random Forest classifier. Built complete real-time dashboard with voice assistant supporting Pidgin, Yoruba, Hausa and Igbo. Uses Nearest Neighbor for route optimization with a confidence band risk management system.",
      tags: ["Random Forest", "FastAPI", "React", "AI", "Route Optimization"],
      color: "emerald",
      highlight: true,
      github: "https://github.com/Wizcott"
    },
    {
      title: "COVID-19 Fake News Detection",
      description: "Fine-tuned BERT model to classify COVID-19 related news as real or fake with Flask web interface.",
      details: "Built on BERT-base-uncased with a custom classification head (768→512→2). Deployed as a Flask web app with real-time predictions on news headlines. Trained on COVID-19 related news dataset.",
      tags: ["BERT", "PyTorch", "Flask", "NLP"],
      color: "blue",
      github: "https://github.com/Wizcott/Fake-News-"
    },
    {
      title: "Brain Tumor Classifier",
      description: "VGG16-based deep learning model to classify brain scan images into 4 tumor types with Streamlit deployment.",
      details: "Classifies brain MRI scans into glioma, meningioma, pituitary tumor, or no tumor using transfer learning with VGG16. Preprocessed with OpenCV and deployed via Streamlit for easy medical image upload and analysis.",
      tags: ["TensorFlow", "VGG16", "Computer Vision", "Streamlit"],
      color: "green",
      github: "https://github.com/Wizcott"
    },
    {
      title: "Nigerian Music Recommendation System",
      description: "K-Means clustering model for personalized Nigerian music recommendations, achieving 75% accuracy.",
      details: "Applied K-Means clustering with Elbow method for optimal cluster selection. Uses Silhouette score for evaluation, achieving 75% accuracy. Groups similar songs and artists to deliver personalized Nigerian music recommendations.",
      tags: ["K-Means", "Clustering", "Scikit-learn", "Python"],
      color: "purple",
      github: "https://github.com/Wizcott"
    },
    {
      title: "Basketball Player Performance Analysis",
      description: "Deep learning system for basketball player detection, tracking, movement analysis and possession estimation from video.",
      details: "Built with YOLOv8 and ByteTrack for real-time player detection and multi-object tracking. Analyzes player movement patterns, speed, and estimates ball possession. Uses a custom-trained model (model_b_local_best.pt) on basketball footage with full analysis pipeline output.",
      tags: ["YOLOv8", "ByteTrack", "Computer Vision", "Deep Learning", "Object Tracking"],
      color: "blue",
      github: "https://github.com/Wizcott/basketball-player-performance-analysis"
    }
  ];

  const skills: string[] = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn",
    "BERT", "NLP", "Computer Vision", "Deep Learning",
    "Flask", "Streamlit", "Git", "Machine Learning"
  ];

  const colorMap: Record<ProjectColor, string> = {
    emerald: "border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50",
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50"
  };

  const badgeMap: Record<ProjectColor, string> = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FALUYI TESTIMONY OLUWADUYILEMI
            </h1>
            <nav className="flex gap-8">
              <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            AI & Machine Learning Specialist
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Building Intelligent Solutions for{" "}
            <span className="text-blue-600">Real-World Problems</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Specializing in deep learning, NLP, and computer vision with a focus on
            impactful applications in healthcare, smart cities, and social good.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View My Work
              <ChevronRight size={20} />
            </a>
            <div className="text-sm text-gray-500">
              4 projects • 99.3% top accuracy
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-500 mb-12">Click on a project to learn more and view the code 👇</p>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div key={idx}>
              {/* Project Card */}
              <div
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                className={`border-l-4 ${colorMap[project.color]} p-6 rounded-r-lg transition-all duration-300 cursor-pointer ${
                  hoveredProject === idx ? 'shadow-xl translate-x-2' : 'shadow'
                } ${project.highlight ? 'ring-2 ring-emerald-200' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {project.highlight && (
                      <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                        FEATURED PROJECT
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    {selectedProject === idx
                      ? <ChevronDown size={24} className="text-gray-400" />
                      : <ChevronRight size={24} className="text-gray-400" />
                    }
                  </div>
                </div>
              </div>

              {/* Expanded Section */}
              {selectedProject === idx && (
                <div className={`border-l-4 ${colorMap[project.color]} border-t-0 px-6 py-6 rounded-b-lg shadow-lg -mt-1`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">About this project</h4>
                    <button onClick={() => setSelectedProject(null)}>
                      <X size={20} className="text-gray-400 hover:text-gray-700" />
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${badgeMap[project.color]} text-white px-6 py-3 rounded-lg hover:opacity-90 transition shadow`}
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="bg-white/10 border border-white/20 px-5 py-3 rounded-lg hover:bg-white/20 transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Open to collaborations, freelance projects, and full-time opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:Wizcottduyi@gmail.com" className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://github.com/Wizcott" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/testimony-faluyi-6051a224a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>© 2026 Faluyi Testimony Oluwaduyilemi. Built with React & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}