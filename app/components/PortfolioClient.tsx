'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Sparkles, GraduationCap, Code, Mail, Linkedin } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  blogPost: string;
  tags: string[];
  featured: boolean;
}

interface PortfolioClientProps {
  projects: Project[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-3"
            >
              <Sparkles className="w-10 h-10 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Axel Fernandes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Software Development Projects & Portfolio
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative web applications, cloud solutions, and software development
              projects built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">About</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Welcome to my portfolio! I&apos;m <span className="text-purple-400 font-semibold">Axel Fernandes</span>,
                a software engineer passionate about building innovative solutions and exploring the world of software engineering.
              </p>
              <p className="text-lg leading-relaxed">
                This project page showcases all my current live projects and serves as a platform to
                demonstrate my work in web applications, cloud solutions, and software development.
              </p>
              <div className="pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-200">Education</h3>
                </div>
                <div className="space-y-3 ml-9">
                  <div>
                    <p className="font-medium text-gray-200">Master of Science in Engineering Management</p>
                    <p className="text-gray-400">California State University, Northridge</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Bachelor of Technology in Computer Engineering</p>
                    <p className="text-gray-400">National Institute of Technology, Kurukshetra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text"
            >
              All Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">
              No projects yet. Add your projects to{' '}
              <code className="bg-gray-800 px-2 py-1 rounded">data/projects.json</code>
            </p>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Made by <span className="text-purple-400 font-semibold">Axel Joaquim Fernandes</span>
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a
                href="mailto:axe.coleslaw322@passinbox.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/axelfernandes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Axelfernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              © {new Date().getFullYear()} Axel Fernandes. Built with Next.js & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </main >
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-strong rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
    >
      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

      {/* Browser Preview for Featured Projects */}
      {project.featured && project.liveUrl && (
        <div className="mb-4 rounded-lg overflow-hidden glass border border-gray-700/50">
          <div className="bg-gray-800/50 px-3 py-2 flex items-center gap-2 border-b border-gray-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <div className="flex-1 bg-gray-900/50 rounded px-2 py-1 text-xs text-gray-400 truncate">
              {project.liveUrl.replace(/^https?:\/\//, '')}
            </div>
          </div>
          <div className="relative w-full" style={{ aspectRatio: '16/9', height: '200px' }}>
            <iframe
              src={project.liveUrl}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              title={`Preview of ${project.title}`}
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full glass border border-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-sm font-bold ring-1 ring-purple-400/30"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-purple-500/20 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {project.blogPost && (
          <a
            href={project.blogPost}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-purple-500/20 transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            Blog
          </a>
        )}
      </div>
    </motion.div>
  );
}
