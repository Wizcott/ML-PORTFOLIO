import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

type ProjectColor = 'emerald' | 'blue' | 'green' | 'purple' | 'orange';

interface Project {
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  color: ProjectColor;
  featured?: boolean;
  github: string;
  stat?: { value: string; label: string };
}

export default function MLPortfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projects: Project[] = [
    {
      title: "NAI-SWAMS: AI-Powered Waste Management",
      category: "AI Systems · Smart Cities",
      summary: "Built a full AI system to solve Nigeria's waste crisis — 99.3% prediction accuracy, no hardware needed.",
      description: "Achieved 99.3% prediction accuracy with Random Forest classifier across 720 records and 8 zones. Built complete real-time dashboard with voice assistant supporting Pidgin, Yoruba, Hausa and Igbo. Route optimization via Nearest Neighbor algorithm. Backend: FastAPI + SQLite + Scikit-learn. Frontend: React with Leaflet mapping. Human-in-the-loop design — AI suggests, operators decide.",
      tags: ["Random Forest", "FastAPI", "React", "Route Optimization", "Voice AI", "Scikit-learn"],
      color: "emerald",
      featured: true,
      github: "https://github.com/Wizcott",
      stat: { value: "99.3%", label: "Prediction Accuracy" }
    },
    {
      title: "COVID-19 Fake News Detection",
      category: "NLP · Public Health",
      summary: "Fine-tuned BERT to detect COVID-19 misinformation in real time from news headlines.",
      description: "Built on BERT-base-uncased with a custom classification head (768→512→2). Deployed as a Flask web app with real-time predictions. Trained on a COVID-19 related news dataset with strong generalization to unseen headlines. Users enter a headline and get an instant REAL/FAKE prediction.",
      tags: ["BERT", "PyTorch", "Flask", "NLP", "Transformers"],
      color: "blue",
      github: "https://github.com/Wizcott/Fake-News-",
      stat: { value: "BERT", label: "Transformer Model" }
    },
    {
      title: "Brain Tumor Classifier",
      category: "Computer Vision · Healthcare",
      summary: "VGG16 transfer learning model that classifies brain MRI scans into 4 tumor types via Streamlit.",
      description: "Classifies brain MRI scans into glioma, meningioma, pituitary tumor, or no tumor using transfer learning with VGG16. Images preprocessed with OpenCV and resized to 224×224. Deployed via Streamlit for easy medical image upload and instant classification. Designed to support diagnostic workflows in low-resource medical settings.",
      tags: ["TensorFlow", "VGG16", "Computer Vision", "Streamlit", "Medical AI", "OpenCV"],
      color: "green",
      github: "https://github.com/Wizcott",
      stat: { value: "4", label: "Tumor Classes" }
    },
    {
      title: "Basketball Player Performance Analysis",
      category: "Computer Vision · Sports AI",
      summary: "YOLOv8 + ByteTrack system that detects, tracks and analyses players from basketball footage.",
      description: "Built with YOLOv8 and ByteTrack for real-time player detection and multi-object tracking from basketball video. Analyses player movement patterns, speed, and estimates ball possession across frames. Uses a custom-trained model with a full analysis pipeline output. Final-year deep learning project at FUTA.",
      tags: ["YOLOv8", "ByteTrack", "Object Tracking", "Deep Learning", "Python", "CV"],
      color: "orange",
      github: "https://github.com/Wizcott/basketball-player-performance-analysis",
      stat: { value: "YOLOv8", label: "Detection Model" }
    },
    {
      title: "Nigerian Music Recommendation System",
      category: "Unsupervised ML · RecSys",
      summary: "K-Means clustering that groups Nigerian songs by similarity to deliver personalised recommendations.",
      description: "Applied K-Means clustering with Elbow method for optimal cluster selection. Silhouette score evaluation achieved 75% accuracy. Groups similar songs and artists to deliver personalised Nigerian music recommendations tailored to individual listening preferences. Visualised clusters with scatter plots showing clear group separation.",
      tags: ["K-Means", "Clustering", "Scikit-learn", "Python", "Unsupervised ML"],
      color: "purple",
      github: "https://github.com/Wizcott",
      stat: { value: "75%", label: "Silhouette Score" }
    }
  ];

  const colorAccent: Record<ProjectColor, string> = {
    emerald: "text-emerald-600", blue: "text-blue-600",
    green: "text-green-600", purple: "text-purple-600", orange: "text-orange-500"
  };
  const colorBg: Record<ProjectColor, string> = {
    emerald: "bg-emerald-600", blue: "bg-blue-600",
    green: "bg-green-600", purple: "bg-purple-600", orange: "bg-orange-500"
  };
  const colorBorder: Record<ProjectColor, string> = {
    emerald: "border-emerald-400", blue: "border-blue-400",
    green: "border-green-400", purple: "border-purple-400", orange: "border-orange-400"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-100 shadow-sm' : 'bg-white border-b border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight">Faluyi Testimony</a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-900 transition" onClick={() => setAboutOpen(!aboutOpen)}>
                About <ChevronDown size={14} />
              </button>
              <div className="absolute top-8 left-0 bg-white border border-gray-100 rounded-xl shadow-lg py-2 w-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                <a href="#about" className="block px-4 py-2 hover:bg-gray-50 text-sm">My Story</a>
                <a href="#skills" className="block px-4 py-2 hover:bg-gray-50 text-sm">Skills</a>
              </div>
            </div>
            <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition font-medium">
            Work With Me
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-6 flex flex-col gap-5 text-sm font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-center">Work With Me</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Machine Learning Engineer · FUTA, Nigeria</p>
        <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-8 max-w-4xl">
          Faluyi Testimony<br />
          <span className="text-gray-400">Oluwaduyilemi</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-4">
          I build AI and machine learning systems that solve real problems — from detecting fake news to diagnosing brain tumors.
        </p>
        <p className="text-base text-gray-400 mb-10">
          Machine Learning Engineer. Deep Learning, NLP & Computer Vision specialist. Based in Nigeria, building for the world.
        </p>
        <div className="flex flex-wrap gap-4 mb-20">
          <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium">
            See My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
            Get In Touch
          </a>
        </div>

        {/* Stats ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b border-gray-100 py-8">
          {[
            { value: "5+", label: "ML Projects Built" },
            { value: "99.3%", label: "Top Model Accuracy" },
            { value: "4+", label: "AI Domains" },
            { value: "FUTA", label: "Federal University of Technology, Akure" },
          ].map((s, i) => (
            <div key={i} className={`px-6 ${i !== 0 ? 'border-l border-gray-100' : ''}`}>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT HIGHLIGHT */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Featured Work</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">FEATURED PROJECT</span>
              <h2 className="text-4xl font-bold mb-4 leading-tight">NAI-SWAMS: AI-Powered Waste Management</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Smart waste management for Nigerian cities — 99.3% prediction accuracy with Random Forest, voice assistant in Pidgin, Yoruba, Hausa & Igbo, and real-time route optimization. No hardware required.
              </p>
              <a href="https://github.com/Wizcott" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition font-medium">
                <Github size={18} /> View on GitHub <ExternalLink size={14} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "99.3%", lbl: "Prediction Accuracy" },
                { val: "8", lbl: "Zones Covered" },
                { val: "4", lbl: "Local Languages" },
                { val: "<2s", lbl: "Response Time" },
              ].map((s, i) => (
                <div key={i} className="bg-gray-900 rounded-xl p-5">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{s.val}</div>
                  <div className="text-sm text-gray-400">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Selected Work</p>
        <h2 className="text-4xl font-bold mb-4">Problems solved, not just projects built</h2>
        <p className="text-gray-500 mb-12">Click any project to read more and view the code on GitHub.</p>

        <div className="divide-y divide-gray-100">
          {projects.map((project, idx) => (
            <div key={idx}>
              <button
                onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                className="w-full text-left py-8 group hover:bg-gray-50 px-4 -mx-4 rounded-xl transition"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <p className={`text-xs font-bold uppercase tracking-widest ${colorAccent[project.color]}`}>{project.category}</p>
                      {project.featured && (
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Featured</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition">{project.title}</h3>
                    <p className="text-gray-500">{project.summary}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {project.stat && (
                      <div className="hidden md:block mb-2">
                        <div className={`text-2xl font-bold ${colorAccent[project.color]}`}>{project.stat.value}</div>
                        <div className="text-xs text-gray-400">{project.stat.label}</div>
                      </div>
                    )}
                    <span className="text-2xl text-gray-300 group-hover:text-gray-500 transition">{selectedProject === idx ? '−' : '+'}</span>
                  </div>
                </div>
              </button>

              {/* Expanded */}
              {selectedProject === idx && (
                <div className={`mb-6 border-l-4 ${colorBorder[project.color]} pl-6 ml-4`}>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-600">{tag}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${colorBg[project.color]} text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition text-sm font-medium`}>
                    <Github size={16} /> View on GitHub <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">About</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Building AI that works for Nigeria and the world</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a Machine Learning Engineer from the Federal University of Technology, Akure (FUTA). I specialize in deep learning, NLP, and computer vision — building systems that go from research to real deployment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From classifying brain tumors to detecting COVID-19 misinformation, my work sits at the intersection of AI and social impact. I'm passionate about building intelligent systems that solve meaningful problems for African communities and beyond.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium text-sm">
                Work With Me <ArrowRight size={15} />
              </a>
            </div>
            <div className="space-y-0 divide-y divide-gray-200">
              {[
                { label: "Specialization", value: "Deep Learning, NLP, Computer Vision" },
                { label: "University", value: "Federal University of Technology, Akure (FUTA)" },
                { label: "Collaboration", value: "ODT Labs — NAI-SWAMS Project" },
                { label: "Email", value: "Wizcottduyi@gmail.com" },
                { label: "GitHub", value: "github.com/Wizcott" },
                { label: "Availability", value: "Open to opportunities 🟢" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-4">
                  <span className="text-gray-400 text-sm w-36 shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-gray-800 text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Skills</p>
        <h2 className="text-4xl font-bold mb-12">Technical Toolkit</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "Languages", items: ["Python", "R", "SQL", "JavaScript"] },
            { title: "ML & AI", items: ["TensorFlow", "PyTorch", "Scikit-learn", "BERT", "YOLOv8"] },
            { title: "Domains", items: ["Deep Learning", "NLP", "Computer Vision", "Clustering", "Object Tracking"] },
            { title: "Tools & Deploy", items: ["Flask", "FastAPI", "Streamlit", "React", "Git", "Google Colab"] },
          ].map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="text-gray-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Impactful?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            I'm open to ML engineering roles, research collaborations, and freelance projects. If you have a problem that AI can solve — let's talk.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Contact</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's build something that matters</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Currently open for ML engineering roles, AI research collaborations, and freelance projects. Drop me a message and I'll get back to you.
            </p>
            <div className="space-y-5">
              <a href="mailto:Wizcottduyi@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition">
                  <Mail size={18} className="text-gray-500 group-hover:text-blue-600" />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition text-sm">Wizcottduyi@gmail.com</span>
              </a>
              <a href="https://github.com/Wizcott" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition">
                  <Github size={18} className="text-gray-500 group-hover:text-blue-600" />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition text-sm">github.com/Wizcott</span>
              </a>
              <a href="https://www.linkedin.com/in/testimony-faluyi-6051a224a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition">
                  <Linkedin size={18} className="text-gray-500 group-hover:text-blue-600" />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition resize-none" />
              </div>
              <a href="mailto:Wizcottduyi@gmail.com"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium w-full justify-center">
                Send Message <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-white font-bold text-lg mb-3">Faluyi Testimony</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Machine Learning Engineer building AI solutions for real-world problems.</p>
              <p className="text-sm">Wizcottduyi@gmail.com</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Projects</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#projects" className="hover:text-white transition">NAI-SWAMS</a></li>
                <li><a href="#projects" className="hover:text-white transition">Fake News Detection</a></li>
                <li><a href="#projects" className="hover:text-white transition">Brain Tumor Classifier</a></li>
                <li><a href="#projects" className="hover:text-white transition">Basketball Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/Wizcott" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2"><Github size={14} /> GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/testimony-faluyi-6051a224a" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
                <li><a href="mailto:Wizcottduyi@gmail.com" className="hover:text-white transition flex items-center gap-2"><Mail size={14} /> Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Faluyi Testimony Oluwaduyilemi. All rights reserved.</p>
            <p className="text-gray-600">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>

    </div>
  );
}