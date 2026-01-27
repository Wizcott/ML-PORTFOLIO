import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  type Project = {
    title: string;
    description: string;
    tags: string[];
    color: ProjectColor;
    highlight?: boolean;
  };
  const projects: Project[] = [

    {
      title: "NAI-SWAMS: AI-Powered Waste Management",
      description: "Smart waste management system for Nigerian cities using AI to predict waste collection needs and optimize routes. Achieved 99.3% prediction accuracy with Random Forest and built complete dashboard with voice assistant in local languages.",
      tags: ["Random Forest", "FastAPI", "React", "AI", "Route Optimization"],
      color: "emerald",
      highlight: true
    },
    {
      title: "COVID-19 Fake News Detection",
      description: "Fine-tuned BERT model to classify COVID-19 related news as real or fake with Flask web interface.",
      tags: ["BERT", "PyTorch", "Flask", "NLP"],
      color: "blue"
    },
    {
      title: "Brain Tumor Classifier",
      description: "VGG16-based deep learning model to classify brain scan images into 4 tumor types with Streamlit deployment.",
      tags: ["TensorFlow", "VGG16", "Computer Vision", "Streamlit"],
      color: "green"
    },
    {
      title: "Nigerian Music Recommendation System",
      description: "K-Means clustering model for personalized Nigerian music recommendations, achieving 75% accuracy.",
      tags: ["K-Means", "Clustering", "Scikit-learn", "Python"],
      color: "purple"
    }
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", 
    "BERT", "NLP", "Computer Vision", "Deep Learning",
    "Flask", "Streamlit", "Git", "Machine Learning"
  ];

  type ProjectColor = "emerald" | "blue" | "green" | "purple";

  const getColorClasses = (color: ProjectColor, highlight = false) => {

      const colors: Record<ProjectColor, string> = {
    emerald: highlight 
      ? "border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100" 
      : "border-emerald-500 hover:bg-emerald-50",
    blue: "border-blue-500 hover:bg-blue-50",
    green: "border-green-500 hover:bg-green-50",
    purple: "border-purple-500 hover:bg-purple-50"
  };

  return colors[color];

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
            Building Intelligent Solutions for <span className="text-blue-600">Real-World Problems</span>
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
              4 projects • 99.3% avg accuracy
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`border-l-4 ${getColorClasses(project.color, project.highlight)} p-6 rounded-r-lg transition-all duration-300 cursor-pointer ${
                hoveredProject === idx ? 'shadow-xl transform translate-x-2' : 'shadow'
              } ${project.highlight ? 'ring-2 ring-emerald-200' : ''}`}
            >
              {project.highlight && (
                <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  FEATURED PROJECT
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-gray-400 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
              <span 
                key={idx} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-lg hover:bg-white/20 transition cursor-default"
              >
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
            <a 
              href="mailto:Wizcottduyi@gmail.com" 
              className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com/Wizcott" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/testimony-faluyi-6051a224a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              LinkedIn
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
